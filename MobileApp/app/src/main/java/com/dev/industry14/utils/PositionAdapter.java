package com.dev.industry14.utils;



import android.content.Context;
import android.content.Intent;
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

import com.dev.industry14.candidate.popup.CandInfoPopup;
import com.dev.industry14.R;
import com.dev.industry14.candidate.model.User;
import com.dev.industry14.company.logic.PositionFragment;
import com.dev.industry14.company.model.positionComp;
import com.dev.industry14.company.popup.CompPosEditPopup;
import com.dev.industry14.company.popup.CompPosPopup;
import com.dev.industry14.company.popup.CompPosViewPopup;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.firestore.FirebaseFirestore;

import java.util.ArrayList;
import java.util.Random;

import static com.dev.industry14.LoginActivity.positions;

public class PositionAdapter extends RecyclerView.Adapter<PositionAdapter.ViewHolder> {

    public static User user;

    private static final String TAG = "PositionAdapter";

    public static ArrayList<positionComp> positions;
    public static int currentPosition;

    private static Context context;

    private static TextView txtPosNameShow;

    private static ImageButton btnPosEditShow, btnPosRemoveEditShow;
    private static Button btnViewPos;
    public static int chatPositionId;


    public static class ViewHolder extends RecyclerView.ViewHolder {

        public ViewHolder(View v) {
            super(v);
            v.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    Log.e("TEST4", "Element " + getAdapterPosition() + " clicked.");    //container onClick

                }
            });
            txtPosNameShow = (TextView) v.findViewById(R.id.txtPosNameSee);
            btnViewPos = (Button) v.findViewById(R.id.btnViewPos);
            btnPosEditShow = (ImageButton) v.findViewById(R.id.btnEditPos);
            btnPosRemoveEditShow = (ImageButton) v.findViewById(R.id.btnDeletePos);

            btnPosEditShow.setOnClickListener(new View.OnClickListener() {

                @Override
                public void onClick(View view) {
                    currentPosition = getAdapterPosition();
                    Intent editPos = new Intent(context,CompPosEditPopup.class);
                    context.startActivity(editPos);
                }

            });

            btnViewPos.setOnClickListener(new View.OnClickListener() {

                @Override
                public void onClick(View view) {
                    currentPosition = getAdapterPosition();
                    chatPositionId = getAdapterPosition();
                    Intent viewPos = new Intent(context,CompPosViewPopup.class);
                    context.startActivity(viewPos);

                }

            });

            btnPosRemoveEditShow.setOnClickListener(new View.OnClickListener() {

                @Override
                public void onClick(final View view) {

                    FirebaseFirestore db = FirebaseFirestore.getInstance();

                    db.collection("positions").document(positions.get(getAdapterPosition()).getiD())
                            .delete()
                            .addOnSuccessListener(new OnSuccessListener<Void>() {
                                @Override
                                public void onSuccess(Void aVoid) {
                                    Snackbar.make(view, "Position +" + positions.get(getAdapterPosition()).getTitle()+ " Deleted", Snackbar.LENGTH_SHORT).show();
                                    positions.remove(getAdapterPosition());
                                    PositionFragment.refresh();
                                }
                            })
                            .addOnFailureListener(new OnFailureListener() {
                                @Override
                                public void onFailure(@NonNull Exception e) {
                                    Log.w(TAG, "Error deleting document", e);
                                }
                            });

                }

            });


        }

        public TextView getText() {
            return txtPosNameShow;
        }

    }

    public PositionAdapter(Context c, ArrayList<positionComp> positions) {
        this.positions = positions;
        this.context = c;
        currentPosition = 0;
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup viewGroup, int viewType) {

        View v = LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.row_pos, viewGroup, false);

        return new ViewHolder(v);
    }


    @Override
    public void onBindViewHolder(ViewHolder viewHolder, final int position) {

        viewHolder.getText().setText(positions.get(position).getTitle());

    }


    @Override
    public int getItemCount() {
        return positions.size();
    }
}
