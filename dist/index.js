window.addEventListener('load', function funcq() {
  'use strict';
  var selectVal = document.querySelector('.value');
  var newTable = document.querySelector('.draw');
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

  function drawField() {
    var i;
    var j;
    var table;
    var tr;
    var td;
    var createTable = createEl('table');  
    var createTr = createEl('tr');
    var createTd = createEl('td');    
    var createP = createEl('p');
    var p;
    for (i = 0; i < vals.length; i++) {
      draw.appendChild(createTable);
      for (j = 0; j < vals.length; j++) {
      createTable.appendChild(createTr)
      createTr.appendChild(createTd);
      }
    }
  }
  function swithCase(param){
 vals.map(function(item){
   Object.getOwnPropertyNames(item).forEach(function(val){
     // console.log(item[val]);
     // console.log(item[val],param,item[val]);
   });  
 });
  }
  
  selectVal.addEventListener('click', function selVal(e) {
    var getAtribut = e.target.getAttribute('data-value');
    selectVal.style.display = 'none';
    newTable.style.display = 'block';
    swithCase(getAtribut);
    drawField();
  });
  newTable.addEventListener('click', function newTab() {
    newTable.style.display = 'none';
    selectVal.style.display = 'block';
    draw.innerHTML = '';
  });
});
