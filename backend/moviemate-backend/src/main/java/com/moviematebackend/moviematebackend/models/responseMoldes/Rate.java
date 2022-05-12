package com.moviematebackend.moviematebackend.models.responseMoldes;

public class Rate {
    private int point;

    public Rate ( int point ) {
        this.point = point;
    }

    public int getPoint () {
        return point;
    }

    public void setPoint ( int point ) {
        this.point = point;
    }
}
