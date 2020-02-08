import React, { Component } from "react";

import Aux from "../../hoc/doveva-chiamarsi-aux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Builder Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;