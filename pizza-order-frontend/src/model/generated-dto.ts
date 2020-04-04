/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.21.588 on 2020-04-04 16:35:47.

export interface DeliveryAddress {
    name: string;
    phone: string;
    street: string;
    building: string;
    suite: string;
    city: string;
    zipCode: string;
}

export interface Pizza {
    name: string;
    photo: string;
    components: string;
    price: number;
}

export interface CamundaVariables {
    processId: string;
    pizza: Pizza;
    deliveryAddress: DeliveryAddress;
    additions: string;
}

export interface CamundaMessage {
    processId: string;
    stepId: string;
    message: string;
    camundaVariables: CamundaVariables;
}
