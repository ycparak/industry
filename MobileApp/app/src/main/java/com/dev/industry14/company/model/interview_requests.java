package com.dev.industry14.company.model;

public class interview_requests {

    private String candidateId, companyId, interviewDate, message, name, photoURL, positionId, stage, status, surname, perks, salary, startDate;

    public interview_requests(String candidateId, String companyId, String interviewDate, String message, String name, String perks, String photoURL, String positionId, String salary, String stage, String startDate, String status, String surname) {
        this.candidateId = candidateId;
        this.companyId = companyId;
        this.interviewDate = interviewDate;
        this.message = message;
        this.name = name;
        this.perks = perks;
        this.photoURL = photoURL;
        this.positionId = positionId;
        this.salary = salary;
        this.stage = stage;
        this.startDate = startDate;
        this.status = status;
        this.surname = surname;
    }

    public String getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(String candidateId) {
        this.candidateId = candidateId;
    }

    public String getCompanyId() {
        return companyId;
    }

    public void setCompanyId(String companyId) {
        this.companyId = companyId;
    }

    public String getInterviewDate() {
        return interviewDate;
    }

    public String getPerks() {
        return perks;
    }

    public void setPerks(String perks) {
        this.perks = perks;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public void setInterviewDate(String interviewDate) {
        this.interviewDate = interviewDate;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhotoURL() {
        return photoURL;
    }

    public void setPhotoURL(String photoURL) {
        this.photoURL = photoURL;
    }

    public String getPositionId() {
        return positionId;
    }

    public void setPositionId(String positionId) {
        this.positionId = positionId;
    }

    public String getStage() {
        return stage;
    }

    public void setStage(String stage) {
        this.stage = stage;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }
}
