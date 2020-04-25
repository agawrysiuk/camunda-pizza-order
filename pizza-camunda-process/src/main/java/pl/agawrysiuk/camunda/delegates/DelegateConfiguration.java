package pl.agawrysiuk.camunda.delegates;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import pl.agawrysiuk.camunda.delegates.listeners.ChangeStepListener;
import pl.agawrysiuk.camunda.delegates.servicetasks.CheckDataDelegate;
import pl.agawrysiuk.camunda.delegates.servicetasks.CreateVariablesDelegate;
import pl.agawrysiuk.camunda.delegates.servicetasks.PhoneAnswerDelegate;

@Configuration
public class DelegateConfiguration {

    @Bean
    public ChangeStepListener changeStepListener(RestTemplate restTemplate) {
        return new ChangeStepListener(restTemplate);
    }

    @Bean
    public PhoneAnswerDelegate phoneAnswerDelegate() {
        return new PhoneAnswerDelegate();
    }

    @Bean
    public CreateVariablesDelegate createVariablesDelegate() {
        return new CreateVariablesDelegate();
    }

    @Bean
    public CheckDataDelegate checkDataDelegate() {
        return new CheckDataDelegate();
    }
}
