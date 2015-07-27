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
    '""': ''
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
    document.createElement(el);
  }

  function addCellClass(div) {
    div.classList.add('cell');
  }

  function drawField() {
    var i;
    var j;
    for (i = 0; i < vals.length; i++) {
      for (j = 0; j < vals.length; j++) {
        createEl('div');
        addCellClass('div');
      }
    }
  }
  function swithCase(param){
  switch(param){
    case param:
    lal;
    break;
  }
  }
  
  selectVal.addEventListener('click', function selVal(e) {
    var getAtribut = e.target.getAttribute('data-value');
    selectVal.style.display = 'none';
    newTable.style.display = 'block';
    drawField();
  });
  newTable.addEventListener('click', function newTab() {
    newTable.style.display = 'none';
    selectVal.style.display = 'block';
    draw.innerHTMl = '';
  });
});
