package com.dev.industry14.company.popup;

import android.content.Context;
import android.content.Intent;
import android.content.res.Resources;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.Snackbar;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.Spinner;
import android.widget.TextView;

import com.dev.industry14.LoginActivity;
import com.dev.industry14.R;
import com.dev.industry14.candidate.model.candUser;
import com.dev.industry14.company.CompanyHome;
import com.dev.industry14.company.logic.PositionFragment;
import com.dev.industry14.company.logic.SearchFragment;
import com.dev.industry14.company.model.posCandidates;
import com.dev.industry14.company.model.posCandidatesArray;
import com.dev.industry14.company.model.positionComp;
import com.dev.industry14.company.model.position_candidates;
import com.dev.industry14.utils.AddCandAdapter;
import com.dev.industry14.utils.CustomAdapter;
import com.dev.industry14.utils.PositionAdapter;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import static com.dev.industry14.LoginActivity.arrayPosCands;
import static com.dev.industry14.LoginActivity.candidates;
import static com.dev.industry14.LoginActivity.candidatesId;
import static com.dev.industry14.LoginActivity.currentUser;
import static com.dev.industry14.LoginActivity.posCandHash;
import static com.dev.industry14.LoginActivity.positions;
import static com.dev.industry14.company.logic.PositionFragment.setRecyclerViewLayoutManager;
import static com.dev.industry14.utils.AddCandAdapter.tempMapCommit;
import static com.dev.industry14.utils.PositionAdapter.currentPosition;
import static java.security.AccessController.getContext;

public class CompPosPopup extends AppCompatActivity implements AdapterView.OnItemSelectedListener{

    private ImageButton btnNextP;
    private Button btnFinishP, btnAddCandToPos;
    private ImageButton btnNextPosAdd;
    private Spinner posSenior, posRole;
    private TextView posName,posTeam,posExperiance,posSalary;
    private TextView posAddr1, posAddr2, posZip, posProv, posDesc;
    private String seniority, role;

    private static Context context = null;

    private String[] name, location, rating;
    private ArrayList<String> name2, location2, raiting2;








    private enum LayoutManagerType {
        GRID_LAYOUT_MANAGER,
        LINEAR_LAYOUT_MANAGER
    }

    protected static LayoutManagerType mCurrentLayoutManagerType;
    private static final String TAG = "RecyclerViewFragment";
    private static final String KEY_LAYOUT_MANAGER = "layoutManager";

    protected static RecyclerView mRecyclerView;
    public static AddCandAdapter mAdapter;
    protected static RecyclerView.LayoutManager mLayoutManager;
    protected String[] mDataset;
    private static Bundle savedInstanceStates;
    private static final int SPAN_COUNT = 2;












    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        savedInstanceStates = savedInstanceState;
        context = this.getApplicationContext();
        setContentView(R.layout.fragment_pos1_add);

        btnNextP = (ImageButton) findViewById(R.id.btnFinish);

        posName = (TextView) findViewById(R.id.posName);
        posTeam = (TextView) findViewById(R.id.posTeam);
        posExperiance = (TextView) findViewById(R.id.posExperience);
        posSalary = (TextView) findViewById(R.id.posSalary);

        posSenior = (Spinner) findViewById(R.id.posSenior);
        posRole = (Spinner) findViewById(R.id.posRole);

        ArrayAdapter<CharSequence> adapterL = ArrayAdapter.createFromResource(this,
                R.array.senior_array, android.R.layout.simple_spinner_item);
        ArrayAdapter<CharSequence> adapterJ = ArrayAdapter.createFromResource(this,
                R.array.jobs_array, android.R.layout.simple_spinner_item);

        adapterL.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        adapterJ.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);

        posSenior.setAdapter(adapterL);
        posSenior.setOnItemSelectedListener(this);
        posRole.setAdapter(adapterJ);
        posRole.setOnItemSelectedListener(this);

        DisplayMetrics dm = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(dm);

        int width = dm.widthPixels;
        int height = dm.heightPixels;

        getWindow().setLayout(((int) (width * 0.9)), (int) (height* 0.9));

        btnNextP.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {
                setContentView(R.layout.fragment_pos2_add);
                part1(view);
            }

        });




    }

    public void part1(final View v) {

        btnNextPosAdd = (ImageButton) findViewById(R.id.btnNextPosAdd);
        posAddr1 = (TextView) findViewById(R.id.posAddr1);
        posAddr2 = (TextView) findViewById(R.id.posAddr2);
        posZip = (TextView) findViewById(R.id.posZip);
        posProv = (TextView) findViewById(R.id.posProv);
        posDesc = (TextView) findViewById(R.id.posDesc);
       ImageButton btnBack = (ImageButton) findViewById(R.id.btnBack);

        btnNextPosAdd.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {
                setContentView(R.layout.fragment_pos3_add);
                part2(view);
            }

        });

        btnBack.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {
                setContentView(R.layout.fragment_pos1_add);
            }

        });
    }

    public void part2(final View v)
    {

        btnFinishP = (Button) findViewById(R.id.btnFinishP);
        //btnAddCandToPos = (Button) findViewById(R.id.btnAddCandToPos);


        //btnFinishP.setOnClickListener(new View.OnClickListener() {

           // @Override
         //   public void onClick(View view) {
              //  positionComp minus = new positionComp(positions.get(currentPosition).getAddress1(),positions.get(currentPosition).getAddress2(),positions.get(currentPosition).getMaxExperiance(),positions.get(currentPosition).getMinSalary(),positions.get(currentPosition).getProvence(),positions.get(currentPosition).getSpec(),positions.get(currentPosition).getZip(),posCandHash.get(currentPosition)/*positions.get(currentPosition).getCandidates()*/,positions.get(currentPosition).getSkills(),positions.get(currentPosition).getTitle(),positions.get(currentPosition).getTeam(),positions.get(currentPosition).getSeniority(),positions.get(currentPosition).getRole(),positions.get(currentPosition).getMinExperience(),positions.get(currentPosition).getMaxSalary(),positions.get(currentPosition).getUserId(), positions.get(currentPosition).getiD());
             //   FirebaseFirestore db = FirebaseFirestore.getInstance();

             //   db.collection("positions").add(minus);
          //  }

      //  });











        initDataset();
        mRecyclerView = (RecyclerView) findViewById(R.id.recyclerView5);

        mLayoutManager = new LinearLayoutManager(this.context);

        mCurrentLayoutManagerType = LayoutManagerType.LINEAR_LAYOUT_MANAGER;

        if (savedInstanceStates != null) {

            mCurrentLayoutManagerType = (LayoutManagerType) savedInstanceStates
                    .getSerializable(KEY_LAYOUT_MANAGER);
        }
        setRecyclerViewLayoutManager(mCurrentLayoutManagerType);

        mAdapter = new AddCandAdapter(context,LoginActivity.candidates);

        mRecyclerView.setAdapter(mAdapter);

        setRecyclerViewLayoutManager(LayoutManagerType.LINEAR_LAYOUT_MANAGER);

























































        //btnAddCandToPos.setOnClickListener(new View.OnClickListener() {

           // @Override
           // public void onClick(View view) {

           // }

       // });

        btnFinishP.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {
               // Log.e("TEST", "SIZE="+posCandHash.size() );

                posCandHash.add(tempMapCommit);



                final Map<String, Object> newPosCandHash = new HashMap<>();

                //posCandHash.put("HhHJJHFkh6678",new posCandidates("Andrew","url.com","Devraj","7"));
                //posCandHash.put("hGFhouUYgfiVvg78",new posCandidates("Talya","ur2.com","Naidoo","3"));


                //posCandHash.add(newPosCandHash);

                final ArrayList<String> skills = new ArrayList<String>();
                skills.add("Java");
                skills.add("C++");
                skills.add("Kotlin");



                final positionComp minus = new positionComp(posAddr1.getText().toString(), posAddr2.getText().toString(), "5 Yyears", "R20000", posProv.getText().toString(), posDesc.getText().toString(), posZip.getText().toString() , posCandHash.get(posCandHash.size()-1), skills,  posName.getText().toString(),posTeam.getText().toString(),seniority,role,posExperiance.getText().toString(),posSalary.getText().toString(), currentUser.getUid(),"placeholder");

                final FirebaseFirestore db = FirebaseFirestore.getInstance();

                final String[] idP = {""};

                db.collection("positions").add(minus);

                db.collection("positions")
                        .whereEqualTo("title", posName.getText().toString())//field in an user doc
                        .get()
                        .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                            @Override
                            public void onComplete(@NonNull Task<QuerySnapshot> task) {
                                if (task.isSuccessful()) {
                                    for (QueryDocumentSnapshot document : task.getResult()) {
                                        positions.add(new positionComp(posAddr1.getText().toString(), posAddr2.getText().toString(), "5 Yyears", "R20000", posProv.getText().toString(), posDesc.getText().toString(), posZip.getText().toString() ,posCandHash.get(posCandHash.size()-1), skills,  posName.getText().toString(),posTeam.getText().toString(),seniority,role,posExperiance.getText().toString(),posSalary.getText().toString(), currentUser.getUid(),document.getId()));
                                    }
                                    idP[0] = positions.get(positions.size()-1).getiD();

                                    positionComp m = new positionComp(posAddr1.getText().toString(), posAddr2.getText().toString(), "5 Yyears", "R20000", posProv.getText().toString(), posDesc.getText().toString(), posZip.getText().toString() , posCandHash.get(posCandHash.size()-1), skills,  posName.getText().toString(),posTeam.getText().toString(),seniority,role,posExperiance.getText().toString(),posSalary.getText().toString(), currentUser.getUid(),idP[0]);

                                    Set< Map.Entry< String,Object> > st = tempMapCommit.entrySet();

                                    for (Map.Entry< String,Object> me:st)

                                        for(int i = 0; i < tempMapCommit.size(); i++){
                                        position_candidates pc = new position_candidates(me.getKey(), LoginActivity.currentUser.getUid(), idP[0], "uncontacted", "pending");

                                        db.collection("position_candidates").document(me.getKey()+ "_" + idP[0]).set(pc);
                                    }


                                   // LoginActivity.arrayPosCands.add(new posCandidatesArray(candidates.get(currentPosition).getName(),candidates.get(currentPosition).getPhotoURL(),candidates.get(currentPosition).getSurname(),"uncontacted",idP[0],candidatesId.get(currentPosition)));

                                    for(int j = 0; j < AddCandAdapter.refactor; j++){

                                        LoginActivity.arrayPosCands.get(arrayPosCands.size()-1-j).setPosNum(idP[0]);
                                    }


                                    DocumentReference docRef = db.collection("positions").document(positions.get(positions.size()-1).getiD());
                                    docRef.set(m);
                                    Snackbar.make(v, "Position +" + positions.get(currentPosition).getTitle()+ " Added", Snackbar.LENGTH_SHORT).show();
                                    PositionFragment.refresh();
                                    finish();

                                } else {
                                    Log.e("TEST", "Error getting documents: ", task.getException());
                                }
                            }
                        });




            }

        });
    }



    public void onItemSelected(AdapterView<?> parent, View view,
                               int pos, long id) {
        // An item was selected. You can retrieve the selected item using

        Spinner posSenior = (Spinner) parent;
        Spinner posRole = (Spinner) parent;
        if(posSenior.getId() == R.id.posSenior)
        {
            //PositionFragment.q.setSenior(parent.getItemAtPosition(pos).toString());
            seniority = parent.getItemAtPosition(pos).toString();
        }
        if(posRole.getId() == R.id.posRole)
        {
           // PositionFragment.q.setRole(parent.getItemAtPosition(pos).toString());
            role = parent.getItemAtPosition(pos).toString();
        }

    }

    public void onNothingSelected(AdapterView<?> parent) {
        // Another interface callback
    }



















    public static void setRecyclerViewLayoutManager(LayoutManagerType layoutManagerType) {
        int scrollPosition = 0;

        if (mRecyclerView.getLayoutManager() != null) {
            scrollPosition = ((LinearLayoutManager) mRecyclerView.getLayoutManager())
                    .findFirstCompletelyVisibleItemPosition();
        }

        switch (layoutManagerType) {
            case GRID_LAYOUT_MANAGER:
                mLayoutManager = new GridLayoutManager(context, SPAN_COUNT);
                mCurrentLayoutManagerType = LayoutManagerType.GRID_LAYOUT_MANAGER;
                break;
            case LINEAR_LAYOUT_MANAGER:
                mLayoutManager = new LinearLayoutManager(context);
                mCurrentLayoutManagerType = LayoutManagerType.LINEAR_LAYOUT_MANAGER;
                break;
            default:
                mLayoutManager = new LinearLayoutManager(context);
                mCurrentLayoutManagerType = LayoutManagerType.LINEAR_LAYOUT_MANAGER;
        }

        mRecyclerView.setLayoutManager(mLayoutManager);
        mRecyclerView.scrollToPosition(scrollPosition);
    }

    private void initDataset() {
        //name = new String[20];
        //location = new String[20];
        rating = new String[20];
        raiting2 = new ArrayList<>();
        Resources res = getResources();
        rating = res.getStringArray(R.array.rating_array);

        //name2 = new ArrayList<>();
        //location2 = new ArrayList<>();



        //name = res.getStringArray(R.array.name_array);
        //location = res.getStringArray(R.array.location2_array);


        /*name2.add("zaheer");
        name2.add("talya");
        name2.add("karina");

        location2.add("bbb");
        location2.add("bbb2");
        location2.add("bbb3");

        raiting2.add("ccc");
        raiting2.add("ccc2");
        raiting2.add("ccc3");*/
    }
}


