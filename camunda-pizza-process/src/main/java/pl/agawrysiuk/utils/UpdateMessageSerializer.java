package pl.agawrysiuk.utils;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import java.io.IOException;

public class UpdateMessageSerializer extends StdSerializer<Object> {

    private final JsonSerializer<Object> defaultSerializer;

    public UpdateMessageSerializer(JsonSerializer<Object> defaultSerializer) {
        super(Object.class);
        this.defaultSerializer = defaultSerializer;
    }

    @Override
    public void serialize(Object value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        gen.writeStartObject();
        gen.writeFieldName("value");
        defaultSerializer.serialize(value, gen, serializers);
        gen.writeEndObject();
    }
}
