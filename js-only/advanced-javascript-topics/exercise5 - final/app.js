
var mainApplication = mainApplication || {};

(function(ns) {
    var content,
        listeners = [],
        listenersEnabled = false,
        printIt = true, 
        lastevent;

    ns.executeWait = function(funct, wait) {
        var timeout,
            callNow = true;

        return function() {
            var thisVal = this,
                args = arguments;

            var later = function() {
                callNow = true;
            };
            if (callNow) {
                callNow = false;
                funct.apply(thisVal, args);
                timeout = setTimeout(later, wait);
            }
        };
    };

    //Write info to the div. Includes event object information
    var loadInfo = function(message, eventObj) {
        content.insertAdjacentHTML("afterbegin", message + " -- event type: " + eventObj.type + " -- target object: " + eventObj.target.nodeName + "<br>");
    };

    //Adds listeners to the document.
    ns.addListeners = function() {
        var keyDownHandler = function(e) {
            loadInfo("A key was pressed: " + e.keyCode + " -- " + e.key, e);
            if (e.keyCode === 83 && e.ctrlKey) {
                toggleEventListeners();
            }
        };
        document.addEventListener("keydown", keyDownHandler);
        listeners.push(keyDownHandler, "keydown");


        var clickHandler = function(e) {
            loadInfo("Mouse button was clicked: ", e);
        };
        document.addEventListener("click", clickHandler);
        listeners.push(clickHandler, "click");

        var mouseMoveHandler = ns.executeWait(function(e) {
            loadInfo("Mouse move recorded at coordinates: " + e.pageX + ", " + e.pageY, e);
        }, 500);
       
        document.addEventListener("mousemove", mouseMoveHandler);
        listeners.push(mouseMoveHandler, "mousemove");

        //Use this structure to add your own events for testing.
        /*var [variableName] = function(e) {
            loadInfo("Mouse button was clicked: ", e);
        };
        document.addEventListener("[event]", [variableName]);
        listeners.push([variableName], "event");*/

        //Once listeners are added, sets this to true for toggle function
        listenersEnabled = true;
        console.log(mouseMoveHandler);
    };

    //Removes listeners from document so user can examine data
    ns.removeEventListeners = function() {
        while (listeners.length > 0) {
            document.removeEventListener(listeners.pop(), listeners.pop());
        }
    };

    //Called to initialize. Determines whether to add or remove listeners based on current state.
    ns.toggleEventListeners = function() {
        if (listenersEnabled) {
            ns.removeEventListeners();
            console.log("Event listeners removed");
        } else {
            ns.addListeners();
            console.log("Listeners Added");
        }
    }; 

    window.addEventListener("load", function(eObj) {
        content  = document.querySelector("#content");

        //Logs information for document load event.
        loadInfo("Document was loaded: ", eObj);

        //Sets up listeners
        ns.toggleEventListeners();
    });
})(mainApplication);









