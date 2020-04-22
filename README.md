# camunda-pizza-order
Camunda + Spring Boot + Angular project for modelling a process of ordering pizza

Check out the short view here:

![Order Pizza Gif](https://github.com/agawrysiuk/camunda-pizza-order/blob/master/animation.gif)

## To do:
- Add H2 database with literals to display on the front page + flyway migrations
- Add pizzas to the database, additions too
- Improve order summary
- Data validity on the backend
- Add Loader?
- Fix getStepMessage + add a builder for the incorrect step message
- Improve adding css classes to the project
- Add timeout for the process (20M?) + 'Sorry Page'
- Enhance Camunda process:
    - Add service steps for Cooking Pizza, Out For Deliver, and Delivered (updatable by UI created for pizzeria's side)
    - Improve existing service tasks
- Throw BpmnError: add enums and error builder and update values error
    - Add errors to the .bpmn process
- Convert CSS to SASS
- Add support for the mobile view
- Fill README.md with information about the project
