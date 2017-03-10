
class Mediator implements IMediator {
    static classInstance: Mediator = null;
    private events: { [id: string]: Array<ISubscription>; } = {};

    private constructor() { }

    public publish(event: IEvent<Object>): Mediator {
        if (!this.events[event.name]) {
            return this;
        }

        for (var i = 0, l = this.events[event.name].length; i < l; i++) {
            let subscription = this.events[event.name][i];
            subscription.callback(event.data);
        }
        return this;
    };

    public subscribe(eventName: string, callback: Function): Mediator {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push({ callback: callback });
        return this;
    };

    static instance(): IMediator {
    if (this.classInstance == null) {
        this.classInstance = new Mediator();
    }
    return this.classInstance;
}
}

interface ISubscription {
    callback: Function;
}

interface IMediator {
    publish(event: IEvent<Object>) : void;
    subscribe(eventName: string, callback: Function)  : void;
}

interface IEvent<T> {
    name: string;
    data: T;
}

export { IEvent, IMediator, Mediator }