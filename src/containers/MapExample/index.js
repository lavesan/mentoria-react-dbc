import React, { useEffect, useState } from "react";

const MapExample = () => {
  const [meuArray, setMeuArray] = useState([1, 2, 3]);

  useEffect(() => {
    setTimeout(() => {
      setMeuArray([1, 2, 4]);
    }, 1000);
  }, [setMeuArray]);

  return (
    <>
      {meuArray.map((elem) => (
        <React.Fragment key={elem}>
          <h2>Valor:</h2>
          <p>{elem}</p>
        </React.Fragment>
      ))}
    </>
  );
};

export default MapExample;
