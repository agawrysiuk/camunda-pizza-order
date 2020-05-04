package pl.agawrysiuk.pizzashareddtos.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.agawrysiuk.pizzashareddtos.utils.validation.WriteAddress;

import javax.validation.constraints.NotEmpty;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class DeliveryAddress {
    @NotEmpty(groups = WriteAddress.class)
    private String name;
    @NotEmpty(groups = WriteAddress.class)
    private String phone;
    @NotEmpty(groups = WriteAddress.class)
    private String street;
    @NotEmpty(groups = WriteAddress.class)
    private String building;
    private String suite;
    @NotEmpty(groups = WriteAddress.class)
    private String city;
    @NotEmpty(groups = WriteAddress.class)
    private String zipCode;
    private String country = "POLAND";
}
