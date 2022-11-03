import { Button, Badge, Input } from "@sicredi/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IForm {
  name: string;
  email: string;
}

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
});

export default function JestTestExample() {
  const { handleSubmit, register } = useForm<IForm>({
    mode: "all",
    resolver: yupResolver(validationSchema),
  });
  const [show, setShow] = useState(false);

  const onSubmit = handleSubmit(async (values) => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
    // resolve(null);
    // await new Promise((resolve, reject) => {
    // });
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <Input label="Nome" {...register("name")} />
        <Input label="Email" {...register("email")} />
        <Button type="submit">Submeter</Button>
      </form>
      {show && <Badge>Formulário submetido com sucesso</Badge>}
    </>
  );
}
