define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var EventStorage = (function () {
        function EventStorage() {
            this.events = {};
        }
        EventStorage.prototype.get = function (eventName) {
            if (!this.events[eventName]) {
                return [];
            }
            return this.events[eventName];
        };
        EventStorage.prototype.add = function (eventName, callback) {
            if (!this.events[eventName]) {
                this.events[eventName] = [];
            }
            this.events[eventName].push(callback);
        };
        EventStorage.instance = function () {
            if (EventStorage.classInstance == null) {
                EventStorage.classInstance = new EventStorage();
            }
            return EventStorage.classInstance;
        };
        return EventStorage;
    }());
    var Mediator = (function () {
        function Mediator() {
        }
        Mediator.prototype.publish = function (event) {
            var subscriptions = EventStorage.instance().get(event.name);
            for (var i = 0, l = subscriptions.length; i < l; i++) {
                var subscription = subscriptions[i];
                subscription(event.data);
            }
            return this;
        };
        ;
        Mediator.prototype.subscribe = function (eventName, callback) {
            EventStorage.instance().add(eventName, callback);
            return this;
        };
        ;
        return Mediator;
    }());
    exports.Mediator = Mediator;
});
//# sourceMappingURL=mediator.js.map