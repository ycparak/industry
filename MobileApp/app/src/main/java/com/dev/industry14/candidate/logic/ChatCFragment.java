package com.dev.industry14.candidate.logic;


import android.app.ProgressDialog;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.Toast;

import com.dev.industry14.LoginActivity;
import com.dev.industry14.R;
import com.dev.industry14.candidate.model.candInterViewRequest;
import com.dev.industry14.candidate.popup.CandSearchPopup;

import com.dev.industry14.utils.ChatAdapter;
import com.dev.industry14.utils.CustomAdapter;
import com.dev.industry14.utils.PositionAdapter;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;

import static com.dev.industry14.LoginActivity.candidatesId;
import static com.dev.industry14.LoginActivity.positions;


/**
 * A simple {@link Fragment} subclass.
 */
public class ChatCFragment extends Fragment {




    private static final String TAG = "RecyclerViewFragment";
    private static final String KEY_LAYOUT_MANAGER = "layoutManager";
    private static final int SPAN_COUNT = 2;
    private static final int DATASET_COUNT = 10;
  

    private enum LayoutManagerType {
        GRID_LAYOUT_MANAGER,
        LINEAR_LAYOUT_MANAGER
    }

    protected ChatCFragment.LayoutManagerType mCurrentLayoutManagerType;

    protected RecyclerView mRecyclerView;
    protected ChatAdapter mAdapter;
    protected RecyclerView.LayoutManager mLayoutManager;
    private ProgressDialog dialog;


    public ChatCFragment() {
        // Required empty public constructor
    }


    @Override
    public void onCreate(Bundle savedInstanceState) {
       // init();
        super.onCreate(savedInstanceState);


    }



    private void init() {




    }

    @Override
    public View onCreateView(final LayoutInflater inflater, final ViewGroup container,
                             final Bundle savedInstanceState) {


        Log.e("TEST9", "MOVE on " );
                            View rootView = inflater.inflate(R.layout.fragment_chat_c , container, false);
                            rootView.setTag(TAG);

                            mRecyclerView = (RecyclerView) rootView.findViewById(R.id.recInterview);

                            mLayoutManager = new LinearLayoutManager(getActivity());

                            mCurrentLayoutManagerType = LayoutManagerType.LINEAR_LAYOUT_MANAGER;

                            if (savedInstanceState != null) {

                                mCurrentLayoutManagerType = (LayoutManagerType) savedInstanceState
                                        .getSerializable(KEY_LAYOUT_MANAGER);
                            }
                            setRecyclerViewLayoutManager(mCurrentLayoutManagerType);

                            mAdapter = new ChatAdapter(getContext(),LoginActivity.cIntReq, LoginActivity.positionIDS);

                            mRecyclerView.setAdapter(mAdapter);

                            setRecyclerViewLayoutManager(LayoutManagerType.LINEAR_LAYOUT_MANAGER);


        return rootView;

    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {



    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);



    }

    public void setRecyclerViewLayoutManager(LayoutManagerType layoutManagerType) {
        int scrollPosition = 0;

        if (mRecyclerView.getLayoutManager() != null) {
            scrollPosition = ((LinearLayoutManager) mRecyclerView.getLayoutManager())
                    .findFirstCompletelyVisibleItemPosition();
        }

        switch (layoutManagerType) {
            case GRID_LAYOUT_MANAGER:
                mLayoutManager = new GridLayoutManager(getActivity(), SPAN_COUNT);
                mCurrentLayoutManagerType = LayoutManagerType.GRID_LAYOUT_MANAGER;
                break;
            case LINEAR_LAYOUT_MANAGER:
                mLayoutManager = new LinearLayoutManager(getActivity());
                mCurrentLayoutManagerType = LayoutManagerType.LINEAR_LAYOUT_MANAGER;
                break;
            default:
                mLayoutManager = new LinearLayoutManager(getActivity());
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



}



















































