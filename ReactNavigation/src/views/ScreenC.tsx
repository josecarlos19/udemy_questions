import React from "react";

import CentralText from "../components/CentralText";

const ScreenC = props => {
  const route = props.route && props.route.params && props.route.params || { params: { number: 0 } }
  return (
    <CentralText backGroundColor="#9932cd">
      Screen C - {route.params.number}
    </CentralText>
  )
};

export default ScreenC;
