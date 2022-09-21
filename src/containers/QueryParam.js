import React from "react";
import { useSearchParams, useParams } from "react-router-dom";

const meuArray = [1, 2, 3];

export default function QueryParam() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  return (
    <div>
      <h1>Página de queries</h1>
      <p>Query string {searchParams.get("text")}</p>
      <p>Path variable: {id}</p>
      {meuArray.map((elem) => (
        <React.Fragment>
          <h2>Valor:</h2>
          <p>{elem}</p>
        </React.Fragment>
      ))}
    </div>
  );
}
