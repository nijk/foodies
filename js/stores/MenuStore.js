/**
 * Created by nickaspinall on 13/02/15.
 */
var React = require('react'),
    Fluxxor = require('fluxxor'),
    objectAssign = require('object-assign'),
    constants = require('../constants/MenuConstants');


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


var MenuStore = Fluxxor.createStore({

  initialize:function(){
    this.menus = [];

    // Fetch menus collection from persistent store

    this.bindActions(
      constants.CREATE_MENU, this.onCreateMenu,
      constants.DESTROY_MENU, this.onUpdateMenu,
      constants.UPDATE_MENU, this.onDestroyMenu
    );
  },

  onCreateMenu:function(payload){
    var newMenu = objectAssign({}, menu, payload.menu);
    this.menus.push(newMenu);
    this.emit('change');
  },

  onUpdateMenu:function(payload){
    var menuId = payload.menu.id,// @todo: decide how menu ids are set & retrieved
        updatedMenu = objectAssign({}, this.menus[menuId], payload.menu);

    this.menus[menuId] = updatedMenu;
    this.emit('change');
  },

  onDestroyMenu:function(payload){
    // Remove the menu from the collection
      // Identify from payload value
  },

  getState:function(){
    return {
      menus: this.menus
    }
  }


});

module.exports = MenuStore;
