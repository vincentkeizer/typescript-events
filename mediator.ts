module Core {
    export namespace Mediator {
        class Mediator implements IMediator {
            static instance: Mediator = null;
            private events: { [id: string]: Array<ISubscription>; } = {};

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
        }

        interface ISubscription {
            callback: Function;
        }

        export interface IMediator {
            publish(event: IEvent<Object>);
            subscribe(eventName: string, callback: Function);
        }

        export interface IEvent<T> {
            name: string;
            data: T;
        }

        export function instance(): IMediator {
            if (Mediator.instance == null) {
                Mediator.instance = new Mediator();
            }
            return Mediator.instance;
        }
    }
}