/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.21.588 on 2020-04-11 12:32:41.

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
    stepId: string;
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

export interface StepMessage {
    replyMessage: StepReplyMessage;
    processId: string;
    stepId: string;
}

export const enum StepReplyMessage {
    REQUEST_OK = "REQUEST_OK",
    BAD_PROCESSID = "BAD_PROCESSID",
    PROCESS_FINISHED = "PROCESS_FINISHED",
}
