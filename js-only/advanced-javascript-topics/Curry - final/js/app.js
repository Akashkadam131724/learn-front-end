
const curryGreeting = function(greeting) {
    return function(name) {
        console.log(greeting + " " + name);
    };
};

const welcomeGreet = curryGreeting("Welcome");

welcomeGreet("Steve");
welcomeGreet("Mary");