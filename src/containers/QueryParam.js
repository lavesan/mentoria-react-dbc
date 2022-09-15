import { useSearchParams, useParams } from "react-router-dom";

export default function QueryParam() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  return (
    <div>
      <h1>Página de queries</h1>
      <p>Query string {searchParams.get("text")}</p>
      <p>Path variable: {id}</p>
    </div>
  );
}
