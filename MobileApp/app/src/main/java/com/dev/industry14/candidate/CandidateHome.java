package com.dev.industry14.candidate;

import android.support.annotation.NonNull;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;

import com.dev.industry14.R;
import com.dev.industry14.candidate.logic.AboutCFragment;
import com.dev.industry14.candidate.logic.ChatCFragment;
import com.dev.industry14.candidate.logic.DashboardCFragment;
import com.dev.industry14.candidate.logic.OfferCFragment;
import com.dev.industry14.candidate.logic.SettingsCFragment;
import com.dev.industry14.candidate.model.candUser;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;
import com.shrikanthravi.customnavigationdrawer2.data.MenuItem;
import com.shrikanthravi.customnavigationdrawer2.widget.SNavigationDrawer;

import java.util.ArrayList;
import java.util.List;

import static com.dev.industry14.LoginActivity.currentUser;

public class CandidateHome extends AppCompatActivity {

    SNavigationDrawer sNavigationDrawer;
    int color1=0;
    Class fragmentClass;
    public static Fragment fragment;
    public static candUser cc;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        if(getSupportActionBar()!=null) {
            getSupportActionBar().hide();
        }

        fetchData();

        sNavigationDrawer = findViewById(R.id.navigationDrawer);
        List<MenuItem> menuItems = new ArrayList<>();
        menuItems.add(new MenuItem("Dash",R.drawable.news_bg));
        menuItems.add(new MenuItem("Interview's",R.drawable.music_bg));
        menuItems.add(new MenuItem("Offers's",R.drawable.music_bg));
        menuItems.add(new MenuItem("About",R.drawable.music_bg));
        menuItems.add(new MenuItem("Settings",R.drawable.news_bg));
        sNavigationDrawer.setMenuItemList(menuItems);

        try {
            fragment = (Fragment) fragmentClass.newInstance();
        } catch (Exception e) {
            e.printStackTrace();
        }
        if (fragment != null) {
            FragmentManager fragmentManager = getSupportFragmentManager();
            fragmentManager.beginTransaction().setCustomAnimations(android.R.animator.fade_in, android.R.animator.fade_out).replace(R.id.frameLayout, fragment).commit();
        }


        sNavigationDrawer.setOnMenuItemClickListener(new SNavigationDrawer.OnMenuItemClickListener() {
            @Override
            public void onMenuItemClicked(int position) {
                System.out.println("Position "+position);

                switch (position){
                    case 0: {
                        fragmentClass = DashboardCFragment.class;
                        break;
                    }
                    case 1:{
                        fragmentClass = ChatCFragment.class;
                        break;
                    }
                    case 2:{
                        fragmentClass = OfferCFragment.class;
                        break;
                    }
                    case 3:{
                        fragmentClass = AboutCFragment.class;
                        break;
                    }
                    case 4:{
                        fragmentClass = SettingsCFragment.class;
                        break;
                    }

                }
                sNavigationDrawer.setDrawerListener(new SNavigationDrawer.DrawerListener() {

                    @Override
                    public void onDrawerOpened() {

                    }

                    @Override
                    public void onDrawerOpening(){

                    }

                    @Override
                    public void onDrawerClosing(){
                        System.out.println("Drawer closed");

                        try {
                            fragment = (Fragment) fragmentClass.newInstance();
                        } catch (Exception e) {
                            e.printStackTrace();
                        }

                        if (fragment != null) {
                            FragmentManager fragmentManager = getSupportFragmentManager();
                            fragmentManager.beginTransaction().setCustomAnimations(android.R.animator.fade_in, android.R.animator.fade_out).replace(R.id.frameLayout, fragment).commit();

                        }
                    }

                    @Override
                    public void onDrawerClosed() {

                    }

                    @Override
                    public void onDrawerStateChanged(int newState) {
                        System.out.println("State "+newState);
                    }
                });
            }
        });

    }

    private void fetchData() {

        final FirebaseFirestore db = FirebaseFirestore.getInstance();

        DocumentReference docRef = db.collection("users").document(currentUser.getUid());
        docRef.get().addOnCompleteListener(new OnCompleteListener<DocumentSnapshot>() {
            @Override
            public void onComplete(@NonNull Task<DocumentSnapshot> task) {
                if (task.isSuccessful()) {
                    DocumentSnapshot document = task.getResult();
                    if (document.exists()) {
                        cc = document.toObject(candUser.class);
                    } else {
                        Log.e("TEST2", "No such document");
                    }
                } else {
                    Log.e("TEST2", "get failed with ", task.getException());
                }
            }
        });

    }
}
