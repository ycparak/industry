package com.dev.industry14.company.model;

import java.util.ArrayList;
import java.util.Date;

public class companyUser {

    private String accountName, accountNumber, addressLine1, addressLine2, branchCode, businessCulture, businessDescription, businessEngineering, businessHiring, businessNumber, businessType, businessURL, businessWhat, businessWhy,  city, companyName, companyNumber, country,  name, numEmployees, ownerName, ownerNumber1, ownerNumber2, ownerSurname, ownerTitle, perks, provence, surname, tradingName, userType, zip;
    private boolean stage1, stage2, stage3;
    private ArrayList<String> techStack;
    private Date createdAt;

    public companyUser()
    {

    }

    public companyUser(String accountName, String accountNumber, String addressLine1, String addressLine2, String branchCode, String businessCulture, String businessDescription, String businessEngineering, String businessHiring, String businessNumber, String businessType, String businessURL, String businessWhat, String businessWhy, String city, String companyName, String companyNumber, String country, Date createdAt, String name, String numEmployees, String ownerName, String ownerNumber1, String ownerNumber2, String ownerSurname, String ownerTitle, String perks, String provence,  boolean stage1, boolean stage2, boolean stage3, String surname, ArrayList<String> techStack, String tradingName, String userType, String zip) {
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.branchCode = branchCode;
        this.businessCulture = businessCulture;
        this.businessDescription = businessDescription;
        this.businessEngineering = businessEngineering;
        this.businessHiring = businessHiring;
        this.businessNumber = businessNumber;
        this.businessType = businessType;
        this.businessURL = businessURL;
        this.businessWhat = businessWhat;
        this.businessWhy = businessWhy;
        this.city = city;
        this.companyName = companyName;
        this.companyNumber = companyNumber;
        this.country = country;
        this.createdAt = createdAt;
        this.name = name;
        this.numEmployees = numEmployees;
        this.ownerName = ownerName;
        this.ownerNumber1 = ownerNumber1;
        this.ownerNumber2 = ownerNumber2;
        this.ownerSurname = ownerSurname;
        this.ownerTitle = ownerTitle;
        this.perks = perks;
        this.provence = provence;
        this.stage1 = stage1;
        this.stage2 = stage2;
        this.stage3 = stage3;
        this.surname = surname;
        this.techStack = techStack;
        this.tradingName = tradingName;
        this.userType = userType;
        this.zip = zip;

    }

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getAddressLine1() {
        return addressLine1;
    }

    public void setAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
    }

    public String getAddressLine2() {
        return addressLine2;
    }

    public void setAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
    }

    public String getBranchCode() {
        return branchCode;
    }

    public void setBranchCode(String branchCode) {
        this.branchCode = branchCode;
    }

    public String getBusinessCulture() {
        return businessCulture;
    }

    public void setBusinessCulture(String businessCulture) {
        this.businessCulture = businessCulture;
    }

    public String getBusinessDescription() {
        return businessDescription;
    }

    public void setBusinessDescription(String businessDescription) {
        this.businessDescription = businessDescription;
    }

    public String getBusinessEngineering() {
        return businessEngineering;
    }

    public void setBusinessEngineering(String businessEngineering) {
        this.businessEngineering = businessEngineering;
    }

    public String getBusinessHiring() {
        return businessHiring;
    }

    public void setBusinessHiring(String businessHiring) {
        this.businessHiring = businessHiring;
    }

    public String getBusinessNumber() {
        return businessNumber;
    }

    public void setBusinessNumber(String businessNumber) {
        this.businessNumber = businessNumber;
    }

    public String getBusinessType() {
        return businessType;
    }

    public void setBusinessType(String businessType) {
        this.businessType = businessType;
    }

    public String getBusinessURL() {
        return businessURL;
    }

    public void setBusinessURL(String businessURL) {
        this.businessURL = businessURL;
    }

    public String getBusinessWhat() {
        return businessWhat;
    }

    public void setBusinessWhat(String businessWhat) {
        this.businessWhat = businessWhat;
    }

    public String getBusinessWhy() {
        return businessWhy;
    }

    public void setBusinessWhy(String businessWhy) {
        this.businessWhy = businessWhy;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCompanyNumber() {
        return companyNumber;
    }

    public void setCompanyNumber(String companyNumber) {
        this.companyNumber = companyNumber;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNumEmployees() {
        return numEmployees;
    }

    public void setNumEmployees(String numEmployees) {
        this.numEmployees = numEmployees;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public String getOwnerNumber1() {
        return ownerNumber1;
    }

    public void setOwnerNumber1(String ownerNumber1) {
        this.ownerNumber1 = ownerNumber1;
    }

    public String getOwnerNumber2() {
        return ownerNumber2;
    }

    public void setOwnerNumber2(String ownerNumber2) {
        this.ownerNumber2 = ownerNumber2;
    }

    public String getOwnerSurname() {
        return ownerSurname;
    }

    public void setOwnerSurname(String ownerSurname) {
        this.ownerSurname = ownerSurname;
    }

    public String getOwnerTitle() {
        return ownerTitle;
    }

    public void setOwnerTitle(String ownerTitle) {
        this.ownerTitle = ownerTitle;
    }

    public String getPerks() {
        return perks;
    }

    public void setPerks(String perks) {
        this.perks = perks;
    }

    public String getProvence() {
        return provence;
    }

    public void setProvence(String provence) {
        this.provence = provence;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getTradingName() {
        return tradingName;
    }

    public void setTradingName(String tradingName) {
        this.tradingName = tradingName;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public boolean isStage1() {
        return stage1;
    }

    public void setStage1(boolean stage1) {
        this.stage1 = stage1;
    }

    public boolean isStage2() {
        return stage2;
    }

    public void setStage2(boolean stage2) {
        this.stage2 = stage2;
    }

    public boolean isStage3() {
        return stage3;
    }

    public void setStage3(boolean stage3) {
        this.stage3 = stage3;
    }

    public ArrayList<String> getTechStack() {
        return techStack;
    }

    public void setTechStack(ArrayList<String> techStack) {
        this.techStack = techStack;
    }
}