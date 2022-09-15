import { Link } from "react-router-dom";

export function Header() {
  return (
    <header
      style={{
        display: "flex",
        flexFlow: "column wrap",
        color: "white",
        background: "black",
      }}
    >
      <a href="https://google.com" target="_blank" rel="noopener noreferer">
        Google
      </a>
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/query/123?text=TextoTeste">Query Param</Link>
    </header>
  );
}
