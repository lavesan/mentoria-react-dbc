import { FormComponent } from "../components/Form";
import { parseCookies, setCookie, destroyCookie } from "nookies";

export default function Home() {
  // Local storage
  // Persiste até ser removido
  localStorage.setItem(
    "minha-chave-no-local-storage",
    JSON.stringify({ atributo: true, algo: new Date() })
  );

  const meuValueLocalStorage = localStorage.getItem(
    "minha-chave-no-local-storage"
  );

  console.log("meuValueLocalStorage: ", JSON.parse(meuValueLocalStorage));

  localStorage.removeItem("minha-chave-no-local-storage");

  // Session storage
  // Persiste até a aba/navegador ser fechado
  sessionStorage.setItem("minha-chave-session-storage", true);
  const meuValueSessionStorage = sessionStorage.getItem(
    "minha-chave-session-storage"
  );

  console.log("meuValueSessionStorage: ", meuValueSessionStorage);

  // Cookies
  // Persiste por uma quantidade de tempo configurada
  setCookie(null, "nome-do-cookie", "valor do cookie", {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });

  const cookies = parseCookies();

  console.log("cookies: ", cookies["nome-do-cookie"]);

  destroyCookie(null, "nome-do-cookie");

  return (
    <div>
      <h1>Home</h1>
      <FormComponent />
    </div>
  );
}
