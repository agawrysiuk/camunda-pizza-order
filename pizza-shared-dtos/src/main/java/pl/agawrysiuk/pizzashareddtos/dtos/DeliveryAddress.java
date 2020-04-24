package pl.agawrysiuk.pizzashareddtos.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class DeliveryAddress {
    private String name;
    private String phone;
    private String street;
    private String building;
    private String suite;
    private String city;
    private String zipCode;
    private String country = "POLAND";
}
