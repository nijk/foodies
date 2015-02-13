/**
 * Created by nickaspinall on 13/02/15.
 */

var React = require('react');
    Fluxxor = require('fluxxor'),
    MenuList = require('./components/MenuList'),
    MenuStore = require('./stores/MenuStore'),
    MenuActions = require('./actions/MenuActions');

var store = {
  menu: new MenuStore()
};

var actions = {
  menu: MenuActions
}

var flux = new Fluxxor.Flux(store, actions);

flux.on('dispatch', function(type, payload){
  if (console && console.log()){
    console.log("[Dispatch]", type, payload);
  }
});

window.flux = flux;

React.render(<MenuList flux={flux} />, document.getElementById("app"));
