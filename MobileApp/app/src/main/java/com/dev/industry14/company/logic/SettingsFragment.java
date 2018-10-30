package com.dev.industry14.company.logic;


import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
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
import static com.dev.industry14.LoginActivity.positions;
import static com.dev.industry14.candidate.CandidateHome.cc;
import static com.dev.industry14.company.CompanyHome.c;


/**
 * A simple {@link Fragment} subclass.
 */
public class SettingsFragment extends Fragment {

    private TextView countryA, nameA, add1A, addr2A, cityA, provinceA, zipA, webA, numA, descA;


    public SettingsFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment

        View v =  inflater.inflate(R.layout.fragment_settings,container, false);





        return v;
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {

        countryA = (TextView) view.findViewById(R.id.txtCountryS);
        nameA = (TextView) view.findViewById(R.id.txtBussName);
        add1A = (TextView) view.findViewById(R.id.txtAdd1);
        addr2A = (TextView) view.findViewById(R.id.txtAdd2);
        cityA = (TextView) view.findViewById(R.id.txtCityS);
        provinceA = (TextView) view.findViewById(R.id.txtProvinceS);
        zipA = (TextView) view.findViewById(R.id.txtZipS);
        webA = (TextView) view.findViewById(R.id.txtWebsite);
        numA = (TextView) view.findViewById(R.id.txtNumber);
        descA = (TextView) view.findViewById(R.id.txtDescS);

        Button btnReset = (Button) view.findViewById(R.id.btnUpdateS);

        btnReset.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {
                c.setCountry(countryA.getText().toString());
                c.setAddressLine1(add1A.getText().toString());
                c.setAddressLine2(addr2A.getText().toString());
                c.setAccountName(nameA.getText().toString());
                c.setCity(cityA.getText().toString());
                c.setZip(zipA.getText().toString());
                c.setBusinessURL(webA.getText().toString());
                c.setBusinessNumber(numA.getText().toString());
                c.setProvence(provinceA.getText().toString());
                c.setBusinessDescription(descA.getText().toString());

                AboutFragment.refresh();

                countryA.setText(c.getCountry());
                nameA.setText(c.getAccountName());
                add1A.setText(c.getAddressLine1());
                addr2A.setText(c.getAddressLine2());
                cityA.setText(c.getCity());
                provinceA.setText(c.getProvence());
                zipA.setText(c.getZip());
                webA.setText(c.getBusinessURL());
                numA.setText(c.getBusinessNumber());
                descA.setText(c.getBusinessDescription());

                final FirebaseFirestore db = FirebaseFirestore.getInstance();

                DocumentReference docRef = db.collection("users").document(currentUser.getUid());
                docRef.set(c);

                Toast.makeText(getActivity(), "Updated",
                        Toast.LENGTH_SHORT).show();
            }

        });

        countryA.setText(c.getCountry());
        nameA.setText(c.getAccountName());
        add1A.setText(c.getAddressLine1());
        addr2A.setText(c.getAddressLine2());
        cityA.setText(c.getCity());
        provinceA.setText(c.getProvence());
        zipA.setText(c.getZip());
        webA.setText(c.getBusinessURL());
        numA.setText(c.getBusinessNumber());
        descA.setText(c.getBusinessDescription());


    }




}
