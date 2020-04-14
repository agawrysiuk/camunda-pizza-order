package pl.agawrysiuk.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ser.DefaultSerializerProvider;
import pl.agawrysiuk.camunda.messages.VariablesUpdateMessage;

public class UpdateMessageConverter {

    private static final ObjectMapper MAPPER = new ObjectMapper() {{
        DefaultSerializerProvider.Impl sp = new DefaultSerializerProvider.Impl();
        sp.setNullValueSerializer(new UpdateMessageSerializer());
        setSerializerProvider(sp);
        findAndRegisterModules();
        configure(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT, true);
        configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
    }};

    private UpdateMessageConverter() {}

    public static String convertToJson(VariablesUpdateMessage updateMessage) throws JsonProcessingException {
        return MAPPER.writeValueAsString(updateMessage);
    }
}
