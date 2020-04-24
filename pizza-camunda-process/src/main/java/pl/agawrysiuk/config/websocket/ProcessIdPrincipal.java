package pl.agawrysiuk.config.websocket;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.security.Principal;

@Getter
@Setter
@AllArgsConstructor
public class ProcessIdPrincipal implements Principal {
    private final String name;
}
