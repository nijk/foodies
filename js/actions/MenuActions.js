/**
 * Created by nickaspinall on 13/02/15.
 */

var constants = require('../constants/MenuConstants');


var Actions = {
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

module.exports = Actions;
