package com.dev.industry14.company.logic;


import android.graphics.Color;
import android.os.Bundle;
import android.support.design.widget.Snackbar;
import android.support.v4.app.Fragment;
import android.support.v4.content.ContextCompat;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import com.dev.industry14.R;

import java.text.DateFormat;
import java.util.Calendar;
import java.util.Date;

import devs.mulham.horizontalcalendar.HorizontalCalendar;
import devs.mulham.horizontalcalendar.HorizontalCalendarListener;


/**
 * A simple {@link Fragment} subclass.
 */
public class DashboardFragment extends Fragment{

    private View myView;

    public DashboardFragment() {
        // Required empty public constructor
    }

    private Calendar endDate,startDate;
    private HorizontalCalendar horizontalCalendar;
    private View bgheadr,lst1,lst2,lst3,lst4;
    @Override
    public void onCreate(Bundle savedInstanceState) {
        endDate = Calendar.getInstance();
        endDate.add(Calendar.MONTH, 1);
        startDate = Calendar.getInstance();
        startDate.add(Calendar.MONTH, -1);
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View v=inflater.inflate(R.layout.fragment_dashboard, container, false);

        bgheadr=v.findViewById(R.id.fragmentdashboardImageView1);
        lst1=v.findViewById(R.id.fragmentdashboardLinearLayout1);
        lst2=v.findViewById(R.id.fragmentdashboardLinearLayout2);
        lst3=v.findViewById(R.id.fragmentdashboardLinearLayout3);
        lst4=v.findViewById(R.id.fragmentdashboardLinearLayout4);

        bgheadr.animate().setStartDelay(0).scaleX(2).scaleY(2).setDuration(0).start();
        horizontalCalendar = new HorizontalCalendar.Builder(v, R.id.calendarView)
                .startDate(startDate.getTime())
                .endDate(endDate.getTime())
                .datesNumberOnScreen(5)
                .dayNameFormat("EEE")
                .dayNumberFormat("dd")
                .monthFormat("MMM")
                .selectorColor(ContextCompat.getColor(getActivity(), R.color.Black))
                .textSize(13f, 23f, 13f)
                .showDayName(true)
                .showMonthName(true)
                .textColor(Color.LTGRAY, Color.WHITE)
                .selectedDateBackground(Color.TRANSPARENT)
                .build();

        return v;
    }

    @Override
    public void onViewCreated(View view, Bundle savedInstanceState) {

        myView = view;

        resetanim(lst1);
        resetanim(lst2);
        resetanim(lst3);
        resetanim(lst4);

        lst1.animate().setStartDelay(0).setDuration(1000).translationY(0).alpha(1).scaleX(1).scaleY(1).start();
        lst2.animate().setStartDelay(200).setDuration(1000).translationY(0).alpha(1).scaleX(1).scaleY(1).start();
        lst3.animate().setStartDelay(400).setDuration(1000).translationY(0).alpha(1).scaleX(1).scaleY(1).start();
        lst4.animate().setStartDelay(600).setDuration(1000).translationY(0).alpha(1).scaleX(1).scaleY(1).start();
        bgheadr.animate().setStartDelay(200).setDuration(1500).scaleX(1).scaleY(1).start();

        horizontalCalendar.setCalendarListener(new HorizontalCalendarListener() {
            @Override
            public void onDateSelected(Date date, int position) {
               // Toast.makeText(getContext(), DateFormat.getDateInstance().format(date) + " is selected!", Toast.LENGTH_SHORT).show();


                	//Snackbar.make(myView, DateFormat.getDateInstance().format(date) + " is selected!", Snackbar.LENGTH_SHORT).show();
                	 }

        });
    }
    private void resetanim(View v){
        v.animate().setStartDelay(0).setDuration(0).translationY(-200).scaleX(1).scaleY(1).start();
    }
}