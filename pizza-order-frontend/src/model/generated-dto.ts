/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.21.588 on 2020-04-24 20:06:50.

export interface Conversation {
    id: number;
    choice: string;
    reaction: string;
}

export interface DeliveryAddress {
    name: string;
    phone: string;
    street: string;
    building: string;
    suite: string;
    city: string;
    zipCode: string;
    country: string;
}

export interface Pizza {
    name: string;
    photo: string;
    components: string;
    price: number;
    extras: boolean;
}

export interface CamundaVariables {
    processId: string;
    stepId: string;
    pizza: Pizza;
    deliveryAddress: DeliveryAddress;
    additions: string;
}

export interface Task {
    id: string;
    name: string;
    assignee: string;
    created: string;
    due: string;
    followUp: string;
    delegationState: string;
    description: string;
    executionId: string;
    owner: string;
    parentTaskId: string;
    priority: number;
    processDefinitionId: string;
    processInstanceId: string;
    caseDefinitionId: string;
    caseInstanceId: string;
    caseExecutionId: string;
    taskDefinitionKey: string;
    suspended: boolean;
    formKey: string;
    tenantId: string;
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
