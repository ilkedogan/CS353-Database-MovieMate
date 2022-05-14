package com.moviematebackend.moviematebackend.models.responseMoldes;

public class FriendShip {
    private int senderId;
    private String senderName;
    private String senderSurname;
    private int receiverId;
    private String receiverName;
    private String receiverSurname;
    private int status;

    public FriendShip ( int senderId , String senderName , String senderSurname , int receiverId ,
                        String receiverName , String receiverSurname , int status ) {
        this.senderId = senderId;
        this.senderName = senderName;
        this.senderSurname = senderSurname;
        this.receiverId = receiverId;
        this.receiverName = receiverName;
        this.receiverSurname = receiverSurname;
        this.status = status;
    }

    public int getSenderId () {
        return senderId;
    }

    public void setSenderId ( int senderId ) {
        this.senderId = senderId;
    }

    public String getSenderName () {
        return senderName;
    }

    public void setSenderName ( String senderName ) {
        this.senderName = senderName;
    }

    public String getSenderSurname () {
        return senderSurname;
    }

    public void setSenderSurname ( String senderSurname ) {
        this.senderSurname = senderSurname;
    }

    public int getReceiverId () {
        return receiverId;
    }

    public void setReceiverId ( int receiverId ) {
        this.receiverId = receiverId;
    }

    public String getReceiverName () {
        return receiverName;
    }

    public void setReceiverName ( String receiverName ) {
        this.receiverName = receiverName;
    }

    public String getReceiverSurname () {
        return receiverSurname;
    }

    public void setReceiverSurname ( String receiverSurname ) {
        this.receiverSurname = receiverSurname;
    }

    public int getStatus () {
        return status;
    }

    public void setStatus ( int status ) {
        this.status = status;
    }
}
