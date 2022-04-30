package com.moviematebackend.moviematebackend.models.responseMoldes;

import java.util.Date;

public class Employee {
    private int id;
    private String email;
    private String password;
    private String name;
    private String surname;
    private String socialInsuranceNo;

    public Employee ( int id , String email , String password , String name , String surname ,
                      String socialInsuranceNo ) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.socialInsuranceNo = socialInsuranceNo;
    }

    public int getId () {
        return id;
    }

    public void setId ( int id ) {
        this.id = id;
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

    public String getName () {
        return name;
    }

    public void setName ( String name ) {
        this.name = name;
    }

    public String getSurname () {
        return surname;
    }

    public void setSurname ( String surname ) {
        this.surname = surname;
    }

    public String getSocialInsuranceNo () {
        return socialInsuranceNo;
    }

    public void setSocialInsuranceNo ( String socialInsuranceNo ) {
        this.socialInsuranceNo = socialInsuranceNo;
    }
}
