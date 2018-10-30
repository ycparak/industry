package com.dev.industry14.candidate.popup;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.dev.industry14.LoginActivity;
import com.dev.industry14.R;
import com.dev.industry14.candidate.model.candInterViewRequest;
import com.dev.industry14.company.model.interview_requests;
import com.dev.industry14.utils.ChatAdapter;
import com.dev.industry14.utils.OfferAdapter;
import com.dev.industry14.utils.PositionAdapter;
import com.dev.industry14.utils.viewCandPosAdapter;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;

import static com.dev.industry14.LoginActivity.candidates;
import static com.dev.industry14.LoginActivity.candidatesId;
import static com.dev.industry14.LoginActivity.currentUser;
import static com.dev.industry14.LoginActivity.positions;

public class popupOfferCandidatec extends AppCompatActivity {

    private TextView txtInput, txtHeading;
    private Button btnAccept, btnDecline;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.popup_messages_cand);

        txtInput = (TextView) findViewById(R.id.txtInputIntMessage);
        txtHeading = (TextView) findViewById(R.id.lblIntSend);
        btnAccept = (Button) findViewById(R.id.btnSendToCandc);
        btnDecline = (Button) findViewById(R.id.btnAddToPositionCancelc);

        txtHeading.setText("RE: Interview Request From "+LoginActivity.companiesForCand.get(ChatAdapter.currentCompanyInt).getAccountName());


        DisplayMetrics dm = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(dm);

        int width = dm.widthPixels;
        int height = dm.heightPixels;

        getWindow().setLayout(((int) (width * 0.9)), (int) (height *0.57));

        btnAccept.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {

                String message = txtInput.getText().toString();
                final FirebaseFirestore db = FirebaseFirestore.getInstance();
                DocumentReference docRef = db.collection("interview_requests").document(ChatAdapter.IntReq.get(ChatAdapter.currentPosi).getCandidateId()+"_"+ChatAdapter.positionID.get(ChatAdapter.currentPosi));
                docRef.update("stage","interviewing");
                docRef.update("status","accepted");
                docRef.update("message",message);

                final FirebaseFirestore db3 = FirebaseFirestore.getInstance();
                DocumentReference docRef3 = db3.collection("position_candidates").document(OfferAdapter.positionRD.get(OfferAdapter.currentPoso)+"_"+OfferAdapter.OfferReq.get(OfferAdapter.currentPoso).getCandidateId());
                docRef3.update("stage","interviewing");
                docRef3.update("status","accepted");

                final FirebaseFirestore db2 = FirebaseFirestore.getInstance();
                DocumentReference docRef2 = db2.collection("positions").document(ChatAdapter.positionID.get(ChatAdapter.currentPosi));
                docRef2.update("candidates."+ChatAdapter.IntReq.get(ChatAdapter.currentPosi).getCandidateId()+".stage","interviewing");
                docRef2.update("candidates."+ChatAdapter.IntReq.get(ChatAdapter.currentPosi).getCandidateId()+".status","accepted");
                docRef2.update("candidates."+ChatAdapter.IntReq.get(ChatAdapter.currentPosi).getCandidateId()+".message",message);

                Toast.makeText(getApplicationContext(), "Response sent to "+LoginActivity.companiesForCand.get(OfferAdapter.currentCompanyOffer).getAccountName(), Toast.LENGTH_SHORT).show();

                finish();
            }

        });

        btnDecline.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {

            finish();

            }

        });


    }


}



















