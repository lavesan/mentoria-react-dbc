import { Paragraph, Title } from "@sicredi/react";
import { useMemo, useState } from "react";

const ExampleUseMemo = () => {
  const [name, setName] = useState("Pedro");
  const [surname, setSurname] = useState("Alcantara");

  const fullName = useMemo(() => `${name} ${surname}`, [name, surname]);

  return (
    <>
      <Title as="h1">Dados do usuário</Title>
      <Paragraph>Nome completo: {fullName}</Paragraph>
    </>
  );
};

export default ExampleUseMemo;
