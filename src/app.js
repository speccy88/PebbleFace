var UI = require('ui');
var ajax = require('ajax');
//var Settings = require('settings');

// Connect to Edison and send POST data (state=ON | state=OFF) 
function request(state) {
ajax(
  {
    url: 'http://192.168.2.35:5000',
    method: 'post',
    data: {state:state}
  },
  function(data) {
    console.log(data);
  },
  function(error) {
    console.log('The ajax request failed: ' + error);
  }
);
}

function request2() {
ajax(
  {
    url: 'http://192.168.1.105/gpio.php?pic=0',
    method: 'get',
    data: {}
  },
  function(data) {
    console.log(data);
  },
  function(error) {
    console.log('The ajax request failed: ' + error);
  }
);  
}

// Make a list of menu items (ON/OFF)
var states = [
  {
    title: "ON",
    icon: "images/LEDon.png"
  },
  {
    title: "OFF",
    icon: "images/LEDoff.png"
  }
];

// Create the Menu
var menu = new UI.Menu({
  sections: [{
    title: 'LED State',
    items: states
  }]
});

// Send command when menu item is selected
menu.on('select', function(e) {
  request(e.item.title);
  request2();
});
      
menu.show();
