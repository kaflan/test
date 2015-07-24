window.addEventListener('load', function () {
    var divs = document.querySelector('.value');
    var operator;
    var vals = {
        "true": true,
        "false": false,
        "1": 1,
        "0": 0,
         "-1": -1,
         '"false"': "false",
        '"true"': "true",
        '"1"':'1',
        '"0"': "0",
        '"-1"': "-1",
        '""': "",
        "[[]]": [[]],
        "[]": [],
        "null": null,
        "[0]": [0],
        "[1]": [1],
        "-Infinity": -Infinity,
        "Infinity": Infinity,
        "{}": {},
        "undefined": undefined,
        "NaN": NaN
    };
    divs.addEventListener('click', function (e) {
        e.preventDefault();
        operator = e.target.getAttribute('data-value');
        console.log(operator);
        console.log('click');

    });

});