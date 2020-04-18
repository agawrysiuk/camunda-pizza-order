package pl.agawrysiuk.utils;

import com.fasterxml.jackson.databind.BeanDescription;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializationConfig;
import com.fasterxml.jackson.databind.ser.BeanSerializerModifier;
import pl.agawrysiuk.model.DeliveryAddress;
import pl.agawrysiuk.model.Pizza;

public class CustomBeanSerializerModifier extends BeanSerializerModifier {

    @Override
    public JsonSerializer<?> modifySerializer(SerializationConfig config,
                                              BeanDescription beanDesc,
                                              JsonSerializer<?> serializer) {
        if (beanDesc.getBeanClass().equals(String.class)
                || beanDesc.getBeanClass().equals(Double.class)
                || beanDesc.getBeanClass().equals(Boolean.class)
                || beanDesc.getBeanClass().equals(Pizza.class)
                || beanDesc.getBeanClass().equals(DeliveryAddress.class)) {
            return new UpdateMessageSerializer((JsonSerializer<Object>) serializer);
        }
        return serializer;
    }
}
