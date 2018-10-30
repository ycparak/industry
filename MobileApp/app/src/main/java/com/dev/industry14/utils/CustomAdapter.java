package com.dev.industry14.utils;



import android.content.Context;
import android.content.Intent;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.dev.industry14.candidate.model.candUser;
import com.dev.industry14.candidate.popup.CandInfoPopup;
import com.dev.industry14.R;
import com.dev.industry14.candidate.model.User;
import com.dev.industry14.company.popup.CandAddToPosPopup;

import java.util.ArrayList;
import java.util.Random;

import static com.dev.industry14.LoginActivity.candidates;

public class CustomAdapter extends RecyclerView.Adapter<CustomAdapter.ViewHolder> {

    public static User user;

    private static final String TAG = "CustomAdapter";

   // private static String[] name;
    //private static String[] location;
    private static String[] raiting;
    private static Context context;
    private static TextView txtName, txtLocation, txtRating;
    private static Button btnMore;
    private static ImageButton btnFav;
    private static ImageView imgSearch;
    private static ArrayList<String> name2, location2;
    public static int currentPosCust;
    public static int currentPosCandidate;
    private final ArrayList<candUser> cands;

    public static class ViewHolder extends RecyclerView.ViewHolder {

        public ViewHolder(View v) {
            super(v);
            v.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    currentPosCust = getAdapterPosition();
                    Log.d(TAG, "Element " + getAdapterPosition() + " clicked.");    //container onClick

                }
            });
            txtName = (TextView) v.findViewById(R.id.txtName);
            txtLocation = (TextView) v.findViewById(R.id.txtLocation);
            txtRating = (TextView) v.findViewById(R.id.txtRaiting);//other ones on click
            btnMore = (Button) v.findViewById(R.id.btnMore);
            btnFav = (ImageButton) v.findViewById(R.id.btnFav);
            imgSearch = (ImageView) v.findViewById(R.id.imgSearch);

            btnMore.setOnClickListener(new View.OnClickListener() {

                @Override
                public void onClick(View view) {
                    //user = new User("","",raiting[getAdapterPosition()],9);//name2.get(getAdapterPosition()), location2.get(getAdapterPosition()), raiting[getAdapterPosition()], getAdapterPosition());
                    Intent candInfo = new Intent(context,CandInfoPopup.class);
                    currentPosCust = getAdapterPosition();
                    context.startActivity(candInfo);

                }

            });

            btnFav.setOnClickListener(new View.OnClickListener() {

                @Override
                public void onClick(View view) {

                    Intent candInfo = new Intent(context,CandAddToPosPopup.class);
                    currentPosCandidate = getAdapterPosition();
                    context.startActivity(candInfo);



                }

            });
        }

        public TextView getNameTextView() {
            return txtName;
        }
        public TextView getLocationTextView() {
            return txtLocation;
        }
        public TextView getRatingTextView() {
            return txtRating;
        }
        public Button getButtonView() {
            return btnMore;
        }
        public ImageButton getButtonFav() {
            return btnFav;
        }
        public ImageView getImageView() {
            return imgSearch;
        }
    }

    public CustomAdapter(Context c, ArrayList<candUser> cand){
        this.context = c;
        currentPosCust = 0;
        this.cands = cand;
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup viewGroup, int viewType) {

        View v = LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.text_row_item, viewGroup, false);

        return new ViewHolder(v);
    }


    @Override
    public void onBindViewHolder(ViewHolder viewHolder, final int position) {

        if(!(position>=cands.size())){
            viewHolder.getNameTextView().setText(cands.get(position).getName());       //SET COMPONENTS
            viewHolder.getLocationTextView().setText(cands.get(position).getCity());
            viewHolder.getRatingTextView().setText(cands.get(position).getRaiting() + "%");
        }



        Random r = new Random();
        int rand = r.nextInt(7 - 1) + 1;
        ImageHelper.getImage(rand, viewHolder.getImageView());

    }


    @Override
    public int getItemCount() {
        return cands.size();
    }
}
