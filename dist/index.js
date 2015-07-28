window.addEventListener('load', function funcq() {
  'use strict';
  var selectVal = document.querySelector('.value');
  var newTable = document.querySelector('.newTable');
  var tableBlock = document.querySelector('.draw');
  var draw = document.querySelector('.draw2');
  var vals = [{
    'true': true
  }, {
    'false': false
  }, {
    '1': 1
  }, {
    '0': 0
  }, {
    '-1': -1
  }, {
    '"false"': 'false'
  }, {
    '"true"': 'true'
  }, {
    '"1"': '1'
  }, {
    '"0"': '0'
  }, {
    '"-1"': '-1'
  }, {
    '""': '""'
  }, {
    '"[[]]"': [
      []
    ]
  }, {
    '[]': []
  }, {
    'null': null
  }, {
    '"[0]"': [0]
  }, {
    '"[1]"': [1]
  }, {
    '"-Infinity"': -Infinity
  }, {
    '"Infinity"': Infinity
  }, {
    '"{}"': {}
  }, {
    '"undefined"': undefined
  }, {
    '"NaN"': NaN
  }];

  function createEl(el) {
    return document.createElement(el);
  }

  function addCellClass(div) {
    return div.classList.add('cell');
  }

  function swithCase(param) {
    var k;
    vals.map(function(item) {
      Object.getOwnPropertyNames(item).forEach(function(val) {
        // console.log(item[val]);
        // console.log(item[val],param,item[val]);
        k = eval(item[val] +' ' +param + ' ' + item[val]); 
        console.log(k); 
        return k; 
      });
    });
  }

  function drawField() {
    var i;
    var j;
    var createTable = createEl('table');
    var createTr;
    var createTd;
    var createHeadtab;
    for (i = 0; i < vals.length; i++) {
      draw.appendChild(createTable);
      createTr = createEl('tr');
      for (j = 0; j < vals.length; j++) {
        createTd = createEl('td');
        createTable.appendChild(createTr);
        createTr.appendChild(createTd);
      }
    }
  }


  selectVal.addEventListener('click', function selVal(e) {
    var getAtribut = e.target.getAttribute('data-value');
    selectVal.style.display = 'none';
    tableBlock.style.display = 'block';
    swithCase(getAtribut);
    drawField();
  });
  newTable.addEventListener('click', function newTab() {
    tableBlock.style.display = 'none';
    selectVal.style.display = 'block';
    draw.innerHTML = '';
  });
});
