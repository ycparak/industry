

package com.dev.industry14.candidate.logic;


import android.content.Intent;
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

import static com.dev.industry14.candidate.CandidateHome.cc;


/**
 * A simple {@link Fragment} subclass.
 */
public class AboutCFragment extends Fragment {

    private static TextView nameC, uniC, de, expC, roleC, salaryC, linkedinC, gitC, locationC, descA;


    public AboutCFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment

        View v =  inflater.inflate(R.layout.fragment_about_c,container, false);




        return v;
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {


        nameC = (TextView) view.findViewById(R.id.nameSe);
        uniC = (TextView) view.findViewById(R.id.txtUniC);
        de = (TextView) view.findViewById(R.id.txtDegreeC);
        expC = (TextView) view.findViewById(R.id.txtExpC);
        roleC = (TextView) view.findViewById(R.id.txtRoleC);
        salaryC = (TextView) view.findViewById(R.id.txtSalaryC);
        linkedinC = (TextView) view.findViewById(R.id.txtLinkedC);
        gitC = (TextView) view.findViewById(R.id.txtGitC);
        locationC = (TextView) view.findViewById(R.id.txtLocatioC);

        nameC.setText(cc.getName());
        uniC.setText(cc.getAlmaMater());
        de.setText(cc.getEducationLevel());
        expC.setText(cc.getExperience());
        roleC.setText(cc.getRole());
        salaryC.setText(cc.getMinSalary());
        linkedinC.setText(cc.getLinkedIn());
        gitC.setText(cc.getGithubURL());
        locationC.setText(cc.getCity());


    }

    public static void  refresh(){

        Log.e("TEST2", "TEST" + cc.getName()  );
        nameC.setText(cc.getName());
        uniC.setText(cc.getAlmaMater());
        de.setText(cc.getEducationLevel());
        expC.setText(cc.getExperience());
        roleC.setText(cc.getRole());
        salaryC.setText(cc.getMinSalary());
        linkedinC.setText(cc.getLinkedIn());
        gitC.setText(cc.getGithubURL());
        locationC.setText(cc.getCity());

    }

}
