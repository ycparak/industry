package com.dev.industry14.company.model;

import java.util.ArrayList;
import java.util.Map;

public class positionComp {

    private String address1, address2, maxExperiance, minSalary, provence, spec, zip;
    private Map<String, Object> candidates;
    private ArrayList<String> skills;
    private String title;
    private String team;
    private String seniority;
    private String role;
    private String minExperience;
    private String maxSalary;
    private String userId;
    private String iD;

    public positionComp() {

    }

    public positionComp(String address1, String address2, String maxExperiance, String minSalary, String provence, String spec, String zip, Map<String, Object> candidates, ArrayList<String> skills, String title, String team, String seniority, String role, String minExperience, String maxSalary, String userId, String iD) {
        this.address1 = address1;
        this.address2 = address2;
        this.maxExperiance = maxExperiance;
        this.minSalary = minSalary;
        this.provence = provence;
        this.spec = spec;
        this.zip = zip;
        this.candidates = candidates;
        this.skills = skills;
        this.title = title;
        this.team = team;
        this.seniority = seniority;
        this.role = role;
        this.minExperience = minExperience;
        this.maxSalary = maxSalary;
        this.userId = userId;
        this.iD = iD;
    }

    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getMaxExperiance() {
        return maxExperiance;
    }

    public void setMaxExperiance(String maxExperiance) {
        this.maxExperiance = maxExperiance;
    }

    public String getMinSalary() {
        return minSalary;
    }

    public void setMinSalary(String minSalary) {
        this.minSalary = minSalary;
    }

    public String getProvence() {
        return provence;
    }

    public void setProvence(String provence) {
        this.provence = provence;
    }

    public String getSpec() {
        return spec;
    }

    public void setSpec(String spec) {
        this.spec = spec;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public Map<String, Object> getCandidates() {
        return candidates;
    }

    public void setCandidates(Map<String, Object> candidates) {
        this.candidates = candidates;
    }

    public ArrayList<String> getSkills() {
        return skills;
    }

    public void setSkills(ArrayList<String> skills) {
        this.skills = skills;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public String getSeniority() {
        return seniority;
    }

    public void setSeniority(String seniority) {
        this.seniority = seniority;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getMinExperience() {
        return minExperience;
    }

    public void setMinExperience(String minExperience) {
        this.minExperience = minExperience;
    }

    public String getMaxSalary() {
        return maxSalary;
    }

    public void setMaxSalary(String maxSalary) {
        this.maxSalary = maxSalary;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getiD() {
        return iD;
    }

    public void setiD(String iD) {
        this.iD = iD;
    }
}
