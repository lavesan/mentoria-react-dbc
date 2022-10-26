import { Link } from "react-router-dom";

export function Header() {
  return (
    <header
      style={{
        display: "flex",
        flexFlow: "column wrap",
      }}
    >
      <a href="https://google.com" target="_blank" rel="noreferrer">
        Google external link
      </a>
      <Link to="/">Home</Link>
      <Link to="/navigate-example">Navigate</Link>
      <Link to="/query/123?text=TextoTeste">Query Param</Link>
      <Link to="/store-example">Store</Link>
      <Link to="/map-example">Map Example</Link>
      <Link to="/example-use-memo">Use Memo Example</Link>
      <Link to="/styling-scss-page">Scss page</Link>
      <Link to="/typescript-page">Typescript example</Link>
    </header>
  );
}
