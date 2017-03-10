declare class Mediator implements IMediator {
    static classInstance: Mediator;
    private events;
    private constructor();
    publish(event: IEvent<Object>): Mediator;
    subscribe(eventName: string, callback: Function): Mediator;
    static instance(): IMediator;
}
interface IMediator {
    publish(event: IEvent<Object>): void;
    subscribe(eventName: string, callback: Function): void;
}
interface IEvent<T> {
    name: string;
    data: T;
}
export { IEvent, IMediator, Mediator };
