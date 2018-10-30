package com.dev.industry14;

public class UserLogin {

    private String userType;

    public UserLogin(String userType) {
        this.userType = userType;
    }
    public UserLogin() {

    }


    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }
}
