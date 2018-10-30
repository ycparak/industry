package com.dev.industry14.company.popup;

import android.content.Context;
import android.content.res.Resources;
import android.os.Bundle;
import android.support.design.widget.Snackbar;
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
import com.dev.industry14.company.logic.PositionFragment;
import com.dev.industry14.company.model.candAddPos;
import com.dev.industry14.company.model.posCandidatesArray;
import com.dev.industry14.company.model.positionComp;
import com.dev.industry14.utils.AddCandAdapter;
import com.dev.industry14.utils.PositionAdapter;
import com.dev.industry14.utils.viewCandPosAdapter;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.FirebaseFirestore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import static com.dev.industry14.LoginActivity.arrayPosCands;
import static com.dev.industry14.LoginActivity.candidates;
import static com.dev.industry14.LoginActivity.candidatesId;
import static com.dev.industry14.LoginActivity.posCandHash;
import static com.dev.industry14.LoginActivity.positions;
import static com.dev.industry14.utils.AddCandAdapter.tempMapCommit;
import static com.dev.industry14.utils.PositionAdapter.currentPosition;

public class CompPosViewPopup extends AppCompatActivity {

    private static TextView pname,pteam,psenor,prole,pexp,psalary;
    private static ImageButton btnNextPosSee;
    private static Button btnFinishPosSee;
    public static Map<String, Object> tempMapCommit1;





    private static Context context = null;

    private String[] name, location, rating;
    private ArrayList<String> name2, location2, raiting2;
    private enum LayoutManagerType {
        GRID_LAYOUT_MANAGER,
        LINEAR_LAYOUT_MANAGER
    }

    protected static CompPosViewPopup.LayoutManagerType mCurrentLayoutManagerType;
    private static final String TAG = "RecyclerViewFragment";
    private static final String KEY_LAYOUT_MANAGER = "layoutManager";

    protected static RecyclerView mRecyclerView;
    protected static viewCandPosAdapter mAdapter;
    protected static RecyclerView.LayoutManager mLayoutManager;
    protected String[] mDataset;
    private static Bundle savedInstanceStates;
    private static final int SPAN_COUNT = 2;




    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.fragment_pos_1);

        context = this.getApplicationContext();

        pname = (TextView) findViewById(R.id.txtShowPosV);
        pteam = (TextView) findViewById(R.id.txtTeamPosShow);
        psenor = (TextView) findViewById(R.id.txtSeniorPosShow);
        prole = (TextView) findViewById(R.id.txtRolePosShow);
        pexp = (TextView) findViewById(R.id.txtExpPosShow);
        psalary = (TextView) findViewById(R.id.txtSalaryPosShow);
        btnNextPosSee = (ImageButton) findViewById(R.id.btnNextPosSee);

        pname.setText(positions.get(currentPosition).getTitle());
        pteam.setText(positions.get(currentPosition).getTeam());
        psenor.setText(positions.get(currentPosition).getSeniority());
        prole.setText(positions.get(currentPosition).getRole());
        pexp.setText(positions.get(currentPosition).getMinExperience());
        psalary.setText(positions.get(currentPosition).getMaxSalary());


        DisplayMetrics dm = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(dm);

        int width = dm.widthPixels;
        int height = dm.heightPixels;

        getWindow().setLayout(((int) (width * 0.9)), (int) (height* 0.9));

        btnNextPosSee.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {



                setContentView(R.layout.fragment_pos_2);
                part(view);



            }

        });




    }

    public void part(View v){

        btnFinishPosSee = (Button) findViewById(R.id.btnFinishPosSee);










        initDataset();
        mRecyclerView = (RecyclerView) findViewById(R.id.recyclerView6);

        mLayoutManager = new LinearLayoutManager(this.context);

        mCurrentLayoutManagerType = CompPosViewPopup.LayoutManagerType.LINEAR_LAYOUT_MANAGER;

        if (savedInstanceStates != null) {

            mCurrentLayoutManagerType = (CompPosViewPopup.LayoutManagerType) savedInstanceStates
                    .getSerializable(KEY_LAYOUT_MANAGER);
        }
        setRecyclerViewLayoutManager(mCurrentLayoutManagerType);

        mAdapter = new viewCandPosAdapter(context,name2,location2,rating,"uncontacted");

        mRecyclerView.setAdapter(mAdapter);

        setRecyclerViewLayoutManager(CompPosViewPopup.LayoutManagerType.LINEAR_LAYOUT_MANAGER);

        mRecyclerView = (RecyclerView) findViewById(R.id.recyclerView7);

        mLayoutManager = new LinearLayoutManager(this.context);

        mCurrentLayoutManagerType = CompPosViewPopup.LayoutManagerType.LINEAR_LAYOUT_MANAGER;

        if (savedInstanceStates != null) {

            mCurrentLayoutManagerType = (CompPosViewPopup.LayoutManagerType) savedInstanceStates
                    .getSerializable(KEY_LAYOUT_MANAGER);
        }
        setRecyclerViewLayoutManager(mCurrentLayoutManagerType);

        mAdapter = new viewCandPosAdapter(context,name2,location2,rating,"interviewExtended");

        mRecyclerView.setAdapter(mAdapter);

        setRecyclerViewLayoutManager(CompPosViewPopup.LayoutManagerType.LINEAR_LAYOUT_MANAGER);

        mRecyclerView = (RecyclerView) findViewById(R.id.recyclerView8);

        mLayoutManager = new LinearLayoutManager(this.context);

        mCurrentLayoutManagerType = CompPosViewPopup.LayoutManagerType.LINEAR_LAYOUT_MANAGER;

        if (savedInstanceStates != null) {

            mCurrentLayoutManagerType = (CompPosViewPopup.LayoutManagerType) savedInstanceStates
                    .getSerializable(KEY_LAYOUT_MANAGER);
        }
        setRecyclerViewLayoutManager(mCurrentLayoutManagerType);

        mAdapter = new viewCandPosAdapter(context,name2,location2,rating,"interviewing");

        mRecyclerView.setAdapter(mAdapter);

        setRecyclerViewLayoutManager(CompPosViewPopup.LayoutManagerType.LINEAR_LAYOUT_MANAGER);


        mRecyclerView = (RecyclerView) findViewById(R.id.recyclerView9);

        mLayoutManager = new LinearLayoutManager(this.context);

        mCurrentLayoutManagerType = CompPosViewPopup.LayoutManagerType.LINEAR_LAYOUT_MANAGER;

        if (savedInstanceStates != null) {

            mCurrentLayoutManagerType = (CompPosViewPopup.LayoutManagerType) savedInstanceStates
                    .getSerializable(KEY_LAYOUT_MANAGER);
        }
        setRecyclerViewLayoutManager(mCurrentLayoutManagerType);

        mAdapter = new viewCandPosAdapter(context,name2,location2,rating,"offerExtended");

        mRecyclerView.setAdapter(mAdapter);

        setRecyclerViewLayoutManager(CompPosViewPopup.LayoutManagerType.LINEAR_LAYOUT_MANAGER);

        mRecyclerView = (RecyclerView) findViewById(R.id.recyclerView10);

        mLayoutManager = new LinearLayoutManager(this.context);

        mCurrentLayoutManagerType = CompPosViewPopup.LayoutManagerType.LINEAR_LAYOUT_MANAGER;

        if (savedInstanceStates != null) {

            mCurrentLayoutManagerType = (CompPosViewPopup.LayoutManagerType) savedInstanceStates
                    .getSerializable(KEY_LAYOUT_MANAGER);
        }
        setRecyclerViewLayoutManager(mCurrentLayoutManagerType);

        mAdapter = new viewCandPosAdapter(context,name2,location2,rating,"hired");

        mRecyclerView.setAdapter(mAdapter);

        setRecyclerViewLayoutManager(CompPosViewPopup.LayoutManagerType.LINEAR_LAYOUT_MANAGER);











        btnFinishPosSee.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {

                finish();
            }

        });
    }


















    public static void setRecyclerViewLayoutManager(CompPosViewPopup.LayoutManagerType layoutManagerType) {
        int scrollPosition = 0;

        if (mRecyclerView.getLayoutManager() != null) {
            scrollPosition = ((LinearLayoutManager) mRecyclerView.getLayoutManager())
                    .findFirstCompletelyVisibleItemPosition();
        }

        switch (layoutManagerType) {
            case GRID_LAYOUT_MANAGER:
                mLayoutManager = new GridLayoutManager(context, SPAN_COUNT);
                mCurrentLayoutManagerType = CompPosViewPopup.LayoutManagerType.GRID_LAYOUT_MANAGER;
                break;
            case LINEAR_LAYOUT_MANAGER:
                mLayoutManager = new LinearLayoutManager(context);
                mCurrentLayoutManagerType = CompPosViewPopup.LayoutManagerType.LINEAR_LAYOUT_MANAGER;
                break;
            default:
                mLayoutManager = new LinearLayoutManager(context);
                mCurrentLayoutManagerType = CompPosViewPopup.LayoutManagerType.LINEAR_LAYOUT_MANAGER;
        }

        mRecyclerView.setLayoutManager(mLayoutManager);
        mRecyclerView.scrollToPosition(scrollPosition);
    }

    private void initDataset() {
        rating = new String[20];
        raiting2 = new ArrayList<>();
        Resources res = getResources();
        rating = res.getStringArray(R.array.rating_array);
    }



















}
