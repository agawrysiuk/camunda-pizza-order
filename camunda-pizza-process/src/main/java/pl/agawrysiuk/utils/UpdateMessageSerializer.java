package pl.agawrysiuk.utils;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import lombok.RequiredArgsConstructor;

import java.io.IOException;

@RequiredArgsConstructor
public class UpdateMessageSerializer extends JsonSerializer<Object> {

    @Override
    public void serialize(Object value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        if(value != null && value instanceof String) {
            gen.writeRawValue("{\"value\":\""+ value +"\"}");
        } else {
            gen.writeRawValue("{\"value\":"+ value +"}");
        }
    }
}
