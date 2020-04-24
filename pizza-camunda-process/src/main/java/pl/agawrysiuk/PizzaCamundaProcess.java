package pl.agawrysiuk;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class PizzaCamundaProcess {
    public static void main(String... args) {
        SpringApplication.run(PizzaCamundaProcess.class, args);
    }
}
