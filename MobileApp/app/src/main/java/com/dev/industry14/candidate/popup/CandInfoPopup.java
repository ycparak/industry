package com.dev.industry14.candidate.popup;

import android.content.res.Resources;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.DisplayMetrics;
import android.widget.ImageView;
import android.widget.TextView;

import com.dev.industry14.R;
import com.dev.industry14.utils.AddCandAdapter;
import com.dev.industry14.utils.CustomAdapter;
import com.dev.industry14.utils.ImageHelper;
import static com.dev.industry14.LoginActivity.candidates;

public class CandInfoPopup extends AppCompatActivity {

     private TextView name,location,rating,exp,degree,alma,salary;
     private ImageView img;
     //private String[] experiance,deg,uni,sal;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.fragment_candidate_info_1);

       // experiance = new String[10];
        ///deg = new String[10];
        //uni = new String[10];
        //sal = new String[10];

       // Resources res = getResources();
       // experiance = res.getStringArray(R.array.exp_array);
        ///deg = res.getStringArray(R.array.degree_array);
        ///sal = res.getStringArray(R.array.salary_array);
        //uni = res.getStringArray(R.array.uni_array);

        name = (TextView) findViewById(R.id.txtName);
        location = (TextView) findViewById(R.id.txtLocation);
        rating = (TextView) findViewById(R.id.txtRat1);
        exp = (TextView) findViewById(R.id.txtExp);
        degree = (TextView) findViewById(R.id.txtDegree);
        alma = (TextView) findViewById(R.id.txtAlma);
        salary = (TextView) findViewById(R.id.txtSalary);
        img = (ImageView) findViewById(R.id.imgSearch);

        try {
            name.setText(candidates.get(CustomAdapter.currentPosCust).getName());//CustomAdapter.user.getName());
            location.setText(candidates.get(CustomAdapter.currentPosCust).getCity());//CustomAdapter.user.getLocation());
            rating.setText(CustomAdapter.user.getRating());

            exp.setText(candidates.get(CustomAdapter.currentPosCust).getExperience());//experiance[CustomAdapter.user.getPosition()]);
            degree.setText(candidates.get(CustomAdapter.currentPosCust).getEducationLevel());//deg[CustomAdapter.user.getPosition()]);
            alma.setText(candidates.get(CustomAdapter.currentPosCust).getAlmaMater());//uni[CustomAdapter.user.getPosition()]);
            salary.setText(candidates.get(CustomAdapter.currentPosCust).getMinSalary());//"R"+sal[CustomAdapter.user.getPosition()]);


            ImageHelper.getImage(CustomAdapter.currentPosCust, img);
        }catch(NullPointerException e)
        {
            name.setText(candidates.get(AddCandAdapter.currentPosition).getName());//AddCandAdapter.user.getPosition()).getName());//CustomAdapter.user.getName());
            location.setText(candidates.get(AddCandAdapter.currentPosition).getCity());//CustomAdapter.user.getLocation());

            rating.setText(candidates.get(AddCandAdapter.currentPosition).getRaiting());

            exp.setText(candidates.get(AddCandAdapter.currentPosition).getExperience());//experiance[CustomAdapter.user.getPosition()]);
            degree.setText(candidates.get(AddCandAdapter.currentPosition).getEducationLevel());//deg[CustomAdapter.user.getPosition()]);
            alma.setText(candidates.get(AddCandAdapter.currentPosition).getAlmaMater());//uni[CustomAdapter.user.getPosition()]);
            salary.setText(candidates.get(AddCandAdapter.currentPosition).getMinSalary());//"R"+sal[CustomAdapter.user.getPosition()]);


            ImageHelper.getImage(AddCandAdapter.currentPosition, img);
        }


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
