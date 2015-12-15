var UI = require('ui');
var ajax = require('ajax');

// Connect to web server and send POST data (state=ON | state=OFF) 
function request(state) {
ajax(
  {
    url: 'http://192.168.2.73:5000',
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

// Make a list of menu items (ON/OFF)
var states = [
  {
    title: "ON",
    //icon: "images/on.bmp"
  },
  {
    title: "OFF",
    //icon: "images/off.bmp"
  }
];

// Create the Menu
var menu = new UI.Menu({
  backgroundColor: 'black',
  textColor: 'orange',
  highlightBackgroundColor: 'rajah',
  highlightTextColor: 'black',
  sections: [{
    title: 'LED State',
    items: states
  }]
});


// Send command when menu item is selected
menu.on('select', function(e) {
  request(e.item.title);
});
      
menu.show();
