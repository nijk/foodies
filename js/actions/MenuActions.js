/**
 * Created by nickaspinall on 13/02/15.
 */

var Constants = require('../constants/MenuConstants');


var Actions = {
  createMenu:function(menu){
    this.dispatch(Constants.CREATE_MENU, menu);
  },
  updateMenu:function(menu){
    this.dispatch(Constants.UPDATE_MENU, menu)
  },
  destroyMenu:function(){
    this.dispatch(Constants.DESTROY_MENU, id);
  }
}

module.exports = Actions;
