package com.moviematebackend.moviematebackend.models.responseMoldes;

import java.util.Date;

public class Actor {
    private int id;
    private String name;
    private String surname;
    private Date birthYear;

    public Actor ( int id, String name , String surname , Date birthYear ) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
    }

    public int getId () {
        return id;
    }

    public void setId ( int id ) {
        this.id = id;
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

    public Date getBirthYear () {
        return birthYear;
    }

    public void setBirthYear ( Date birthYear ) {
        this.birthYear = birthYear;
    }
}
