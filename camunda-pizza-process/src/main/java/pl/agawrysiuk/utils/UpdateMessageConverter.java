package pl.agawrysiuk.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.fasterxml.jackson.databind.ser.DefaultSerializerProvider;
import pl.agawrysiuk.camunda.messages.VariablesUpdateMessage;

public class UpdateMessageConverter {

    private static final ObjectMapper MAPPER = new ObjectMapper() {{
        NullSerializer nullSerializer = new NullSerializer();
        DefaultSerializerProvider.Impl sp = new DefaultSerializerProvider.Impl();
        sp.setNullValueSerializer(nullSerializer);
        setSerializerProvider(sp);
//        setSerializationInclusion(JsonInclude.Include.ALWAYS);
//        findAndRegisterModules();
        SimpleModule module = new SimpleModule();
        module.setSerializerModifier(new CustomBeanSerializerModifier());
//        module.addSerializer(CamundaVariables.class, updateSerializer);
        registerModule(module);
    }};

    private UpdateMessageConverter() {}

    public static String convertToJson(VariablesUpdateMessage updateMessage) throws JsonProcessingException {
        return MAPPER.writeValueAsString(updateMessage);
    }
}
