package com.dev.industry14.company.popup;

import android.os.Bundle;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ImageButton;
import android.widget.Spinner;
import android.widget.TextView;

import com.dev.industry14.R;
import com.dev.industry14.company.model.positionComp;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.FirebaseFirestore;

import static com.dev.industry14.LoginActivity.posCandHash;
import static com.dev.industry14.LoginActivity.positions;

import static com.dev.industry14.utils.PositionAdapter.currentPosition;

public class CompPosEditPopup extends AppCompatActivity implements AdapterView.OnItemSelectedListener{

    private static TextView pname, pteam, pexp, psalary, oldName;
    private static ImageButton btnEditPos;
    private static Spinner posSenior, posRole;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.fragment_pos_edit);

        pname = (TextView) findViewById(R.id.posEditName);
        //oldName = (TextView) findViewById(R.id.txtPosNameSee);
        pteam = (TextView) findViewById(R.id.posEditTeam);
        pexp = (TextView) findViewById(R.id.posEditExperience);
        psalary = (TextView) findViewById(R.id.posEditSalary);
        btnEditPos = (ImageButton) findViewById(R.id.btnEditAddPos);

        pname.setText(positions.get(currentPosition).getTitle());
        pteam.setText(positions.get(currentPosition).getTeam());
        pexp.setText(positions.get(currentPosition).getMinExperience());
        psalary.setText(positions.get(currentPosition).getMaxSalary());

        posSenior = (Spinner) findViewById(R.id.posSeniorE);
        posRole = (Spinner) findViewById(R.id.posRoleE);



        ArrayAdapter<CharSequence> adapterL = ArrayAdapter.createFromResource(this,
                R.array.senior_array, android.R.layout.simple_spinner_item);
        ArrayAdapter<CharSequence> adapterJ = ArrayAdapter.createFromResource(this,
                R.array.jobs_array, android.R.layout.simple_spinner_item);

        adapterL.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        adapterJ.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);

        posSenior.setAdapter(adapterL);
        posSenior.setOnItemSelectedListener(this);
        posRole.setAdapter(adapterJ);
        posRole.setOnItemSelectedListener(this);


        DisplayMetrics dm = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(dm);

        int width = dm.widthPixels;
        int height = dm.heightPixels;

        getWindow().setLayout(((int) (width * 0.85)), (int) (height * 0.85));


        btnEditPos.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {
                positions.get(currentPosition).setTitle(pname.getText().toString());
                positions.get(currentPosition).setMinExperience(pexp.getText().toString());
                positions.get(currentPosition).setTeam(pteam.getText().toString());
                positions.get(currentPosition).setMaxSalary(psalary.getText().toString());

                Log.e("TEST7","POSITION ARRAY = "+positions.size() );
                Log.e("TEST7","Current pos == "+currentPosition );

                //txtPosNameShow.setText(positions.get(currentPosition).getTitle());
                //PositionAdapter.getText().setText(positions.get(currentPosition).getTitle());

                Log.e("TEST7","HASH = = "+posCandHash.size() );
                positionComp minus = new positionComp(positions.get(currentPosition).getAddress1(),positions.get(currentPosition).getAddress2(),positions.get(currentPosition).getMaxExperiance(),positions.get(currentPosition).getMinSalary(),positions.get(currentPosition).getProvence(),positions.get(currentPosition).getSpec(),positions.get(currentPosition).getZip(),posCandHash.get(currentPosition)/*positions.get(currentPosition).getCandidates()*/,positions.get(currentPosition).getSkills(),positions.get(currentPosition).getTitle(),positions.get(currentPosition).getTeam(),positions.get(currentPosition).getSeniority(),positions.get(currentPosition).getRole(),positions.get(currentPosition).getMinExperience(),positions.get(currentPosition).getMaxSalary(),positions.get(currentPosition).getUserId(), positions.get(currentPosition).getiD());

                FirebaseFirestore db = FirebaseFirestore.getInstance();

                DocumentReference docRef = db.collection("positions").document(positions.get(currentPosition).getiD());
                docRef.set(minus);

                Snackbar.make(view, "Position: "+pname.getText()+ " edited", Snackbar.LENGTH_SHORT).show();
                finish();
            }

        });
    }

    public void onItemSelected(AdapterView<?> parent, View view,
                               int pos, long id) {
        // An item was selected. You can retrieve the selected item using

        Spinner posSenior = (Spinner) parent;
        Spinner posRole = (Spinner) parent;
        if(posSenior.getId() == R.id.posSeniorE)
        {
            positions.get(currentPosition).setSeniority(parent.getItemAtPosition(pos).toString());
        }
        if(posRole.getId() == R.id.posRoleE)
        {
            positions.get(currentPosition).setRole(parent.getItemAtPosition(pos).toString());
        }

    }

    public void onNothingSelected(AdapterView<?> parent) {
        // Another interface callback
    }
}