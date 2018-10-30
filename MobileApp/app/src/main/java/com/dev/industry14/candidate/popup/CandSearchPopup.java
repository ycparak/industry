package com.dev.industry14.candidate.popup;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.Spinner;

import com.dev.industry14.R;

public class CandSearchPopup extends AppCompatActivity  implements AdapterView.OnItemSelectedListener{

    private Button btnDone;
    private Spinner location, job;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.fragment_popup);

        btnDone = (Button) findViewById(R.id.btnSearch);

        location = (Spinner) findViewById(R.id.location_spinner);
        job = (Spinner) findViewById(R.id.job_spinner);

        ArrayAdapter<CharSequence> adapterL = ArrayAdapter.createFromResource(this,
                R.array.location_array, android.R.layout.simple_spinner_item);
        ArrayAdapter<CharSequence> adapterJ = ArrayAdapter.createFromResource(this,
                R.array.jobs_array, android.R.layout.simple_spinner_item);

        adapterL.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        adapterJ.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);

        location.setAdapter(adapterL);
        location.setOnItemSelectedListener(this);
        job.setAdapter(adapterJ);
        job.setOnItemSelectedListener(this);

        DisplayMetrics dm = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(dm);

        int width = dm.widthPixels;
        int height = dm.heightPixels;

        getWindow().setLayout(((int) (width * 0.8)), (int) (height* 0.37));

        btnDone.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {
                Intent intent = new Intent();
                intent.putExtra("message", "999");
                setResult(RESULT_OK,intent);
                finish();
            }

        });

    }


    public void onItemSelected(AdapterView<?> parent, View view,
                               int pos, long id) {
        // An item was selected. You can retrieve the selected item using

        Spinner jobs = (Spinner) parent;
        Spinner location = (Spinner) parent;
        if(jobs.getId() == R.id.job_spinner)
        {
            Log.e("TEST", parent.getItemAtPosition(pos).toString() );
        }
        if(location.getId() == R.id.location_spinner)
        {
            Log.e("TEST", parent.getItemAtPosition(pos).toString() );
        }

    }

    public void onNothingSelected(AdapterView<?> parent) {
        // Another interface callback
    }
}
