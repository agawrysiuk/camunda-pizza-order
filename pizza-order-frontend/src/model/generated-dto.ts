/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.21.588 on 2020-05-04 20:30:52.

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

export interface PizzaDataDto {
    pizzas: Pizza[];
    conversations: Conversation[];
    additions: Additions[];
}

export interface LiteralDto {
    step: string;
    key: string;
    message: string;
}

export interface Pizza {
    name: string;
    photo: string;
    components: string;
    price: string;
}

export interface CamundaVariables {
    processId: string;
    stepId: string;
    pizza: Pizza;
    deliveryAddress: DeliveryAddress;
    additions: Additions;
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

export interface Additions {
    id: number;
    addition: string;
    price: string;
}

export const enum Step {
    START_PROCESS = "start-process",
    PIZZERIA_ANSWERED = "pizzeria-answered",
    WRITE_ADDRESS = "write-address",
    THANK_YOU = "thank-you",
}

export const enum StepReplyMessage {
    REQUEST_OK = "REQUEST_OK",
    BAD_PROCESSID = "BAD_PROCESSID",
    PROCESS_FINISHED = "PROCESS_FINISHED",
}
