window.addEventListener('load', function () {
    var selectVal = document.querySelector('.value');
    var getAtribut;
    var vals = {
        "true": true,
        "false": false,
        "1": 1,
        "0": 0,
        "-1": -1,
        '"false"': "false",
        '"true"': "true",
        '"1"': '1',
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
    function createDiv() {
        document.createElement('div');
    }
    function addCellClass(div) {
        div.classList.add('cell');
    }
    function drawField(){
        var i;
        var j;
        var body = document.querySelector('body');
        for(i = 0; i < vals.length, i++) {
            
        }
    };
    selectVal.addEventListener('click', function (e) {
        e.preventDefault();
        getAtribut = e.target.getAttribute('data-value');
        console.log(getAtribut);
        console.log('click');

    });

});