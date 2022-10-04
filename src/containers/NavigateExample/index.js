import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NavigateExample() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Vai redirecionar</h1>
    </div>
  );
}
