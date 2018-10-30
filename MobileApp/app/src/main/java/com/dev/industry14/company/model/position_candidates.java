package com.dev.industry14.company.model;

public class position_candidates {

    private String candidateId, companyId, positionId, stage, status;

    public position_candidates(String candidateId, String companyId, String positionId, String stage, String status) {
        this.candidateId = candidateId;
        this.companyId = companyId;
        this.positionId = positionId;
        this.stage = stage;
        this.status = status;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setCompanyId(String companyId) {
        this.companyId = companyId;
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
}
