define(function() {
    
    var subscribers = {};
    
    
    function subscribe(type, fn) {
        if (!subscribers[type]) {
            subscribers[type] = [];
        }
        if (subscribers[type].indexOf(fn) == -1) {
            subscribers[type].push(fn);
        }
    }
    function unsubscribe(type, fn) {
        var listeners = subscribers[type];
        if (!listeners) {
            return;
        }
        var index = listeners.indexOf(fn);
        if (index > -1) {
            listeners.splice(index,1);
        }
    }
    function publish(type, evtObj) {
        if (!subscribers[type]) {
            return;
    }
    
    if (!evtObj.type){
        evtObj.type = type;
    }
    var listeners = subscribers[type];
    for (var ii = 0, ll = listeners.length; ii < ll; ii++) {
        listeners[ii](evtObj);
    }
    
    
    return {
        subscribe: subscribe,
        unsubscribe: unsubscribe,
        publish: publish,
    };
    };





require(["eventmanager"], function(evtman) {
    function foo(evt) {
        consol.log(evt.mesage);
    }
    evtman.subscribe("test/foo", foo);
    evtman.subscribe("test/foo", {message: "hello this is a custom event"});
    evtman.subscribe("test/foo", foo);
    evtman.subscribe("test/foo", {message: "this should not be"});
});