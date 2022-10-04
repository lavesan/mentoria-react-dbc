import React from "react";

const ComponentMemoizado = () => {
  return <h1>Meu componente memoizado</h1>;
};

export default React.memo(ComponentMemoizado);
