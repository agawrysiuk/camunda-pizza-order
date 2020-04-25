package pl.agawrysiuk.pizzashareddtos.dtos;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class LiteralDto {
    private String step;
    private String key;
    private String message;
}
