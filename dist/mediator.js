define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Mediator = (function () {
        function Mediator() {
            this.events = {};
        }
        Mediator.prototype.publish = function (event) {
            if (!this.events[event.name]) {
                return this;
            }
            for (var i = 0, l = this.events[event.name].length; i < l; i++) {
                var subscription = this.events[event.name][i];
                subscription.callback(event.data);
            }
            return this;
        };
        ;
        Mediator.prototype.subscribe = function (eventName, callback) {
            if (!this.events[eventName]) {
                this.events[eventName] = [];
            }
            this.events[eventName].push({ callback: callback });
            return this;
        };
        ;
        Mediator.instance = function () {
            if (this.classInstance == null) {
                this.classInstance = new Mediator();
            }
            return this.classInstance;
        };
        return Mediator;
    }());
    Mediator.classInstance = null;
    exports.Mediator = Mediator;
});
//# sourceMappingURL=mediator.js.map