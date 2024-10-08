str = 'Innovation distinguishes between a leader and a follower.';

const trim = str => str.replace(/^\s*|\s*$/g, '');

const noPunct = str => str.replace(/[?.,!]/g,'');

const capitalize = str => str.toUpperCase();

const breakout = str => str.split(" ");

const noArticles = str => (str !== "A" && str !== "AN" && str !== "THE");

const filterArticles = arr => arr.filter(noArticles);

//console.log(filterArticles(breakout(capitalize(noPunct(trim(str))))));

const pipe = function(...fns) {
    return function(x) {
        return fns.reduce(function(v, f) {
            return f(v);
        }, x);
    }
};

const prepareString = pipe(
    trim,
    noPunct,
    capitalize,
    breakout,
    filterArticles);

/*const prepareString = compose(
    filterArticles, 
    breakout, 
    capitalize, 
    noPunct, 
    trim);*/

console.log(prepareString(str));



