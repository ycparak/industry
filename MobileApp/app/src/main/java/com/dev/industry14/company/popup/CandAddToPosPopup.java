package com.dev.industry14.company.popup;

import android.content.DialogInterface;
import android.content.res.Resources;
import android.os.Bundle;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.View;
import android.view.Window;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.dev.industry14.LoginActivity;
import com.dev.industry14.R;
import com.dev.industry14.company.model.candAddPos;
import com.dev.industry14.company.model.posCandidatesArray;
import com.dev.industry14.company.model.positionComp;
import com.dev.industry14.company.model.position_candidates;
import com.dev.industry14.utils.CustomAdapter;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.FirebaseFirestore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import static com.dev.industry14.LoginActivity.candidates;
import static com.dev.industry14.LoginActivity.candidatesId;
import static com.dev.industry14.LoginActivity.posCandHash;
import static com.dev.industry14.LoginActivity.positions;
import static com.dev.industry14.utils.PositionAdapter.currentPosition;
import static com.dev.industry14.LoginActivity.arrayPosCands;

public class CandAddToPosPopup extends AppCompatActivity implements AdapterView.OnItemSelectedListener{

    private static TextView pname, pteam, pexp, psalary, oldName;
    private static Button btnadd, btncancel;
    private static Spinner s, posRole;
    private static int posNumToAddTo;
    public static Map<String, Object> tempMapCommit2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);

        setContentView(R.layout.fragment_cand_add_to_pos);

        btnadd = (Button) findViewById(R.id.btnAddToPostion);
        btncancel = (Button) findViewById(R.id.btnAddToPositionCancel);

        s = (Spinner) findViewById(R.id.posSpinnerr);

        ArrayList<String> arr = new ArrayList<>();
        for(int k =0; k < positions.size(); k++)
        {
            arr.add(positions.get(k).getTitle());
        }

        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this,
                android.R.layout.simple_spinner_item, arr);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        s.setAdapter(adapter);
        s.setOnItemSelectedListener(this);


        DisplayMetrics dm = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(dm);

        int width = dm.widthPixels;
        int height = dm.heightPixels;

        getWindow().setLayout(((int) (width * 0.9)), (int) (height* 0.33));


        btnadd.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {

                /*new AlertDialog.Builder(getApplicationContext())
                        .setTitle("Nuke planet Jupiter?")
                        .setMessage("Note that nuking planet Jupiter will destroy everything in there.")
                        .setPositiveButton("Nuke", new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialog, int which) {
                                Log.d("MainActivity", "Sending atomic bombs to Jupiter");
                            }
                        })
                        .setNegativeButton("Abort", new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialog, int which) {
                                Log.d("MainActivity", "Aborting mission...");
                            }
                        })
                        .show();*/

                int candIndex = CustomAdapter.currentPosCandidate;
                int posIndex = posNumToAddTo;



                tempMapCommit2 = new HashMap<>();

                LoginActivity.arrayPosCands.add(new posCandidatesArray(candidates.get(candIndex).getName(),candidates.get(candIndex).getPhotoURL(),candidates.get(candIndex).getSurname(),"uncontacted", positions.get(posIndex).getiD(),candidatesId.get(candIndex),"pending","filler","filler","filler", "filler", "filler"));

                for (int z = 0; z < arrayPosCands.size(); z++)
                {
                    if(arrayPosCands.get(z).getPosNum() == positions.get(posIndex).getiD())
                    {
                        tempMapCommit2.put(arrayPosCands.get(z).getId(), new candAddPos(arrayPosCands.get(z).getName(),arrayPosCands.get(z).getSurname(),arrayPosCands.get(z).getPhotoURL(),arrayPosCands.get(z).getStage(),arrayPosCands.get(z).getStatus(),arrayPosCands.get(z).getInterviewDate(),arrayPosCands.get(z).getMessage(),arrayPosCands.get(z).getSalary(),arrayPosCands.get(z).getPerks(),arrayPosCands.get(z).getStartDate()));
                    }
                }
                tempMapCommit2.put(arrayPosCands.get(posIndex).getId(), new candAddPos(arrayPosCands.get(posIndex).getName(),arrayPosCands.get(posIndex).getSurname(),arrayPosCands.get(posIndex).getPhotoURL(),arrayPosCands.get(posIndex).getStage(),arrayPosCands.get(posIndex).getStatus(),arrayPosCands.get(posIndex).getInterviewDate(),arrayPosCands.get(posIndex).getMessage(),arrayPosCands.get(posIndex).getSalary(),arrayPosCands.get(posIndex).getPerks(),arrayPosCands.get(posIndex).getStartDate()));

                positionComp minus = new positionComp(positions.get(posIndex).getAddress1(),positions.get(posIndex).getAddress2(),positions.get(posIndex).getMaxExperiance(),positions.get(posIndex).getMinSalary(),positions.get(posIndex).getProvence(),positions.get(posIndex).getSpec(),positions.get(posIndex).getZip(),tempMapCommit2/*positions.get(currentPosition).getCandidates()*/,positions.get(posIndex).getSkills(),positions.get(posIndex).getTitle(),positions.get(posIndex).getTeam(),positions.get(posIndex).getSeniority(),positions.get(posIndex).getRole(),positions.get(posIndex).getMinExperience(),positions.get(posIndex).getMaxSalary(),positions.get(posIndex).getUserId(), positions.get(posIndex).getiD());

                final FirebaseFirestore db = FirebaseFirestore.getInstance();
                DocumentReference docRef = db.collection("positions").document(positions.get(posIndex).getiD());
                docRef.set(minus);

                position_candidates pc = new position_candidates(candidatesId.get(candIndex), LoginActivity.currentUser.getUid(), positions.get(posIndex).getiD(), "uncontacted");
                db.collection("positions_candidates").document(candidatesId.get(candIndex)+ "_" + positions.get(posIndex).getiD()).set(pc);

                Toast.makeText(getApplicationContext(), candidates.get(CustomAdapter.currentPosCandidate).getName() + " added!", Toast.LENGTH_SHORT).show();

                finish();
            }

        });

        btncancel.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {



                finish();
            }

        });
    }

    public void onItemSelected(AdapterView<?> parent, View view,
                               int pos, long id) {
        // An item was selected. You can retrieve the selected item using

        Spinner s = (Spinner) parent;

        if(s.getId() == R.id.posSpinnerr)
        {
            posNumToAddTo = s.getSelectedItemPosition();
        }

    }

    public void onNothingSelected(AdapterView<?> parent) {
        // Another interface callback
    }
}

