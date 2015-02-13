/**
 * Created by nickaspinall on 13/02/15.
 */
var React = require('react'),
  Fluxxor = require('fluxxor');


var saveMenu = function(){
  //Save the menu
    // Optimistic update pattern
    // XHR request to API
    // Handle Promise success/error
};

var getMenus = function(){
  // Is this required?
};

var menu = {
  title: '',
  summary: '',
  description: '',
  meta: {
    skillLevel: 1, // Int 1 - 5
    timePrep: null, // Time value is seconds, displayed in mins or hours
    timeCooking: null // Time value is seconds, displayed in mins or hours
  },
  // The ordered process of creation
  menuSteps: {
    // Preparation
    prep: [
      // {name: 'Prepare vegetables', {text: 'Wash all veg thoroughly. Top & tail carrots the slice length ways', video: {url: '//youtube.com/gdhg7564'}}}
    ],
    // Cooking
    cook: {

    }
    // Post cook ?
  }
};


var constants = {
  CREATE_MENU: 'CREATE_MENU',
  DESTROY_MENU: 'DESTROY_MENU',
  UPDATE_MENU: 'UPDATE_MENU'
};


var MenuStore = Fluxxor.createStore({

  initialize:function(){

    this.menus = [];

    // Fetch menus collection from persistent store

    this.bindActions(
      constants.CREATE_MENU,
      constants.DESTROY_MENU,
      constants.UPDATE_MENU
    );

    console.log(this.actions);
  },

  onCreateMenu:function(payload){
    var newMenu = Object.assign({}, menu, payload.menu);
    this.menus.push(newMenu);
    this.emit('change');
  },

  onUpdateMenu:function(payload){
    var menuId = payload.menu.id,// @todo: decide how menu ids are set & retrieved
      updatedMenu = Object.assign({}, menus[menuId], payload.menu);

    this.menus[menuId] = updatedMenu;
    this.emit('change');
  },

  onDestroyMenu:function(payload){
    // Remove the menu from the collection
      //Identify from payload value
  },

  getState:function(){
    return {
      menus: this.menus
    }
  }


});

var actions = {
  createMenu:function(menu){
    this.dispatch(constants.CREATE_MENU, menu);
  },
  updateMenu:function(menu){
    this.dispatch(constants.UPDATE_MENU, menu)
  },
  destroyMenu:function(){
    this.dispatch(constants.DESTROY_MENU, id);
  }
}

var stores = {
  menuStore: new MenuStore()
};

var flux = Fluxxor.Flux(stores, actions);

flux.on('dispatch', function(type, payload){
  if (console && console.log()){
    console.log("[Dispatch]", type, payload);
  }
});
