package com.moviematebackend.moviematebackend.controllers;

import com.moviematebackend.moviematebackend.exception.UserServiceException;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping( "/rate" )
public class RateController {

    @PostMapping
    public Boolean rateMovie ( @RequestParam( value = "rate" ) int rate ,
                               @RequestParam( value = "movieId" ) int movieId ,
                               @RequestParam( value = "userId" ) int userId ) {
        try {


            return true;
        } catch ( Exception exception ) {
            throw new UserServiceException( exception.getMessage() );
        }
    }

}
