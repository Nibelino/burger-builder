import React, { Component } from "react";

import Aux from "../../hoc/this-should-be-called-aux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 2,
      cheese: 2,
      bacon: 1
    }
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Builder Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
