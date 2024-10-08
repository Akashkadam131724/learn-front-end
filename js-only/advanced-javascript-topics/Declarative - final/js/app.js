
return fns.reduce(function(v, f) {
    return f(v);
}, x);

let result;
for (let i = 0; i < fns.length; i++) {
    if (i === 0) {
        result = fns[i](x);
    }
    result = fns[i](result);
}
return result;