package com.dev.industry14.company.logic;


import android.content.Context;
import android.content.Intent;
import android.content.res.Resources;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.design.widget.FloatingActionButton;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentActivity;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import com.dev.industry14.LoginActivity;
import com.dev.industry14.UserLogin;
import com.dev.industry14.candidate.model.candUser;
import com.dev.industry14.candidate.popup.CandSearchPopup;
import com.dev.industry14.company.model.posCandidates;
import com.dev.industry14.company.popup.CompPosPopup;
import com.dev.industry14.R;
import com.dev.industry14.company.model.positionComp;;
import com.dev.industry14.utils.PositionAdapter;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import static com.dev.industry14.LoginActivity.currentUser;
import static com.dev.industry14.LoginActivity.positions;


/**
 * A simple {@link Fragment} subclass.
 */
public class PositionFragment extends Fragment {


    public PositionFragment() {
        // Required empty public constructor
    }

    private static final String TAG = "RecyclerViewFragment";
    private static final String KEY_LAYOUT_MANAGER = "layoutManager";
    private static final int SPAN_COUNT = 2;
    private static final int DATASET_COUNT = 10;

   // public static ArrayList<positionComp> positions;
    private static Context context = null;
    private static FragmentActivity activity = null;
    private static View root = null;



    private ArrayList<String> name;





    private enum LayoutManagerType {
        GRID_LAYOUT_MANAGER,
        LINEAR_LAYOUT_MANAGER
    }

    protected static PositionFragment.LayoutManagerType mCurrentLayoutManagerType;

    protected static RecyclerView mRecyclerView;
    protected static PositionAdapter mAdapter;
    protected static RecyclerView.LayoutManager mLayoutManager;
    private static Bundle savedInstanceStates;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getData();
        activity = getActivity();
        context = getContext();
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.fragment_position, container, false);
        root = rootView;
        rootView.setTag(TAG);


       // run();

        savedInstanceStates = savedInstanceState;

        mRecyclerView = (RecyclerView) rootView.findViewById(R.id.recyclerViewPos);

        mLayoutManager = new LinearLayoutManager(getActivity());

        mCurrentLayoutManagerType = LayoutManagerType.LINEAR_LAYOUT_MANAGER;

        if (savedInstanceStates != null) {

            mCurrentLayoutManagerType = (LayoutManagerType) savedInstanceStates
                    .getSerializable(KEY_LAYOUT_MANAGER);
        }
        setRecyclerViewLayoutManager(mCurrentLayoutManagerType);

        mAdapter = new PositionAdapter(getContext(),positions);

        mRecyclerView.setAdapter(mAdapter);

        setRecyclerViewLayoutManager(LayoutManagerType.LINEAR_LAYOUT_MANAGER);

        return rootView;
    }


    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {

        FloatingActionButton next = view.findViewById(R.id.fabPos);
        next.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getActivity(), CompPosPopup.class));
            }
        });

    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        
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

    @Override
    public void onSaveInstanceState(Bundle savedInstanceState) {

        savedInstanceState.putSerializable(KEY_LAYOUT_MANAGER, mCurrentLayoutManagerType);
        super.onSaveInstanceState(savedInstanceState);
    }

   /* private void initDataset() {

        name = new ArrayList<>();
        name.add("Firebase");
        name.add("Dev");
        name.add("BackEnd");
        name.add("Full Stack");
        name.add("Android Dev");



    }*/

    public static void getData()
    {
        /*final FirebaseFirestore db = FirebaseFirestore.getInstance();

        //positions = new ArrayList<positionComp>();
        int k = 0;

        db.collection("positions")                      //field in an user doc
                .whereEqualTo("userId", currentUser.getUid())
                .get()
                .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                    @Override
                    public void onComplete(@NonNull Task<QuerySnapshot> task) {
                        if (task.isSuccessful()) {
                            int k = 0;
                            for (QueryDocumentSnapshot document : task.getResult()) {
                                positionComp temp = document.toObject(positionComp.class);
                                positions.add(new positionComp(temp.getTitle(), temp.getTeam(), temp.getSeniority(), temp.getRole(), temp.getMinExperience(), temp.getMaxSalary(), currentUser.getUid()));
                                Log.e("TEST", positions.get(k).getRole());
                                k++;
                            }
                        } else {
                            Log.e("TEST", "Error getting documents: ", task.getException());
                        }
                    }
                });


        Log.e("TEST", "DONE" );*/



    }




    public static void refresh() {

        mRecyclerView = (RecyclerView) root.findViewById(R.id.recyclerViewPos);

        mLayoutManager = new LinearLayoutManager(context);

        mCurrentLayoutManagerType = LayoutManagerType.LINEAR_LAYOUT_MANAGER;

        if (savedInstanceStates != null) {

            mCurrentLayoutManagerType = (LayoutManagerType) savedInstanceStates
                    .getSerializable(KEY_LAYOUT_MANAGER);
        }
        setRecyclerViewLayoutManager(mCurrentLayoutManagerType);

        mAdapter = new PositionAdapter(context,positions);

        mRecyclerView.setAdapter(mAdapter);

        setRecyclerViewLayoutManager(LayoutManagerType.LINEAR_LAYOUT_MANAGER);


    }



}

/*

   // private Button btnPos;
   // private static TextView pname,pteam,psenor,prole,pexp,psalary;
   // public static positionComp q;


    public PositionFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment

        View v =  inflater.inflate(R.layout.fragment_position,container, false);


        ///q = new positionComp("Firestore test position", "Firenative Team", "Mid-Level", "Full Stack", "5-15 Years", "R55000");

        return v;
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {

        FloatingActionButton next = view.findViewById(R.id.fabPos);
        next.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getActivity(), CompPosPopup.class));
            }
        });

       /* pname = (TextView) view.findViewById(R.id.txtPosNamee);
        pteam = (TextView) view.findViewById(R.id.txtTeamm);
        psenor = (TextView) view.findViewById(R.id.txtSenior);
        prole = (TextView) view.findViewById(R.id.txtRole);
        pexp = (TextView) view.findViewById(R.id.txtExpp);
        psalary = (TextView) view.findViewById(R.id.txtSalaryy);

        pname.setText(q.getPosName());
        pteam.setText(q.getTeam());
        psenor.setText(q.getSenior());
        prole.setText(q.getRole());
        pexp.setText(q.getExp());
        psalary.setText(q.getSal());



    }

    public static void  refresh(){

        pname.setText(q.getExp());
        pteam.setText(q.getTeam());
        psenor.setText(q.getSenior());
        prole.setText(q.getRole());
        pexp.setText(q.getExp());
        psalary.setText(q.getSal());*/

   // }

//}*/