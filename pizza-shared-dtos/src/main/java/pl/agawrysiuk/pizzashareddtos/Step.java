package pl.agawrysiuk.pizzashareddtos;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Step {
    START_PROCESS,
    PIZZERIA_ANSWERED,
    WRITE_ADDRESS,
    THANK_YOU;

    @Override
    @JsonValue
    public String toString() {
        return super.toString().toLowerCase().replace("_","-");
    }
}
