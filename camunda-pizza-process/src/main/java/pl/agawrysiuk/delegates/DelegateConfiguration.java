package pl.agawrysiuk.delegates;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import pl.agawrysiuk.delegates.servicetasks.ChangeStepListener;
import pl.agawrysiuk.delegates.servicetasks.CheckDataDelegate;
import pl.agawrysiuk.delegates.servicetasks.CreateVariablesDelegate;
import pl.agawrysiuk.delegates.servicetasks.PhoneAnswerDelegate;

@Configuration
public class DelegateConfiguration {

    @Bean
    public ChangeStepListener changeStepListener() {
        return new ChangeStepListener();
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
