# Publish / Subscribe events in typescript

A simple typescript class for subscribe/publishing events.

It creates a way for classes/components to communicate, but aims for loose coupling between these classes/components.

Inspired by DDDs domain events.

### Publish events

```javascript
import { Mediator } from "mediator"

Mediator.instance().publish({ 
    name: "person-created", 
    data: { 
        id : 1,
        name: "Vincent" 
    }  
});
```


### Subscribe to events

```javascript
import { Mediator } from "mediator"

Mediator.instance().subscribe("person-created", function(data) { 
  console.log("person created with name " + data.name);  // When event is published, will output "person created with name Vincent"
});
```



The data is provided as argument in the subscribers callback function.

Multiple subscribers can subscribe to a event.