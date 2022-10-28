package Singleton.server.content.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ContentController {

    @GetMapping("/")
    @ResponseBody
    public String hi(){
        return "hello world!";
    }
}
