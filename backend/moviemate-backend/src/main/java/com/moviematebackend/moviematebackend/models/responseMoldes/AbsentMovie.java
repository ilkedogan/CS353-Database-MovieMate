package com.moviematebackend.moviematebackend.models.responseMoldes;

public class AbsentMovie {
    private int id;
    private String title;
    private String director;

    public AbsentMovie ( int id , String title , String director ) {
        this.id = id;
        this.title = title;
        this.director = director;
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
}
