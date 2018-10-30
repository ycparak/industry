package com.dev.industry14.candidate.logic;


import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.dev.industry14.LoginActivity;
import com.dev.industry14.R;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.FirebaseFirestore;

import static com.dev.industry14.LoginActivity.currentUser;
import static com.dev.industry14.candidate.CandidateHome.cc;


/**
 * A simple {@link Fragment} subclass.
 */
public class SettingsCFragment extends Fragment {

    
    private TextView nameC, uniC, de, expC, roleC, salaryC, linkedinC, gitC, locationC, descA;
    public SettingsCFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment

        View v =  inflater.inflate(R.layout.fragment_settings_c,container, false);




        return v;
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {

        nameC = (TextView) view.findViewById(R.id.NameS);
        uniC = (TextView) view.findViewById(R.id.uniS);
        de = (TextView) view.findViewById(R.id.degS);
        expC = (TextView) view.findViewById(R.id.expS);
        roleC = (TextView) view.findViewById(R.id.roleC);
        salaryC = (TextView) view.findViewById(R.id.salS);
        linkedinC = (TextView) view.findViewById(R.id.linkC);
        gitC = (TextView) view.findViewById(R.id.gitC);
        locationC = (TextView) view.findViewById(R.id.locS);

        Button btnReset = (Button) view.findViewById(R.id.updateS);

        btnReset.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {
                cc.setName(nameC.getText().toString());
                cc.setEducationLevel(de.getText().toString());
                cc.setExperience(expC.getText().toString());
                cc.setGithubURL(gitC.getText().toString());
                cc.setLinkedIn(linkedinC.getText().toString());
                cc.setCity(locationC.getText().toString());
                cc.setRole(roleC.getText().toString());
                cc.setMinSalary(salaryC.getText().toString());
                cc.setAlmaMater(uniC.getText().toString());

                AboutCFragment.refresh();

                nameC.setText(cc.getName());
                de.setText(cc.getEducationLevel());
                expC.setText(cc.getExperience());
                gitC.setText(cc.getGithubURL());
                linkedinC.setText(cc.getLinkedIn());
                locationC.setText(cc.getCity());
                roleC.setText(cc.getRole());
                salaryC.setText(cc.getMinSalary());
                uniC.setText(cc.getAlmaMater());
                cc.setContactNumber(cc.getContactNumber());

                final FirebaseFirestore db = FirebaseFirestore.getInstance();

                DocumentReference docRef = db.collection("users").document(currentUser.getUid());
                docRef.set(cc);

                Toast.makeText(getActivity(), "Updated",
                        Toast.LENGTH_SHORT).show();
            }

        });

        nameC.setText(cc.getName());
        de.setText(cc.getEducationLevel());
        expC.setText(cc.getExperience());
        gitC.setText(cc.getGithubURL());
        linkedinC.setText(cc.getLinkedIn());
        locationC.setText(cc.getCity());
        roleC.setText(cc.getRole());
        salaryC.setText(cc.getMinSalary());
        uniC.setText(cc.getAlmaMater());


    }




}
