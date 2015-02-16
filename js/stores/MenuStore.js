/**
 * Created by nickaspinall on 13/02/15.
 */
var React = require('react'),
    Fluxxor = require('fluxxor'),
    objectAssign = require('object-assign'),
    Constants = require('../Constants/MenuConstants'),
    Recipes = require('../data/Recipes');

var MenuStore = Fluxxor.createStore({
  initialize:function(){
    this.menus = Recipes.data;
    this.menuSample = Recipes._clone;

    // Fetch menus collection from persistent store

    this.bindActions(
      Constants.CREATE_MENU, this.onCreateMenu,
      Constants.DESTROY_MENU, this.onUpdateMenu,
      Constants.UPDATE_MENU, this.onDestroyMenu
    );
  },

  onCreateMenu:function(payload){
    var newMenu = objectAssign({}, this.menuSample, payload);

    this.menus.push(newMenu);
    this.emit('change');
  },

  onUpdateMenu:function(payload){
    // @todo: decide how menu ids are set & retrieved
    var menuId = payload.menu.id;

    this.menus[menuId] = objectAssign({}, this.menus[menuId], payload.menu);
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
