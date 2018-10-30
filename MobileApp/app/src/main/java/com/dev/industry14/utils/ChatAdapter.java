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
import com.dev.industry14.candidate.model.candInterViewRequest;
import com.dev.industry14.R;
import com.dev.industry14.candidate.popup.popupOfferCandidatec;

import java.util.ArrayList;

import static com.dev.industry14.LoginActivity.cIntReq;

public class ChatAdapter extends RecyclerView.Adapter<ChatAdapter.ViewHolder> {

    private static Context context;
    public static int currentCompanyInt;
    public static int currentPosi;
    private static TextView  txtInterviewName, txtMessageI, txtTimeI, txtLocationI, txtDateI;
    private static Button btnView, btnReply;

    public static ArrayList<candInterViewRequest> IntReq;        //Array of all interviews
    public static ArrayList<String>  positionID;  // array of positions parallel to cIntReq


    public static class ViewHolder extends RecyclerView.ViewHolder {

        public ViewHolder(View v) {
            super(v);
            v.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    currentPosi = getAdapterPosition();

                }
            });
            txtInterviewName = (TextView) v.findViewById(R.id.txtNameInterview);
            txtMessageI = (TextView) v.findViewById(R.id.txtMessageInterview);
            txtLocationI = (TextView) v.findViewById(R.id.txtLocationInterview);
            txtTimeI = (TextView) v.findViewById(R.id.txtTimeInterview);
            txtDateI = (TextView) v.findViewById(R.id.txtDateInterview);
            btnView = (Button) v.findViewById(R.id.btnView);
            btnReply = (Button) v.findViewById(R.id.btnReply);


            btnView.setOnClickListener(new View.OnClickListener() {

                @Override
                public void onClick(View view) {



                }

            });

            btnReply.setOnClickListener(new View.OnClickListener() {

                @Override
                public void onClick(View view) {

                    Intent reply = new Intent(context,popupOfferCandidatec.class);
                    reply.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                    context.startActivity(reply);



                }

            });
        }

        public TextView getInterviewNameTextView() {
            return txtInterviewName;
        }
        public TextView getTxtMessage() {
            return txtMessageI;
        }
        public TextView getTxtLocation() {
            return txtLocationI;
        }
        public TextView getTxtTime() {
            return txtTimeI;
        }
        public TextView getTxtDate() {
            return txtDateI;
        }


    }

    public ChatAdapter(Context c, ArrayList<candInterViewRequest> cIntReq, ArrayList<String> positionIDS ){
        this.context = c;
        currentPosi = 0;
        this.IntReq = cIntReq;
        this.positionID = positionIDS;

    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup viewGroup, int viewType) {

        View v = LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.text_row_interview, viewGroup, false);

        return new ViewHolder(v);
    }


    @Override
    public void onBindViewHolder(ViewHolder viewHolder, final int position) {

        for(int i = 0; i < LoginActivity.companiesForCand.size(); i ++)
        {
            if((LoginActivity.compIds.get(i).equals(cIntReq.get(i).getCompanyId()) || (LoginActivity.compIds.get(i) == cIntReq.get(i).getCompanyId())))
            {
                currentCompanyInt = i;
            }
        }

            viewHolder.getInterviewNameTextView().setText(LoginActivity.companiesForCand.get(currentCompanyInt).getAccountName());       //SET COMPONENTS
            viewHolder.getTxtLocation().setText(LoginActivity.companiesForCand.get(currentCompanyInt).getAddressLine1());
            viewHolder.getTxtMessage().setText(IntReq.get(position).getMessage());
            viewHolder.getTxtTime().setText("10:00");
            viewHolder.getTxtDate().setText(IntReq.get(position).getInterviewDate());


    }


    @Override
    public int getItemCount() {
        return IntReq.size();
    }
}
