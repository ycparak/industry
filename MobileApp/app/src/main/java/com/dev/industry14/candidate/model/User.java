package com.dev.industry14.candidate.model;

public class User {

    private String name;
    private String location;
    private String rating;
    private int position;

    public User(String name, String location, String rating, int position) {
        this.name = name;
        this.location = location;
        this.rating = rating;
        this.position = position;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }
}