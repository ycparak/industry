package com.dev.industry14.utils;

import android.support.annotation.DrawableRes;
import android.util.Log;
import android.widget.ImageView;
import com.dev.industry14.R;

import com.bumptech.glide.Glide;

public class ImageHelper {

    /**
     * Fucntion using the Glide libary to efficently load images
     * @param drawableName The name of the image to load
     * @param imgV The imageview to load the image in
     */
    public static void loadImage(@DrawableRes int drawableName, ImageView imgV) {

        Glide.with(imgV.getContext()).load(drawableName).asBitmap().into(imgV);
    }

    /**
     * Function to start the loading of an image to a specfic textView
     * @param condition Current weather condiditon
     * @param imgV Specific textView
     */
    public static void getImage(Integer condition, ImageView imgV) {

        switch (condition)
        {
            case 1:
                loadImage(R.drawable.angular, imgV);
                break;
            case 2:
                loadImage(R.drawable.backend, imgV);
                break;
            case 3:
                loadImage(R.drawable.cplusplus, imgV);
                break;
            case 4:
                loadImage(R.drawable.csharp, imgV);
                break;
            case 5:
                loadImage(R.drawable.dev, imgV);
                break;
            case 6:
                loadImage(R.drawable.frontend, imgV);
                break;
            case 7:
                loadImage(R.drawable.fullstackkk, imgV);
                break;

            default:
                Log.e("Error", "Cannot fetch image");
                break;
        }
    }
}
