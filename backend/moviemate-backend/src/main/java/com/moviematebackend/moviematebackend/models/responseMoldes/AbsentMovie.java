package com.moviematebackend.moviematebackend.models.responseMoldes;

import java.util.Date;

public class AbsentMovie {
    private int id;
    private String title;
    private String director;
    private String status;
    private Date requestDate;

    public AbsentMovie ( int id , String title , String director , String status , Date requestDate ) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.status = status;
        this.requestDate = requestDate;
    }

    public int getId () {
        return id;
    }

    public void setId ( int id ) {
        this.id = id;
    }

    public String getTitle () {
        return title;
    }

    public void setTitle ( String title ) {
        this.title = title;
    }

    public String getDirector () {
        return director;
    }

    public void setDirector ( String director ) {
        this.director = director;
    }

    public String getStatus () {
        return status;
    }

    public void setStatus ( String status ) {
        this.status = status;
    }

    public Date getRequestDate () {
        return requestDate;
    }

    public void setRequestDate ( Date requestDate ) {
        this.requestDate = requestDate;
    }
}
