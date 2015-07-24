    window.addEventListener('load', function () {
        var selectVal = document.querySelector('.value');
        var newTable = document.querySelector('.draw');
        var draw = document.querySelector('.draw2');
        var getAtribut;
        var vals = [
            {"true": true} ,
            {"false": false },
            {"1": 1 },
            {"0": 0 },
            {"-1": -1 },
            {'"false"': "false" },
            {'"true"': "true" },
            {'"1"': '1' },
            {'"0"': "0" },
            {'"-1"': "-1" },
            {'""': "" },
            {"[[]]": [[]] },
            {"[]": [] },
            {"null": null },
            {"[0]": [0] },
            {"[1]": [1] },
            {"-Infinity": -Infinity },
            {"Infinity": Infinity },
            {"{}": {} },
            {"undefined": undefined },
            {"NaN": NaN}
        ];
        function createEl(el){
            document.createElement(el);
        }
        function createDiv() {
            document.createElement('div');
        }
        function addCellClass(div) {
            div.classList.add('cell');
        }
        function drawField(){
            console.log(vals.length);
            var i;
            var j;
            for(i = 0; i < vals.length; i++) {
               for(j = 0; j < vals.length; j++){   
                   console.log(i);                
               }
            }
        }
        selectVal.addEventListener('click', function (e) {        
            getAtribut = e.target.getAttribute('data-value');
            console.log(getAtribut);
            console.log('click');
            selectVal.style.display = 'none';
            newTable.style.display = 'block';
            drawField();
        });
        newTable.addEventListener('click', function(){
            newTable.style.display = 'none';
            selectVal.style.display = 'block';
            draw.innerHTMl = '';
        });
    });