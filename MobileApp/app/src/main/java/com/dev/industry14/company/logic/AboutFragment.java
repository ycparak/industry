package com.dev.industry14.company.logic;


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

import com.dev.industry14.company.CompanyHome;
import com.dev.industry14.R;

import static com.dev.industry14.company.CompanyHome.c;


/**
 * A simple {@link Fragment} subclass.
 */
public class AboutFragment extends Fragment {

    private static TextView countryA, nameA, add1A, addr2A, cityA, provinceA, zipA, webA, numA, descA;

    public AboutFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment

        View v =  inflater.inflate(R.layout.fragment_about,container, false);




        return v;
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {

        countryA = (TextView) view.findViewById(R.id.txtCountryA);
        nameA = (TextView) view.findViewById(R.id.txtBussNameA);
        add1A = (TextView) view.findViewById(R.id.txtAddr1A);
        addr2A = (TextView) view.findViewById(R.id.txtAddr2A);
        cityA = (TextView) view.findViewById(R.id.txtCityA);
        provinceA = (TextView) view.findViewById(R.id.txtProvinceA);
        zipA = (TextView) view.findViewById(R.id.txtZipA);
        webA = (TextView) view.findViewById(R.id.txtWebsiteA);
        numA = (TextView) view.findViewById(R.id.txtNumberA);
        descA = (TextView) view.findViewById(R.id.txtDescA);

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

    public static void  refresh(){

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
