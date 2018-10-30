package com.dev.industry14.utils;

import android.content.Context;
import android.content.Intent;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import com.dev.industry14.R;
import com.dev.industry14.candidate.model.User;
import com.dev.industry14.candidate.popup.CandInfoPopup;
import com.dev.industry14.candidate.popup.PosCandInfoPopup;
import com.dev.industry14.company.model.candAddPos;
import com.dev.industry14.company.model.interview_requests;
import com.dev.industry14.company.model.posCandidatesArray;
import com.dev.industry14.company.model.positionComp;
import com.dev.industry14.company.popup.CompPosEditPopup;
import com.dev.industry14.company.popup.CompPosViewPopup;
import com.dev.industry14.company.popup.popupOfferCandidate;
import com.dev.industry14.company.popup.popupOfferCandidateOffer;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.FirebaseFirestore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import static com.dev.industry14.LoginActivity.arrayPosCands;
import static com.dev.industry14.LoginActivity.candidates;
import static com.dev.industry14.LoginActivity.candidatesId;
import static com.dev.industry14.LoginActivity.currentUser;
import static com.dev.industry14.LoginActivity.posCandHash;
import static com.dev.industry14.LoginActivity.positions;

public class viewCandPosAdapter extends RecyclerView.Adapter<viewCandPosAdapter.ViewHolder>{

    public static User user;
    private static Context context;
    public static int currentPosition;
    private static TextView txtCandPosNameShow, txtCandRaiting;
    private static Button btnCandPosView;
    private static String[] raiting;
    private static ArrayList<String> name2, location2;
    public static Map<String, Object> tempMapCommit;
    public ArrayList<posCandidatesArray> smaller;
    public static ArrayList<posCandidatesArray> smaller2;
    public static String nameOfCand;
    private String sType;
    public String extType;

    public static int posForSending;

    public class ViewHolder extends RecyclerView.ViewHolder {

        public ViewHolder(final View v) {
            super(v);
            v.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {

                    posForSending = getAdapterPosition();
                    smaller2 = new ArrayList<>();
                    smaller2 = smaller;

                    if((smaller2.get(viewCandPosAdapter.posForSending).getStage() == "uncontacted")||(viewCandPosAdapter.smaller2.get(viewCandPosAdapter.posForSending).getStage().equals("uncontacted")))
                    {
                        Intent send = new Intent(context,popupOfferCandidate.class);
                        send.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                        context.startActivity(send);
                    }else
                    {
                        Intent send = new Intent(context,popupOfferCandidateOffer.class);
                        send.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                        context.startActivity(send);
                    }


                   /* int posOfCandInCand =0;
                    for(int l = 0; l < candidates.size() - 1; l++)
                    {
                        if((smaller.get(getAdapterPosition()).getName().equals(candidates.get(l).getName()))||(smaller.get(getAdapterPosition()).getName() == candidates.get(l).getName()))
                        {
                            posOfCandInCand = l;
                        }
                    }

               if((smaller.get(getAdapterPosition()).getStage() == "uncontacted")||(smaller.get(getAdapterPosition()).getStage().equals("uncontacted")))
                    {
                        final interview_requests interview = new interview_requests(candidatesId.get(posOfCandInCand), currentUser.getUid(), "2018-09-12", "invitation to interview", candidates.get(posOfCandInCand).getName(), candidates.get(posOfCandInCand).getPhotoURL(),positions.get(PositionAdapter.chatPositionId).getiD(),"interviewExtended","pending",smaller.get(getAdapterPosition()).getSurname());
                        final FirebaseFirestore db = FirebaseFirestore.getInstance();
                        db.collection("interview_requests").document(candidatesId.get(posOfCandInCand)+"_"+positions.get(PositionAdapter.chatPositionId).getiD()).set(interview);

//update pos side for cand
                        final FirebaseFirestore db2 = FirebaseFirestore.getInstance();
                        DocumentReference docRef = db2.collection("positions").document(positions.get(PositionAdapter.chatPositionId).getiD());

                        Log.e("TEST", candidatesId.get(posOfCandInCand) );

                        docRef.update("candidates."+candidatesId.get(posOfCandInCand)+".stage","interviewExtended");
                        docRef.update("candidates."+candidatesId.get(posOfCandInCand)+".status","pending");
                        docRef.update("candidates."+candidatesId.get(posOfCandInCand)+".interviewDate","2018-09-12");
                        docRef.update("candidates."+candidatesId.get(posOfCandInCand)+".message","invitation to interview");
                    }
                    else
                        if((smaller.get(getAdapterPosition()).getStage() == "interviewing")||(smaller.get(getAdapterPosition()).getStage().equals("interviewing")))
               {
                   final interview_requests interview = new interview_requests(candidatesId.get(posOfCandInCand), currentUser.getUid(), "2018-09-12", "offerLetter", candidates.get(posOfCandInCand).getName(), candidates.get(posOfCandInCand).getPhotoURL(),positions.get(PositionAdapter.chatPositionId).getiD(),"offerExtended","pending",smaller.get(getAdapterPosition()).getSurname());
                   final FirebaseFirestore db = FirebaseFirestore.getInstance();
                   db.collection("offer_letters").document(candidatesId.get(posOfCandInCand)+"_"+positions.get(PositionAdapter.chatPositionId).getiD()).set(interview);

//update pos side for cand
                   final FirebaseFirestore db2 = FirebaseFirestore.getInstance();
                   DocumentReference docRef = db2.collection("positions").document(positions.get(PositionAdapter.chatPositionId).getiD());
                   docRef.update("candidates."+candidatesId.get(posOfCandInCand)+".stage","offerExtended");
                   docRef.update("candidates."+candidatesId.get(posOfCandInCand)+".status","pending");
                   docRef.update("candidates."+candidatesId.get(posOfCandInCand)+".interviewDate","2018-09-12");
                   docRef.update("candidates."+candidatesId.get(posOfCandInCand)+".message","offerLetter");
               }*/
//add







                }
            });
            txtCandPosNameShow = (TextView) v.findViewById(R.id.txtCandPosNameShow);
            btnCandPosView = (Button) v.findViewById(R.id.btnCandPosView);

            btnCandPosView.setOnClickListener(new View.OnClickListener() {

                @Override
                public void onClick(View view) {
                    nameOfCand = smaller.get(getAdapterPosition()).getName();

                    //viewCandPosAdapter.currentPosition = getAdapterPosition();
                    //user = new User("","",raiting[getAdapterPosition()],currentPosition);//name2.get(getAdapterPosition()), location2.get(getAdapterPosition()), raiting[getAdapterPosition()], getAdapterPosition());
                    Intent candInfo = new Intent(context,PosCandInfoPopup.class);
                    candInfo.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                    context.startActivity(candInfo);
                    }

            });


        }

        public TextView getText() {
            return txtCandPosNameShow;
        }

    }

    public viewCandPosAdapter(Context c, ArrayList<String> arrName, ArrayList<String> arrLocation,String[] arrRating, String string){
        // this.name2 = arrName;
        // this.location2 = arrLocation;
        this.raiting = arrRating;
        this.context = c;
        this.currentPosition = 0;
        this.sType = string;


        smaller = new ArrayList<>();

        Log.e("TESTT", String.valueOf(arrayPosCands.size()) );

        for(int z = 0; z < arrayPosCands.size(); z++)
        {
            //Log.e("TEST3", arrayPosCands.get(z).getId() );
            //Log.e("TEST3", arrayPosCands.get(z).getId()  + "     " +positions.get(PositionAdapter.currentPosition).getiD()  );
            if(arrayPosCands.get(z).getPosNum() == positions.get(PositionAdapter.currentPosition).getiD())
            {
                if((arrayPosCands.get(z).getStage().equals(sType))||(arrayPosCands.get(z).getStage() == sType))
                {
                  //  Log.e("TEST", "HERE" );
                    smaller.add(arrayPosCands.get(z));

                }
            }

        }
        //Log.e("TEST", "smaller size top==" + String.valueOf(smaller.size()) );
    }

    @Override
    public viewCandPosAdapter.ViewHolder onCreateViewHolder(ViewGroup viewGroup, int viewType) {

        View v = LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.text_row_item3, viewGroup, false);


        return new viewCandPosAdapter.ViewHolder(v);
    }


    @Override
    public void onBindViewHolder(viewCandPosAdapter.ViewHolder viewHolder, final int position) {
        Log.e("TEST", "name="+smaller.get(position).getName()+ "     pos="+String.valueOf(position) +"   smaller="+smaller.size() );//SET COMPONENTS

        if(!(position >= smaller.size())){
            viewHolder.getText().setText(smaller.get(position).getName());
            Log.e("TEST", "name="+smaller.get(position).getName()+ "     pos="+String.valueOf(position) );//SET COMPONENTS
            //  viewHolder.getRatingTextView().setText("Rating: "+raiting[position]);
        }


    }


    @Override
    public int getItemCount() {

        int i = 0;

        for(int z = 0; z < arrayPosCands.size(); z++)
        {

            if(arrayPosCands.get(z).getPosNum() == positions.get(PositionAdapter.currentPosition).getiD())
            {//Log.e("TEST", arrayPosCands.get(z).getStage()+ "    " +sType );
                if((arrayPosCands.get(z).getStage().equals(sType))||(arrayPosCands.get(z).getStage() == sType))
                {
                    i++;
                }
            }

        }
       // Log.e("TEST", sType );
       // Log.e("TEST", "smaller size bottom==" + String.valueOf(i) );
        return i;
        //smaller.size();//arrayPosCands.size();//name2.size()-1;
    }
    
    }

//update int_req   for cand           // Log.e("TEST", candidatesId.get(posOfCandInCand)+"_"+positions.get(PositionAdapter.chatPositionId).getiD());
//final FirebaseFirestore db = FirebaseFirestore.getInstance();
// DocumentReference docRef = db.collection("interview_requests").document(candidatesId.get(posOfCandInCand)+"_"+positions.get(PositionAdapter.chatPositionId).getiD());
// docRef.update("candidates.0vf6DSsCo3fACTtrr9bw0RX1b0j1.stage","uncontacted");
// docRef.update("stage","hired");
// docRef.update("status","accepted");