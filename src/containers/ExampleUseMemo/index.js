import { Paragraph, Title } from "@sicredi/react";
import { useEffect, useMemo, useState } from "react";
import ComponentMemoizado from "./ComponentMemoizado";

const ExampleUseMemo = () => {
  const [name, setName] = useState("Pedro");
  const [surname, setSurname] = useState("Alcantara");

  const fullName = useMemo(() => `${name} ${surname}`, [name, surname]);

  useEffect(() => {
    setTimeout(() => {
      setName("Novo");
      setSurname("Nome");
    }, 2000);
  }, []);

  return (
    <>
      <Title as="h1">Dados do usuário</Title>
      <Paragraph>Nome completo: {fullName}</Paragraph>
      <ComponentMemoizado />
    </>
  );
};

export default ExampleUseMemo;
