declare class Mediator implements IMediator {
    constructor();
    publish<T>(event: IEvent<T>): IMediator;
    subscribe<T>(eventName: string, callback: (data: T) => void): IMediator;
}
interface IMediator {
    publish<T>(event: IEvent<T>): IMediator;
    subscribe<T>(eventName: string, callback: (data: T) => void): IMediator;
}
interface IEvent<T> {
    name: string;
    data: T;
}
export { IEvent, IMediator, Mediator };
