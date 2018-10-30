package com.dev.industry14.company;

import android.app.ProgressDialog;
import android.support.annotation.NonNull;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;

import com.dev.industry14.LoginActivity;
import com.dev.industry14.R;
import com.dev.industry14.candidate.model.candUser;
import com.dev.industry14.company.logic.AboutFragment;
import com.dev.industry14.company.logic.ChatFragment;
import com.dev.industry14.company.logic.DashboardFragment;
import com.dev.industry14.company.logic.PositionFragment;
import com.dev.industry14.company.logic.SearchFragment;
import com.dev.industry14.company.logic.SettingsFragment;
import com.dev.industry14.company.model.companyUser;
import com.dev.industry14.company.model.posCandidates;
import com.dev.industry14.company.model.positionComp;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;
import com.shrikanthravi.customnavigationdrawer2.data.MenuItem;
import com.shrikanthravi.customnavigationdrawer2.widget.SNavigationDrawer;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import static com.dev.industry14.LoginActivity.candidates;
import static com.dev.industry14.LoginActivity.currentUser;
import static com.dev.industry14.utils.PositionAdapter.positions;

public class CompanyHome extends AppCompatActivity {

    SNavigationDrawer sNavigationDrawer;
    int color1=0;
    Class fragmentClass;
    public static Fragment fragment;
    public static companyUser c;
   ;
    //

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
        menuItems.add(new MenuItem("Position",R.drawable.feed_bg));
        menuItems.add(new MenuItem("Search",R.drawable.message_bg));
        menuItems.add(new MenuItem("Chat",R.drawable.music_bg));
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
                        fragmentClass = DashboardFragment.class;
                        break;
                    }
                    case 1:{
                        fragmentClass = PositionFragment.class;
                        break;
                    }
                    case 2:{
                        fragmentClass = SearchFragment.class;
                        break;
                    }
                    case 3:{
                        fragmentClass = ChatFragment.class;
                        break;
                    }
                    case 4:{
                        fragmentClass = AboutFragment.class;
                        break;
                    }
                    case 5:{
                        fragmentClass = SettingsFragment.class;
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
                            c = document.toObject(companyUser.class);
                        } else {
                            Log.e("TEST2", "No such document");
                        }
                    } else {
                        Log.e("TEST2", "get failed with ", task.getException());
                    }
                }
            });




       /* final FirebaseFirestore db = FirebaseFirestore.getInstance();

        DocumentReference docRef = db.collection("users").document(currentUser.getUid());
        docRef.get().addOnCompleteListener(new OnCompleteListener<DocumentSnapshot>() {
            @Override
            public void onComplete(@NonNull Task<DocumentSnapshot> task) {
                if (task.isSuccessful()) {
                    DocumentSnapshot document = task.getResult();
                    if (document.exists()) {
                        c = document.toObject(companyUser.class);
                        Log.e("TEST", c.getAccountName() );
                        Log.e("TEST", c.getAboutUser() );
                        Log.e("TEST", c.getAddressLine2() );
                        Log.e("TEST", c.getCity() );
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

        db2.collection("positions")                      //field in an user doc
                .get()
                .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                    @Override
                    public void onComplete(@NonNull Task<QuerySnapshot> task) {
                        if (task.isSuccessful()) {
                            for (QueryDocumentSnapshot document : task.getResult()) {
                                positionComp temp = document.toObject(positionComp.class);
                                Log.e("TEST", temp.getTitle() );
                                Log.e("TEST", temp.getTeam() );
                                Log.e("TEST", temp.getSeniority() );
                                Log.e("TEST", temp.getRole() );
                                Log.e("TEST", temp.getMaxSalary() );
                                Log.e("TEST", temp.getMinExperience() );
                                Log.e("TEST", temp.getUserId() );

                                positions.add(new positionComp(temp.getTitle(), temp.getTeam(), temp.getSeniority(), temp.getRole(), temp.getMinExperience(), temp.getMaxSalary(), currentUser.getUid()));
                               // k++;
                            }
                            Log.e("TEST", "DONE" );

                        } else {
                            Log.e("TEST", "Error getting documents: ", task.getException());
                        }
                    }
                });




    */}
}
