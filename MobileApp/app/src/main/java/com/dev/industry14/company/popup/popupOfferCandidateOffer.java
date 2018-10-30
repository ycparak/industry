package com.dev.industry14.company.popup;

import android.os.Bundle;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.dev.industry14.R;
import com.dev.industry14.company.model.interview_requests;
import com.dev.industry14.utils.OfferAdapter;
import com.dev.industry14.utils.PositionAdapter;
import com.dev.industry14.utils.viewCandPosAdapter;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.FirebaseFirestore;

import static com.dev.industry14.LoginActivity.candidates;
import static com.dev.industry14.LoginActivity.candidatesId;
import static com.dev.industry14.LoginActivity.currentUser;
import static com.dev.industry14.LoginActivity.positions;

public class popupOfferCandidateOffer extends AppCompatActivity {

    private TextView perkss, startDs, sals, messagr ;
    private TextView set;
    private Button btn;
    int posOfCandInCand2;
    String message, perks, startD, sal;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.popup_messages_offer);

        perkss = (TextView) findViewById(R.id.offerPerks);
        startDs = (TextView) findViewById(R.id.offerStartDate);
        messagr = (TextView) findViewById(R.id.offerMessage);
        sals = (TextView) findViewById(R.id.offerSalary);
        set = (TextView) findViewById(R.id.txxtChangeMessage) ;

        btn = (Button) findViewById(R.id.btnSendToCandOffer);

        posOfCandInCand2 =0;
        for(int l = 0; l < candidates.size() - 1; l++)
        {
            if((viewCandPosAdapter.smaller2.get(viewCandPosAdapter.posForSending).getName().equals(candidates.get(l).getName()))||(viewCandPosAdapter.smaller2.get(viewCandPosAdapter.posForSending).getName() == candidates.get(l).getName()))
            {
                posOfCandInCand2 = l;
            }
        }
        set.setText("Extend Offer Letter to "+ candidates.get(posOfCandInCand2).getName());




        //txtChangeMessage.getText( );




        btn.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {



                 message = messagr.getText().toString();
                 perks = perkss.getText().toString();
                 startD = startDs.getText().toString();
                 sal = sals.getText().toString();

                Log.e("TEST", "YESS");

                run();

                Toast.makeText(getApplicationContext(), "Response sent to "+ candidates.get(posOfCandInCand2).getName(), Toast.LENGTH_SHORT).show();


                finish();

            }

        });






        DisplayMetrics dm = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(dm);

        int width = dm.widthPixels;
        int height = dm.heightPixels;

        getWindow().setLayout(((int) (width * 0.9)), (int) (height *1));


    }

    /*@Override
    public void onBackPressed() {

    }*/

    private void run()
    {
        int posOfCandInCand =0;
        for(int l = 0; l < candidates.size() - 1; l++)
        {
            if((viewCandPosAdapter.smaller2.get(viewCandPosAdapter.posForSending).getName().equals(candidates.get(l).getName()))||(viewCandPosAdapter.smaller2.get(viewCandPosAdapter.posForSending).getName() == candidates.get(l).getName()))
            {
                posOfCandInCand = l;
            }
        }

        if((viewCandPosAdapter.smaller2.get(viewCandPosAdapter.posForSending).getStage() == "interviewing")||(viewCandPosAdapter.smaller2.get(viewCandPosAdapter.posForSending).getStage().equals("interviewing")))
        {
            final interview_requests interview = new interview_requests(candidatesId.get(posOfCandInCand), currentUser.getUid(), viewCandPosAdapter.smaller2.get(viewCandPosAdapter.posForSending).getInterviewDate(), message, candidates.get(posOfCandInCand).getName(), perks, candidates.get(posOfCandInCand).getPhotoURL(),positions.get(PositionAdapter.chatPositionId).getiD(), sal,"offerExtended", startD,"pending",viewCandPosAdapter.smaller2.get(viewCandPosAdapter.posForSending).getSurname());
            final FirebaseFirestore db = FirebaseFirestore.getInstance();
            db.collection("offer_letters").document(candidatesId.get(posOfCandInCand)+"_"+positions.get(PositionAdapter.chatPositionId).getiD()).set(interview);


            final FirebaseFirestore db3 = FirebaseFirestore.getInstance();
            DocumentReference docRef3 = db3.collection("position_candidates").document(OfferAdapter.positionRD.get(OfferAdapter.currentPoso)+"_"+OfferAdapter.OfferReq.get(OfferAdapter.currentPoso).getCandidateId());
            docRef3.update("stage","offerExtended");
            docRef3.update("status","pending");


//update pos side for cand
            final FirebaseFirestore db2 = FirebaseFirestore.getInstance();
            DocumentReference docRef = db2.collection("positions").document(positions.get(PositionAdapter.chatPositionId).getiD());
            docRef.update("candidates."+candidatesId.get(posOfCandInCand)+".stage","offerExtended");
            docRef.update("candidates."+candidatesId.get(posOfCandInCand)+".status","pending");
            docRef.update("candidates."+candidatesId.get(posOfCandInCand)+".message",message);
            docRef.update("candidates."+candidatesId.get(posOfCandInCand)+".perks",perks);
            docRef.update("candidates."+candidatesId.get(posOfCandInCand)+".salary",sal);
            docRef.update("candidates."+candidatesId.get(posOfCandInCand)+".startDate",startD);
        }
    }
}