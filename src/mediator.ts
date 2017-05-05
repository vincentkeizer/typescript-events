
class EventStorage {
    private static classInstance : EventStorage; 
    private events: { [id: string]: Array<(data : Object) => void>; } = {};

    private constructor() {}

    public get<T>(eventName : string) : Array<(data: T) => void> {
        if (!this.events[eventName]) {
            return [];
        }

        return this.events[eventName];
    }

    public add<T>(eventName : string, callback: (data : T) => void) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    public static instance() : EventStorage {
        if (EventStorage.classInstance == null) {
            EventStorage.classInstance = new EventStorage();
        }
        return EventStorage.classInstance;
    }
}

class Mediator implements IMediator {
    public constructor() { }

    public publish<T>(event: IEvent<T>): IMediator {
        let subscriptions = EventStorage.instance().get(event.name);

        for (var i = 0, l = subscriptions.length; i < l; i++) {
            let subscription = subscriptions[i];
            subscription(event.data);
        }
        return this;
    };

    public subscribe<T>(eventName: string, callback: (data : T) => void) : IMediator {
        EventStorage.instance().add(eventName, callback);
        return this;
    };
}

interface IMediator {
    publish<T>(event: IEvent<T>) : IMediator;
    subscribe<T>(eventName: string, callback: (data : T) => void)  : IMediator;
}

interface IEvent<T> {
    name: string;
    data: T;
}

export { IEvent, IMediator, Mediator }