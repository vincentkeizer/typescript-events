# Publish / Subscribe events in typescript

A simple typescript class for subscribe/publishing events.

It creates a way for classes/components to communicate, but aims for loose coupling between these classes/components.

Inspired by DDDs domain events.


### Subscribe to events

```javascript
Core.Mediator.instance.subscribe("person-created", function(name) { 
  console.log("person created with name " + name); 
})
```

### Publish events

```javascript
Core.Mediator.instance.publish({ 
    name: "person-created", 
    data: "Vincent" })
```

The data is provided as argument in the subscribers callback function.

Multiple subscribers can subscribe to a event.