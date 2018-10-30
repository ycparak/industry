package com.dev.industry14.utils;

import android.content.Context;
import android.content.Intent;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import com.dev.industry14.LoginActivity;
import com.dev.industry14.R;
import com.dev.industry14.candidate.model.candInterViewRequest;
import com.dev.industry14.candidate.popup.popupOfferCandidateOffer;

import java.util.ArrayList;

import static com.dev.industry14.LoginActivity.cOfferReq;

public class OfferAdapter extends RecyclerView.Adapter<OfferAdapter.ViewHolder> {


    private static Context context;
    public static int currentCompanyOffer;
    public static int currentPoso;

    private static Button btnAccepto, btnDeclineo;
    private static TextView txtName, txtLocation, txtMessage, txtSalary, txtPerks, txtStart;

    public static ArrayList<candInterViewRequest> OfferReq;        //Array of all interviews
    public static ArrayList<String>  positionRD;  // array of positions parallel to cIntReq


    public static class ViewHolder extends RecyclerView.ViewHolder {

        public ViewHolder(View v) {
            super(v);
            v.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    currentPoso = getAdapterPosition();

                }
            });

            txtName = (TextView) v.findViewById(R.id.txtNameOffer);
            txtLocation = (TextView) v.findViewById(R.id.txtLocationOffer);
            txtMessage = (TextView) v.findViewById(R.id.txtxMessageOffer);
            txtSalary = (TextView) v.findViewById(R.id.txtSalaryOffer);
            txtPerks = (TextView) v.findViewById(R.id.txtPerksOffer);
            txtStart = (TextView) v.findViewById(R.id.txtStartDateOffer);
            btnAccepto = (Button) v.findViewById(R.id.btnReplyOffer);
            btnDeclineo = (Button) v.findViewById(R.id.btnViewOffer);


             btnDeclineo.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {


            }

            });

             btnAccepto.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {

            Intent reply = new Intent(context, popupOfferCandidateOffer.class);
            reply.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            context.startActivity(reply);




            }

            });
             }

        public TextView getNameText() {
            return txtName;
        }
        public TextView getLocationText() {
            return txtLocation;
        }
        public TextView getMessageText() {
            return txtMessage;
        }
        public TextView getSalaryText() {
            return txtSalary;
        }
        public TextView getPerksText() {
            return txtPerks;
        }
        public TextView getStartText() {
            return txtStart;
        }


    }

    public OfferAdapter(Context c, ArrayList<candInterViewRequest> cOfferReq, ArrayList<String> positionRDS ){
        this.context = c;
        currentPoso = 0;
        this.OfferReq = cOfferReq;
        this.positionRD = positionRDS;


    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup viewGroup, int viewType) {

        View v = LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.text_row_offer, viewGroup, false);

        return new ViewHolder(v);
    }


    @Override
    public void onBindViewHolder(ViewHolder viewHolder, final int position) {



        for (int i = 0; i < LoginActivity.companiesForCand.size(); i++) {
            if ((LoginActivity.compIds.get(i).equals(cOfferReq.get(i).getCompanyId()) || (LoginActivity.compIds.get(i) == cOfferReq.get(i).getCompanyId()))) {
                currentCompanyOffer = i;
            }
        }


        viewHolder.getNameText().setText(LoginActivity.companiesForCand.get(currentCompanyOffer).getAccountName());
        viewHolder.getLocationText().setText(LoginActivity.companiesForCand.get(currentCompanyOffer).getAddressLine1());
        viewHolder.getMessageText().setText(OfferReq.get(position).getMessage());
        viewHolder.getSalaryText().setText(OfferReq.get(position).getSalary());
        viewHolder.getPerksText().setText(OfferReq.get(position).getPerks());
        viewHolder.getStartText().setText(OfferReq.get(position).getStartDate());



    }


    @Override
    public int getItemCount() {
        return OfferReq.size();
    }
}















































































/**

private static Context context;
public static int currentCompanyOffer;
public static int currentPoso;
// private static TextView txtInterviewName, txtMessageI, txtTimeI, txtLocationI, txtDateI;
private static Button btnViewo, btnReplyo;

public static ArrayList<candInterViewRequest> OfferReq;        //Array of all interviews
public static ArrayList<String>  positionRD;  // array of positions parallel to cIntReq


public static class ViewHolder extends RecyclerView.ViewHolder {

    public ViewHolder(View v) {
        super(v);
        v.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                currentPoso = getAdapterPosition();

            }
        });
        /**txtInterviewName = (TextView) v.findViewById(R.id.txtNameInterview);
         txtMessageI = (TextView) v.findViewById(R.id.txtMessageInterview);
         txtLocationI = (TextView) v.findViewById(R.id.txtLocationInterview);
         txtTimeI = (TextView) v.findViewById(R.id.txtTimeInterview);
         txtDateI = (TextView) v.findViewById(R.id.txtDateInterview);
        btnViewo = (Button) v.findViewById(R.id.btnView);
        btnReplyo = (Button) v.findViewById(R.id.btnReply);


        btnViewo.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {


            }

        });

        btnReplyo.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {

                Intent reply = new Intent(context, popupOfferCandidatec.class);
                reply.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                context.startActivity(reply);


            }

        });
    }

    public OfferAdapter(Context c, ArrayList<candInterViewRequest> cOfferReq, ArrayList<String> positionRDS) {
        this.context = c;
        currentPoso = 0;
        this.OfferReq = cOfferReq;
        this.positionRD = positionRDS;

    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup viewGroup, int viewType) {

        View v = LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.text_row_interview, viewGroup, false);

        return new ViewHolder(v);
    }


    @Override
    public void onBindViewHolder(ViewHolder viewHolder, final int position) {

        for (int i = 0; i < LoginActivity.companiesForCand.size(); i++) {
            if ((LoginActivity.compIds.get(i).equals(cOfferReq.get(i).getCompanyId()) || (LoginActivity.compIds.get(i) == cOfferReq.get(i).getCompanyId()))) {
                currentCompanyOffer = i;
            }
        }

        viewHolder.getInterviewNameTextView().setText(LoginActivity.companiesForCand.get(currentCompanyOffer).getAccountName());       //SET COMPONENTS
        viewHolder.getTxtLocation().setText(LoginActivity.companiesForCand.get(currentCompanyOffer).getAddressLine1());
        viewHolder.getTxtMessage().setText(OfferReq.get(position).getMessage());
        viewHolder.getTxtTime().setText("10:00");
        viewHolder.getTxtDate().setText(OfferReq.get(position).getInterviewDate());


    }


    @Override
    public int getItemCount() {
        return OfferReq.size();
    }


}

}
*/