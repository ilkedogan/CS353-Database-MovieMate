package com.moviematebackend.moviematebackend.models.responseMoldes;

public class SelectUser {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String accountStatus;

    public SelectUser ( int id , String firstName , String lastName , String email , String password ,
                        String accountStatus ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.accountStatus = accountStatus;
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
}
