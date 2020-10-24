import React from "react";
import Nick from "./modules/Nick";
import Fondo from "../../components/Fondo";

export default function Welcome() {
  return (
    <Fondo tipo="welcome">
      <Nick/>
    </Fondo>
  );
}
