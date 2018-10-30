package com.dev.industry14.candidate.popup;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.DisplayMetrics;
import android.util.Log;
import android.widget.ImageView;
import android.widget.TextView;

import com.dev.industry14.R;
import com.dev.industry14.utils.AddCandAdapter;
import com.dev.industry14.utils.CustomAdapter;
import com.dev.industry14.utils.ImageHelper;
import com.dev.industry14.utils.viewCandPosAdapter;

import static com.dev.industry14.LoginActivity.candidates;

public class PosCandInfoPopup extends AppCompatActivity {

    private TextView name,location,rating,exp,degree,alma,salary;
    private ImageView img;
    //private String[] experiance,deg,uni,sal;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.fragment_candidate_info_1);

        name = (TextView) findViewById(R.id.txtName);
        location = (TextView) findViewById(R.id.txtLocation);
        rating = (TextView) findViewById(R.id.txtRat1);
        exp = (TextView) findViewById(R.id.txtExp);
        degree = (TextView) findViewById(R.id.txtDegree);
        alma = (TextView) findViewById(R.id.txtAlma);
        salary = (TextView) findViewById(R.id.txtSalary);
        img = (ImageView) findViewById(R.id.imgSearch);

        int candPos = 0;

        for(int k = 0; k < candidates.size(); k++)
        {

            Log.e("TEST2", candidates.get(k).getName() + "==" +  viewCandPosAdapter.nameOfCand);
            if(candidates.get(k).getName().equals(viewCandPosAdapter.nameOfCand))
            {
                //Log.e("TEST2", viewCandPosAdapter.nameOfCand);
                candPos = k;
            }

        }


            name.setText(candidates.get(candPos).getName());//CustomAdapter.user.getName());
            location.setText(candidates.get(candPos).getCity());//CustomAdapter.user.getLocation());
            //rating.setText(CustomAdapter.user.getRating());

            exp.setText(candidates.get(candPos).getExperience());//experiance[CustomAdapter.user.getPosition()]);
            degree.setText(candidates.get(candPos).getEducationLevel());//deg[CustomAdapter.user.getPosition()]);
            alma.setText(candidates.get(candPos).getAlmaMater());//uni[CustomAdapter.user.getPosition()]);
            salary.setText(candidates.get(candPos).getMinSalary());//"R"+sal[CustomAdapter.user.getPosition()]);


            ImageHelper.getImage(candPos, img);

        DisplayMetrics dm = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(dm);

        int width = dm.widthPixels;
        int height = dm.heightPixels;

        getWindow().setLayout(((int) (width * 0.9)), (int) (height *0.9));


    }

    /*@Override
    public void onBackPressed() {

    }*/
}
