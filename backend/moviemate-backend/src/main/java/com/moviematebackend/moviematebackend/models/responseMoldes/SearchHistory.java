package com.moviematebackend.moviematebackend.models.responseMoldes;

import java.util.Date;

public class SearchHistory {
    private Date searchDate;
    private String type;
    private String keyword;

    public SearchHistory ( Date searchDate , String type , String keyword ) {
        this.searchDate = searchDate;
        this.type = type;
        this.keyword = keyword;
    }

    public Date getSearchDate () {
        return searchDate;
    }

    public void setSearchDate ( Date searchDate ) {
        this.searchDate = searchDate;
    }

    public String getType () {
        return type;
    }

    public void setType ( String type ) {
        this.type = type;
    }

    public String getKeyword () {
        return keyword;
    }

    public void setKeyword ( String keyword ) {
        this.keyword = keyword;
    }
}
