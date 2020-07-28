import React from "react";
const Header = props => {
  return(
  <HeaderContext.Consumer>
  {
    value => (
      <h1>{value}</h1>
    )
  }
  </HeaderContext.Consumer>
  );
};
export default Header;
