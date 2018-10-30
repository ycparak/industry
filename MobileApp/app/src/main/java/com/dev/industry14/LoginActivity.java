package com.dev.industry14;

import android.app.ProgressDialog;
import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.dev.industry14.candidate.CandidateHome;
import com.dev.industry14.candidate.model.candInterViewRequest;
import com.dev.industry14.candidate.model.candUser;
import com.dev.industry14.company.CompanyHome;
import com.dev.industry14.company.model.companyUser;
import com.dev.industry14.company.model.posCandidates;
import com.dev.industry14.company.model.posCandidatesArray;
import com.dev.industry14.company.model.positionComp;
import com.firebase.ui.auth.AuthUI;
import com.firebase.ui.auth.IdpResponse;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.prefs.AbstractPreferences;

import static com.dev.industry14.utils.PositionAdapter.positions;


public class LoginActivity extends AppCompatActivity {

    public static ArrayList<candInterViewRequest> cIntReq;        //Array of all interviews
    private  String id ;  // first all users then becomes CAND-ID
    private  String pid ; // temp var
    public static ArrayList<String> positionIDS;  // array of positions parallel to cIntReq

    public static ArrayList<candInterViewRequest> cOfferReq;
    public static ArrayList<String>  positionRDS;







    public static ArrayList<companyUser> companiesForCand;

    public static companyUser c;

    private static final int RC_SIGN_IN = 123;
    private TextView user, pass;
    private FirebaseAuth firebaseAuth;
    public static FirebaseUser currentUser;
    public static ArrayList<positionComp> positions;
    public static ArrayList<candUser> candidates;
    public static ArrayList<Map<String, Object>> posCandHash;
    public static ArrayList<String> candidatesId;

    public static ArrayList<posCandidatesArray> arrayPosCands;
    public static String companyMessage;
    public static ArrayList<String> compIds;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        final FirebaseFirestore db = FirebaseFirestore.getInstance();

        this.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_STATE_ALWAYS_HIDDEN);

        user = (TextView) findViewById(R.id.usernametxt) ;
        pass = (TextView) findViewById(R.id.passworktxt) ;

        companyMessage = "Please accept our offer!";

        Button login = (Button) findViewById(R.id.next_button);

        firebaseAuth = FirebaseAuth.getInstance();

        login.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {

                 String passw = pass.getText().toString().trim();
                 String usern = user.getText().toString().trim().toLowerCase();

              //  passw = "kkkkkk";
               // usern = "kash@gmail.com";

                //passw = "zzzzzz";
               // usern = "zaheer@gmail.com";

                posCandHash = new ArrayList<Map<String, Object>>();

                final ProgressDialog progressDialog = ProgressDialog.show(LoginActivity.this, "Please wait...", "Loging in...", true);

                (firebaseAuth.signInWithEmailAndPassword(usern, passw))
                        .addOnCompleteListener(new OnCompleteListener<AuthResult>() {
                            @Override
                            public void onComplete(@NonNull Task<AuthResult> task) {
                                currentUser = firebaseAuth.getCurrentUser();

                                if (task.isSuccessful()) {

                                    DocumentReference docRef = db.collection("users").document(currentUser.getUid());
                                    docRef.get().addOnCompleteListener(new OnCompleteListener<DocumentSnapshot>() {
                                        @Override
                                        public void onComplete(@NonNull Task<DocumentSnapshot> task) {
                                            if (task.isSuccessful()) {
                                                DocumentSnapshot document = task.getResult();
                                                if (document.exists()) {
                                                    UserLogin temp = document.toObject(UserLogin.class);
                                                    progressDialog.dismiss();
                                                    if (temp.getUserType().equals("company"))
                                                    {
                                                        DocumentReference docRef = db.collection("users").document(currentUser.getUid());
                                                        docRef.get().addOnCompleteListener(new OnCompleteListener<DocumentSnapshot>() {
                                                            @Override
                                                            public void onComplete(@NonNull Task<DocumentSnapshot> task) {
                                                                if (task.isSuccessful()) {
                                                                    DocumentSnapshot document = task.getResult();
                                                                    if (document.exists()) {
                                                                        c = document.toObject(companyUser.class);
                                                                    } else {
                                                                        Log.e("TEST2", "No such document");
                                                                    }
                                                                } else {
                                                                    Log.e("TEST2", "get failed with ", task.getException());
                                                                }
                                                            }
                                                        });

                                                        final FirebaseFirestore db2 = FirebaseFirestore.getInstance();

                                                        positions = new ArrayList<positionComp>();
                                                        // int k = 0;

                                                        db2.collection("positions")
                                                                .whereEqualTo("userId", currentUser.getUid())//field in an user doc
                                                                .get()
                                                                .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                                                                    @Override
                                                                    public void onComplete(@NonNull Task<QuerySnapshot> task) {
                                                                        if (task.isSuccessful()) {
                                                                            for (QueryDocumentSnapshot document : task.getResult()) {
                                                                                positionComp temp = document.toObject(positionComp.class);
                                                                                positions.add(new positionComp(temp.getAddress1(),temp.getAddress2(),temp.getMaxExperiance(),temp.getMinSalary(),temp.getProvence(),temp.getSpec(),temp.getZip(),temp.getCandidates(),temp.getSkills(),temp.getTitle(),temp.getTeam(),temp.getSeniority(),temp.getRole(),temp.getMinExperience(),temp.getMaxSalary(),temp.getUserId(),document.getId()));
                                                                            }

                                                                            final FirebaseFirestore db3 = FirebaseFirestore.getInstance();

                                                                            //positions = new ArrayList<positionComp>();
                                                                            // int k = 0;

                                                                            candidates = new ArrayList<>();
                                                                            candidatesId = new ArrayList<>();


                                                                            db3.collection("users")
                                                                                    .whereEqualTo("userType", "candidate")//field in an user doc
                                                                                    .whereEqualTo("stage2", true)
                                                                                    .get()
                                                                                    .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                                                                                        @Override
                                                                                        public void onComplete(@NonNull Task<QuerySnapshot> task) {
                                                                                            if (task.isSuccessful()) {
                                                                                                for (QueryDocumentSnapshot document : task.getResult()) {
                                                                                                    candUser tempc = document.toObject(candUser.class);
                                                                                                    candidates.add(new candUser(tempc.getAbout(),tempc.getAddressLine1(),tempc.getAddressLine2(),tempc.getAge(),tempc.getAlmaMater(),tempc.getBehanceURL(),tempc.getCity(),tempc.getCompanyTypeNext(),tempc.getContactNumber(),tempc.getCountry(),tempc.getCreatedAt(),tempc.getDescription(), tempc.getDoNext(), tempc.getDribbleURL(), tempc.getEducationLevel(),tempc.getExperience(),tempc.getGithubURL(),tempc.getKeenToWorkFor(),tempc.getLinkedIn(),tempc.getMaxSalary(),tempc.getMinSalary(),tempc.getMotivation(), tempc.getMyExperience(), tempc.getName(),tempc.getPersonalURL(),tempc.getPhotoURL(),tempc.getProvence(),tempc.getRaiting(), tempc.getRole(),tempc.getSkills(), tempc.getSkillsSharp(), tempc.getStackOverflowURL(), tempc.isStage1(),tempc.isStage2(),tempc.isStage3(),tempc.isStage4(),tempc.isStage5(),tempc.isStage6(),tempc.isStage7(),tempc.getSurname(),tempc.getTwitterURL(),tempc.getUserType(), tempc.getWantsToWorkIn(),tempc.getZip()));
                                                                                                    candidatesId.add(document.getId());
                                                                                                    }

                                                                                                 Intent intent = new Intent(LoginActivity.this, CompanyHome.class);
                                                                                                startActivity(intent);

                                                                                            } else {
                                                                                                Log.e("TEST", "Error getting documents: ", task.getException());
                                                                                            }
                                                                                        }
                                                                                    });

                                                                            arrayPosCands = new ArrayList<>();

                                                                            String id, name, photo, surname, stage, status, interview, message, salary, perks, startDate;
                                                                            for (int k = 0; k < positions.size(); k++) {
                                                                                try {
                                                                                    Set set = LoginActivity.positions.get(k).getCandidates().entrySet();
                                                                                    Iterator i = set.iterator();
                                                                                    //Map<String, Object> tempMap = new HashMap<>();
                                                                                    while (i.hasNext()) {
                                                                                        Map.Entry me = (Map.Entry) i.next();
                                                                                        Log.e("TEST", me.toString());


                                                                                        id = me.getKey().toString();


                                                                                        String full = me.getValue().toString();
                                                                                        Log.e("TEST4", full);

                                                                                        full = full.replace("{", "");
                                                                                        full = full.replace("}", "");

                                                                                        String small = full.trim();

                                                                                        String[] parts = small.split(",");

                                                                                        surname = parts[3];
                                                                                        surname = surname.trim();
                                                                                        String[] sSur = surname.split("=");
                                                                                        String qsurname = "surnameN";
                                                                                        try {
                                                                                            qsurname = sSur[1];
                                                                                        } catch (ArrayIndexOutOfBoundsException e) {
                                                                                        }

                                                                                        stage = parts[1];
                                                                                        stage = stage.trim();
                                                                                        String[] sStage = stage.split("=");
                                                                                        String qstage = "stageN";
                                                                                        try {
                                                                                            qstage = sStage[1];
                                                                                        } catch (ArrayIndexOutOfBoundsException e) {
                                                                                        }

                                                                                        name = parts[4];
                                                                                        name = name.trim();
                                                                                        String[] sName = name.split("=");
                                                                                        String qname = "nameN";
                                                                                        try {
                                                                                            qname = sName[1];
                                                                                        } catch (ArrayIndexOutOfBoundsException e) {
                                                                                        }


                                                                                        photo = parts[2];
                                                                                        photo = photo.trim();
                                                                                        String[] sPhoto = photo
                                                                                                .split("=");
                                                                                        String qphoto = "photoN";
                                                                                        try {
                                                                                            qphoto = sPhoto[1];
                                                                                        } catch (ArrayIndexOutOfBoundsException e) {
                                                                                        }

                                                                                        status = parts[0];
                                                                                        status = status.trim();
                                                                                        String[] sStatus = status.split("=");
                                                                                        String qstatus = "statusN";
                                                                                        try {
                                                                                            qstatus = sStatus[1];
                                                                                        } catch (ArrayIndexOutOfBoundsException e) {
                                                                                        }

                                                                                        interview = parts[5];
                                                                                        interview = interview.trim();
                                                                                        String[] sInterview = interview.split("=");
                                                                                        String qInterview = "surnameN";
                                                                                        try {
                                                                                            qInterview = sInterview[1];
                                                                                        } catch (ArrayIndexOutOfBoundsException e) {
                                                                                        }

                                                                                        message = parts[7];
                                                                                        message = message.trim();
                                                                                        String[] sMessage = message.split("=");
                                                                                        String qMessage = "messageN";
                                                                                        try {
                                                                                            qMessage = sMessage[1];
                                                                                        } catch (ArrayIndexOutOfBoundsException e) {
                                                                                        }

                                                                                        salary = parts[8];
                                                                                        salary = salary.trim();
                                                                                        String[] sSalary = salary.split("=");
                                                                                        String qsalary = "salaryN";
                                                                                        try {
                                                                                            qsalary = sSalary[1];
                                                                                        } catch (ArrayIndexOutOfBoundsException e) {
                                                                                        }

                                                                                        perks = parts[9];
                                                                                        perks = perks.trim();
                                                                                        String[] sPerks = perks.split("=");
                                                                                        String qperks = "perksN";
                                                                                        try {
                                                                                            qperks = sPerks[1];
                                                                                        } catch (ArrayIndexOutOfBoundsException e) {
                                                                                        }


                                                                                        startDate = parts[6];
                                                                                        startDate = startDate.trim();
                                                                                        String[] sStartDate = startDate.split("=");
                                                                                        String qstartDate = "startDN";
                                                                                        try {
                                                                                            qstartDate = sStartDate[1];
                                                                                        } catch (ArrayIndexOutOfBoundsException e) {
                                                                                        }

                                                                                        if ((id == currentUser.getUid()) || (id.equals(currentUser.getUid()))) {
                                                                                            companyMessage = qMessage;
                                                                                            Log.e("TESTE", companyMessage);
                                                                                        }


                                                                                        // tempMap.put(id,new posCandidates(qname,qphoto,qsurname,qstage));
                                                                                        arrayPosCands.add(new posCandidatesArray(qname, qphoto, qsurname, qstage, positions.get(k).getiD(), id, qstatus, qInterview, qMessage, qsalary, qperks, qstartDate));
                                                                                        Log.e("TEST5", "name=" + qname + "     " + "photo=" + qphoto + "     " + "sur=" + qsurname + "     " + "stag=" + qstage + "     " + "status=" + qstatus + "inter=" + qInterview + "mess=" + qMessage + "salary=" + qsalary + "      perks=" + qperks + "     startDate=" + qstartDate);


                                                                                    }/*
                                                                                posCandHash.add(tempMap);
                                                                                ArrayList<posCandidates> pos1Cand = new ArrayList<>();
                                                                                for (Map.Entry<String, Object> entry : tempMap.entrySet()) {
                                                                                    //Log.e("TEST", "TEST"+entry.getKey() + ":" + entry.getValue());
                                                                                    //Log.e("TESTER", "key="+entry.getKey()+"   id="+positions.get(0).getiD() );
                                                                                    if(entry.getKey() == positions.get(0).getiD())
                                                                                    {
                                                                                        pos1Cand.add(((posCandidates) entry.getValue()));
                                                                                        Log.e("TEST", pos1Cand.get(0).getName());
                                                                                    }

                                                                                }*/


                                                                                }catch (NullPointerException e) {}
                                                                                //Intent intent = new Intent(LoginActivity.this, CompanyHome.class);
                                                                                //startActivity(intent);

                                                                            }

                                                                        } else {
                                                                            Log.e("TEST", "Error getting documents: ", task.getException());
                                                                        }
                                                                    }
                                                                });


                                                         Intent intent = new Intent(LoginActivity.this, CompanyHome.class);
                                                         startActivity(intent);
                                                    }
                                                    else
                                                    {
                                                        companiesForCand = new ArrayList<>();
                                                        compIds = new ArrayList<>();
                                                        db.collection("users")                      //field in an user doc
                                                                .whereEqualTo("userType", "company")
                                                                .get()
                                                                .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                                                                    @Override
                                                                    public void onComplete(@NonNull Task<QuerySnapshot> task) {
                                                                        if (task.isSuccessful()) {
                                                                            for (QueryDocumentSnapshot document : task.getResult()) {

                                                                                compIds.add(document.getId());
                                                                                companyUser cz = document.toObject(companyUser.class);
                                                                               companiesForCand.add(new companyUser(cz.getAccountName(),cz.getAccountNumber(),cz.getAddressLine1(),cz.getAddressLine2(),cz.getBranchCode(),cz.getBusinessCulture(),cz.getBusinessDescription(),cz.getBusinessEngineering(),cz.getBusinessHiring(),cz.getBusinessNumber(),cz.getBusinessType(),cz.getBusinessURL(),cz.getBusinessWhat(),cz.getBusinessWhy(),cz.getCity(),cz.getCompanyName(),cz.getCompanyNumber(),cz.getCountry(),cz.getCreatedAt(),cz.getName(),cz.getNumEmployees(),cz.getOwnerName(),cz.getOwnerNumber1(),cz.getOwnerNumber2(),cz.getOwnerSurname(),cz.getOwnerTitle(),cz.getPerks(),cz.getProvence(),cz.isStage1(),cz.isStage2(),cz.isStage3(),cz.getSurname(),cz.getTechStack(),cz.getTradingName(),cz.getUserType(),cz.getZip()));

                                                                            }
                                                                        } else {
                                                                            Log.e("TEST", "Error getting documents: ", task.getException());
                                                                        }
                                                                    }
                                                                });








                                                        final FirebaseFirestore db = FirebaseFirestore.getInstance();
                                                        positionRDS = new ArrayList<>();
                                                        cOfferReq = new ArrayList<>();


                                                        db.collection("offer_letters")       //all the pos
                                                                .get()
                                                                .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                                                                    @Override
                                                                    public void onComplete(@NonNull Task<QuerySnapshot> task) {
                                                                        if (task.isSuccessful()) {
                                                                            for (DocumentSnapshot document : task.getResult()) {


                                                                                String[] full = document.getId().split("_");

                                                                                id = full[0];
                                                                                pid = full[1];


                                                                                if ((id == LoginActivity.currentUser.getUid()) || (id.equals(LoginActivity.currentUser.getUid()))) {
                                                                                    candInterViewRequest temp = new candInterViewRequest();
                                                                                    temp = document.toObject(candInterViewRequest.class);
                                                                                    Log.e("ZZ", "added" );
                                                                                    cOfferReq.add(temp);
                                                                                    positionRDS.add(pid);
                                                                                }

                                                                            }

                                                                            id = LoginActivity.currentUser.getUid();


                                                                            for (int i = 0; i < cOfferReq.size(); i++) {
                                                                                if ((cOfferReq.get(i).getStatus().equals("accepted")) || (cOfferReq.get(i).getStatus() == "accepted")) {
                                                                                    cOfferReq.remove(i);
                                                                                    positionRDS.remove(i);
                                                                                    Log.e("ZZ", "removed" );
                                                                                }
                                                                            }


                                                                        }
                                                                    }

                                                                });



















                                                        final FirebaseFirestore db2 = FirebaseFirestore.getInstance();
                                                        cIntReq = new ArrayList<>();

                                                        positionIDS = new ArrayList<>();



                                                        db2.collection("interview_requests")       //all the pos
                                                                .get()
                                                                .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                                                                    @Override
                                                                    public void onComplete(@NonNull Task<QuerySnapshot> task) {
                                                                        if (task.isSuccessful()) {
                                                                            for (DocumentSnapshot document : task.getResult()) {



                                                                                String[] full = document.getId().split("_");

                                                                                id = full[0];
                                                                                pid = full[1];


                                                                                if((id == LoginActivity.currentUser.getUid())||(id.equals(LoginActivity.currentUser.getUid())))
                                                                                {
                                                                                    candInterViewRequest temp = new candInterViewRequest();
                                                                                    temp  = document.toObject(candInterViewRequest.class);
                                                                                    cIntReq.add(temp);
                                                                                    positionIDS.add(pid);

                                                                                }

                                                                            }

                                                                            id = LoginActivity.currentUser.getUid();
                                                                            for(int i = 0; i < cIntReq.size(); i++)
                                                                            {
                                                                                if((cIntReq.get(i).getStatus().equals("accepted") || (cIntReq.get(i).getStatus() == "accepted")))
                                                                                {
                                                                                    cIntReq.remove(i);
                                                                                    positionIDS.remove(i);
                                                                                }
                                                                            }


                                                                            Log.e("TEST9", "DONE " );

                                                                            Intent intent = new Intent(LoginActivity.this, CandidateHome.class);
                                                                            startActivity(intent);

                                                                        } else {

                                                                        }

                                                                    }

                                                                });




                                                    }
                                                } else {
                                                    Log.e("TEST2", "No such document");
                                                }
                                            } else {
                                                Log.e("TEST2", "get failed with ", task.getException());
                                            }
                                        }
                                    });

                                } else {
                                    Log.e("ERROR", task.getException().toString());
                                    Toast.makeText(LoginActivity.this, task.getException().getMessage(), Toast.LENGTH_LONG).show();
                                    progressDialog.dismiss();

                                }
                            }
                        });
            }

        });/*





      /*  db.collection("users")          //all the users
                .get()
                .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                    @Override
                    public void onComplete(@NonNull Task<QuerySnapshot> task) {
                        if (task.isSuccessful()) {
                            for (DocumentSnapshot document : task.getResult()) {
                                Log.e("TEST", document.getId() + " => " + document.getData());
                                Log.e("TEST", "--------------------------------------------------------" );
                            }
                        } else {
                            Log.e("TEST", "Error getting documents.", task.getException());
                        }
                    }
                });


        db.collection("positions")       //all the pos
                .get()
                .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                    @Override
                    public void onComplete(@NonNull Task<QuerySnapshot> task) {
                        if (task.isSuccessful()) {
                            for (DocumentSnapshot document : task.getResult()) {
                                Log.e("TEST", document.getId() + " => " + document.getData());
                                Log.e("TEST", "--------------------------------------------------------" );
                            }
                        } else {
                            Log.e("TEST", "Error getting documents.", task.getException());
                        }
                    }
                });
        /*                                                                                     //Specific comp
        DocumentReference docRef = db.collection("users").document("QrswGZaIGUYz0PvITEYIkeSNRu02");
        docRef.get().addOnCompleteListener(new OnCompleteListener<DocumentSnapshot>() {
            @Override
            public void onComplete(@NonNull Task<DocumentSnapshot> task) {
                if (task.isSuccessful()) {
                    DocumentSnapshot document = task.getResult();
                    if (document.exists()) {
                        Log.e("TEST2", "DocumentSnapshot data: " + document.getData());
                        Jane j = document.toObject(Jane.class);
                        Log.e("TEST", j.getName() );
                    } else {
                        Log.e("TEST2", "No such document");
                    }
                } else {
                    Log.e("TEST2", "get failed with ", task.getException());
                }
            }
        });*/

       /* db.collection("users")                      //field in an user doc
                .whereEqualTo("userType", "company")
                .get()
                .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                    @Override
                    public void onComplete(@NonNull Task<QuerySnapshot> task) {
                        if (task.isSuccessful()) {
                            for (QueryDocumentSnapshot document : task.getResult()) {
                                Log.e("TEST", document.getId() + " => " + document.getData());

                            }
                        } else {
                            Log.e("TEST", "Error getting documents: ", task.getException());
                        }
                    }
                });*/












    }



}

