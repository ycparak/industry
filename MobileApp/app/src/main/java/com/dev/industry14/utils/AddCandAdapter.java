package com.dev.industry14.utils;



import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.support.annotation.NonNull;
import android.support.design.widget.Snackbar;
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

import com.dev.industry14.LoginActivity;
import com.dev.industry14.candidate.model.candUser;
import com.dev.industry14.candidate.popup.CandInfoPopup;
import com.dev.industry14.R;
import com.dev.industry14.candidate.model.User;
import com.dev.industry14.company.logic.PositionFragment;
import com.dev.industry14.company.model.candAddPos;
import com.dev.industry14.company.model.posCandidatesArray;
import com.dev.industry14.company.model.positionComp;
import com.dev.industry14.company.popup.CompPosEditPopup;
import com.dev.industry14.company.popup.CompPosPopup;
import com.dev.industry14.company.popup.CompPosViewPopup;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import static com.dev.industry14.LoginActivity.candidates;
import static com.dev.industry14.LoginActivity.candidatesId;
import static com.dev.industry14.LoginActivity.currentUser;
import static com.dev.industry14.LoginActivity.posCandHash;
import static com.dev.industry14.LoginActivity.positions;
import static com.dev.industry14.utils.PositionAdapter.currentPosition;

public class AddCandAdapter extends RecyclerView.Adapter<AddCandAdapter.ViewHolder> {

    public static User user;
    private static Context context;
    public static int currentPosition;
    private static TextView txtCandName, txtCandRaiting;
    private static Button btnCandView;
    private static String[] raiting;
    private static ArrayList<String> name2, location2;
    public static Map<String, Object> tempMapCommit;
    public static int refactor;
    private static ArrayList<candUser> candidatesAdd;

    public static class ViewHolder extends RecyclerView.ViewHolder {

        public ViewHolder(final View v) {
            super(v);
            v.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    AddCandAdapter.currentPosition = getAdapterPosition();
                   // user = new User("","",raiting[getAdapterPosition()],currentPosition);//name2.get(getAdapterPosition()), location2.get(getAdapterPosition()), raiting[getAdapterPosition()], getAdapterPosition());
                    Intent candInfo = new Intent(context,CandInfoPopup.class);
                    candInfo.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                    context.startActivity(candInfo);
                }
            });
            txtCandName = (TextView) v.findViewById(R.id.txtCandName);
            txtCandRaiting = (TextView) v.findViewById(R.id.txtCandRaiting);
            btnCandView = (Button) v.findViewById(R.id.btnCandView);
            tempMapCommit = new HashMap<>();
            btnCandView.setOnClickListener(new View.OnClickListener() {

                @Override
                public void onClick(View view) {

                   // btnCandView.setText("Remove");

                  /**  CompPosPopup.mAdapter.notifyItemRemoved(currentPosition);
                    candidatesAdd.remove(currentPosition);
                    Toast.makeText(context, candidatesAdd.get(currentPosition).getName() + " added!",
                            Toast.LENGTH_LONG).show();**/

                    // btnCandView.setBackgroundColor(Color.rgb(183, 28, 28));
                   // btnCandView.setBackgroundResource(R.color.red);


                  //  btnCandView.setBackgroundColor(Color.WHITE);

                    currentPosition = getAdapterPosition();
                    refactor++;
                    LoginActivity.arrayPosCands.add(new posCandidatesArray(candidates.get(currentPosition).getName(),candidates.get(currentPosition).getPhotoURL(),candidates.get(currentPosition).getSurname(),"uncontacted","filler",candidatesId.get(currentPosition),"pending","filler","filler","filler", "filler", "filler"));


                    tempMapCommit.put(candidatesId.get(currentPosition), new candAddPos(candidates.get(currentPosition).getName(),candidates.get(currentPosition).getSurname(),candidates.get(currentPosition).getPhotoURL(),"uncontacted","pending","x","x","x", "x", "x"));
                    Toast.makeText(context, candidatesAdd.get(currentPosition).getName() + " added!",
                            Toast.LENGTH_LONG).show();
                }

            });


        }

        public TextView getText() {
            return txtCandName;
        }
        public TextView getRatingTextView() {
            return txtCandRaiting;
        }

    }

    public AddCandAdapter(Context c, ArrayList<candUser> candidates){
       this.candidatesAdd = candidates;
       // this.raiting = arrRating;
        this.context = c;
        this.currentPosition = 0;
        this.refactor = 0;
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup viewGroup, int viewType) {

        View v = LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.text_row_item2, viewGroup, false);


        return new ViewHolder(v);
    }


    @Override
    public void onBindViewHolder(ViewHolder viewHolder, final int position) {

        if(!(position>=candidatesAdd.size())){
            viewHolder.getText().setText(candidatesAdd.get(position).getName());       //SET COMPONENTS
            viewHolder.getRatingTextView().setText(candidatesAdd.get(position).getRaiting()+"%");
        }


    }


    @Override
    public int getItemCount() {
        return candidatesAdd.size();//name2.size()-1;
    }
}
