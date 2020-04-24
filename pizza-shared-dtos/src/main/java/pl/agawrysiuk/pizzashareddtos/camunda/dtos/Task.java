package pl.agawrysiuk.pizzashareddtos.camunda.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Task {
    private String id;
    private String name;
    private String assignee;
    private String created;
    private String due;
    private String followUp;
    private String delegationState;
    private String description;
    private String executionId;
    private String owner;
    private String parentTaskId;
    private Long priority;
    private String processDefinitionId;
    private String processInstanceId;
    private String caseDefinitionId;
    private String caseInstanceId;
    private String caseExecutionId;
    private String taskDefinitionKey;
    private Boolean suspended;
    private String formKey;
    private String tenantId;
}
