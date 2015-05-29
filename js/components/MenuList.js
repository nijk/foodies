/**
 * Created by nickaspinall on 13/02/15.
 */
var React = require('react'),
    Fluxxor = require('fluxxor'),
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;


var MenuList = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin('menu')],

  getInitialState:function(){

    // todo: Should state represent an boilerplate menu object from the store?
    return {};
  },

  getStateFromFlux:function(){
    var flux = this.getFlux(),
        store = flux.store('menu');

    return store.getState();
  },

  render:function(){
    return (
      <div>
        <ul>
        {this.getStateFromFlux().menus.map(function(menu, i, menus){

          //console.log(menu, i, menus);

          return <li key={i}>{menu.title} <span className="summary">{menu.summary}</span></li>
        })}
        </ul>
        <form onSubmit={this.onSubmitForm}>
          <input type="text" size="30" placeholder="New Recipe"
          value={this.state.newMenuItem}
          onChange={this.handleMenuItemTextChange} />
          <input type="submit" value="Add Menu item" />
        </form>
      </div>
    );
  },

  handleMenuItemTextChange:function(e){
    this.setState({newMenuItem: e.target.value});
  },

  onSubmitForm:function(e){
    e.preventDefault();

    this.state.newMenuItem = this.state.newMenuItem || '';

    if(this.state.newMenuItem.trim()) {
      this.getFlux().actions.menu.createMenu({title: this.state.newMenuItem});
      this.setState({newMenuItem: ''});
    }
  }


});

module.exports = MenuList;
