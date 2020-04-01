package pl.agawrysiuk.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Pizza {
    private String name;
    private String photo;
    private String components;
    private String price;
}
