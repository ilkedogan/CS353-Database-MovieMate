package com.moviematebackend.moviematebackend.models.responseMoldes;

import java.util.ArrayList;
import java.util.List;

public class Customer {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String accountStatus;
    private List<SearchHistory> searchHistory;

    public Customer ( int id , String firstName , String lastName , String email , String password ,
                      String accountStatus ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.accountStatus = accountStatus;
        this.searchHistory = new ArrayList<>();
    }

    public int getId () {
        return id;
    }

    public void setId ( int id ) {
        this.id = id;
    }

    public String getFirstName () {
        return firstName;
    }

    public void setFirstName ( String firstName ) {
        this.firstName = firstName;
    }

    public String getLastName () {
        return lastName;
    }

    public void setLastName ( String lastName ) {
        this.lastName = lastName;
    }

    public String getEmail () {
        return email;
    }

    public void setEmail ( String email ) {
        this.email = email;
    }

    public String getPassword () {
        return password;
    }

    public void setPassword ( String password ) {
        this.password = password;
    }

    public String getAccountStatus () {
        return accountStatus;
    }

    public void setAccountStatus ( String accountStatus ) {
        this.accountStatus = accountStatus;
    }

    public List<SearchHistory> getSearchHistory () {
        return searchHistory;
    }

    public void setSearchHistory (
            List<SearchHistory> searchHistory ) {
        this.searchHistory = searchHistory;
    }
}
