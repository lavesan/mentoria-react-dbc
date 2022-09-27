import React, { useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";

export default function QueryParam() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [meuArray, setMeuArray] = useState([1, 2, 3]);

  useEffect(() => {
    setTimeout(() => {
      setMeuArray([1, 2, 4]);
    }, 1000);
  }, [setMeuArray]);

  return (
    <div>
      <h1>Página de queries</h1>
      <p>Query string {searchParams.get("text")}</p>
      <p>Path variable: {id}</p>
      {meuArray.map((elem) => (
        <React.Fragment key={elem}>
          <h2>Valor:</h2>
          <p>{elem}</p>
        </React.Fragment>
      ))}
    </div>
  );
}
