/**
 * Created by nickaspinall on 13/02/15.
 */
//React.render(<Application flux={flux} />, document.getElementById("app"));
var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Application = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin('MenuStore')],

  getInitialState:function(){
    // todo: Should state represent an boilerplate menu object from the store?
    return {};
  },

  getStateFromFlux:function(){
    var flux = this.getFlux();

    return flux.store('MenuStore').getState();
  },

  render:function(){
    return (
      <div>
        <ul>
        {this.state.menus.map(function(menu, i){
          return <li key={i}>{menu.name} <span class="summary">menu.summary</span></li>;
        })}
        </ul>
      </div>
    );
  }
});
