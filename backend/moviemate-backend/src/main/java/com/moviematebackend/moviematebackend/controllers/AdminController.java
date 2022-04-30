package com.moviematebackend.moviematebackend.controllers;

import com.moviematebackend.moviematebackend.exception.UserServiceException;
import com.moviematebackend.moviematebackend.models.responseMoldes.Admin;
import com.moviematebackend.moviematebackend.utils.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.Statement;

@CrossOrigin
@RestController
@RequestMapping( "/admin" )
public class AdminController {

    /*
    bir de ilk defa çalıştırıyorken MoviemateBackendApplication class ındaki oluşturma commentini kaldırın.
    Oluşturunce tekrar commentleyin.

    örnek customer controller da var.

     @GetMapping notation'dan sonra eğer  @GetMapping("/something") yazarsanız root'a eklenir.
     mesela burda direkt

     @GetMapping kullanırsam bu http://localhost:8080/admin olur
     @GetMapping("/something") yaparsam  http://localhost:8080/admin/something olur

     çok büyük bir veri almadıkça her şeyi @RequestParam( value = "email" ) String email şeklinde alabilirsiniz. Yine
      örneği var. Eğer bir şey oluşturuluyorsa response olarak yeni bir java class ı döndürmeniz gerekir. Ama silme
      veya update gibi bir değişiklik yapıyorsanız, boolean döndürebilirsiniz şimdilik(daha sonra status response
      eklicem ben).


        admin oluşturma silme yapılacak burda
     */

    @GetMapping // http://localhost:8080/admin?email=adminasli@gmail.com
    public Admin selectAdmin ( @RequestParam( value = "email" ) String email ) {

        try {
            String query = "SELECT * FROM Admin WHERE email = '" + email + "'";
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            ResultSet resultSet = statement.executeQuery( query );
            Admin admin;
            if ( resultSet.next() ) {
                admin = new Admin( resultSet.getInt( "admin_id" ) ,
                        resultSet.getString( "first_name" ) ,
                        resultSet.getString( "last_name" ) ,
                        resultSet.getString( "email" ) ,
                        resultSet.getString( "password" ) );
                return admin;
            }else{
                throw new UserServiceException( "Data is not found!" );
            }
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

    @PostMapping // http://localhost:8080/admin?email=adminasli@gmail.com&password=123456&name=Aslı&surname=Dinç
    public Boolean insertAdmin ( @RequestParam( value = "email" ) String email ,
                                    @RequestParam( value = "password" ) String password ,
                                    @RequestParam( value = "name" ) String name ,
                                    @RequestParam( value = "surname" ) String surname ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();

            String statementString = "INSERT INTO Admin( `email`, `password`, `first_name`, `last_name` ) " +
                    "VALUES " +
                    "(" +
                    "'" + email +
                    "', '" + password +
                    "', '" + name +
                    "', '" + surname +
                    "'" +
                    ");";

            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }


}
