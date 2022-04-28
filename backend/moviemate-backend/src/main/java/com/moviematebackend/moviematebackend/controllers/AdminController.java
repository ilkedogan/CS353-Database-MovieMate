package com.moviematebackend.moviematebackend.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
