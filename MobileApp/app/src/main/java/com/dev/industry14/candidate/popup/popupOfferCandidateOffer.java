package com.dev.industry14.candidate.popup;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.dev.industry14.LoginActivity;
import com.dev.industry14.R;
import com.dev.industry14.utils.ChatAdapter;
import com.dev.industry14.utils.CustomAdapter;
import com.dev.industry14.utils.OfferAdapter;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.FirebaseFirestore;

import static com.dev.industry14.LoginActivity.candidates;
import static com.dev.industry14.LoginActivity.companiesForCand;

public class popupOfferCandidateOffer extends AppCompatActivity{

    private Button btnAccepto, btnDeclineo;
    private TextView txtInputo, txtHeadingo;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.popup_messages_cand);

        txtInputo = (TextView) findViewById(R.id.txtInputIntMessage);
        txtHeadingo = (TextView) findViewById(R.id.lblIntSend);

        btnAccepto = (Button) findViewById(R.id.btnSendToCandc);
        btnDeclineo = (Button) findViewById(R.id.btnAddToPositionCancelc);

        txtHeadingo.setText("RE: Offer From "+ LoginActivity.companiesForCand.get(OfferAdapter.currentCompanyOffer).getAccountName());


        DisplayMetrics dm = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(dm);

        int width = dm.widthPixels;
        int height = dm.heightPixels;

        getWindow().setLayout(((int) (width * 0.9)), (int) (height *0.57));

        btnAccepto.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {

                String messageo = txtInputo.getText().toString();
               final FirebaseFirestore db = FirebaseFirestore.getInstance();
                DocumentReference docRef = db.collection("offer_letters").document(OfferAdapter.OfferReq.get(OfferAdapter.currentPoso).getCandidateId()+"_"+OfferAdapter.positionRD.get(OfferAdapter.currentPoso));
                docRef.update("stage","hired");
                docRef.update("status","accepted");
                docRef.update("message",messageo);

                final FirebaseFirestore db3 = FirebaseFirestore.getInstance();
                DocumentReference docRef3 = db3.collection("position_candidates").document(OfferAdapter.positionRD.get(OfferAdapter.currentPoso)+"_"+OfferAdapter.OfferReq.get(OfferAdapter.currentPoso).getCandidateId());
                docRef3.update("stage","hired");
                docRef3.update("status","accepted");

                final FirebaseFirestore db2 = FirebaseFirestore.getInstance();

                DocumentReference docRef2 = db2.collection("positions").document(OfferAdapter.positionRD.get(OfferAdapter.currentPoso));
                docRef2.update("candidates."+ OfferAdapter.OfferReq.get((OfferAdapter.currentPoso)).getCandidateId()+".stage","hired");
                docRef2.update("candidates."+OfferAdapter.OfferReq.get((OfferAdapter.currentPoso)).getCandidateId()+".status","accepted");
                docRef2.update("candidates."+OfferAdapter.OfferReq.get((OfferAdapter.currentPoso)).getCandidateId()+".message",messageo);

                Toast.makeText(getApplicationContext(), "Response sent to "+LoginActivity.companiesForCand.get(OfferAdapter.currentCompanyOffer).getAccountName(), Toast.LENGTH_SHORT).show();


                finish();
            }

        });

        btnDeclineo.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {

                finish();

            }

        });


    }


}
