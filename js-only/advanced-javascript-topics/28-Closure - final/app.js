(function() {
    var cnt = 0,
        item1 = document.querySelector('#item1'),
        item2 = document.querySelector('#item2');

    var print = function() {
        console.log(cnt);
    };

    item1.addEventListener('click', function() {
        cnt++;
        print();
    });

    item2.addEventListener('click', function() {
        cnt++;
        print();
    });
})();

//counter();


/*var funct1 = function() {
    var a = 2,
        b = 3;

    var funct2 = function() {
        console.log(a + b);
    };

    setTimeout(funct2, 3000);
};

funct1();*/
