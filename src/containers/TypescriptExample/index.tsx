type Type1 = {
  param1: string;
};

type Type2 = Type1 & {
  param2: string;
};

type Type3 = Type1 & {
  param3: string;
};

const type2: Type2 = {
  param1: "",
  param2: "",
};

type ParamObjectType = {
  numberTest?: number;
  stringTest: string;
};

interface ICommonInterface {
  isRequired: boolean;
}

interface ITypescriptExampleProps extends ICommonInterface {
  paramNumber: number;
  paramString: string;
  paramBoolean?: boolean; // Parâmetro opcional
  paramFixo: "default" | "high" | "low" | 1;
  param2Natives: string | number;
  paramNull: null;
  paramUndefined: undefined;
  paramObject: ParamObjectType;
}

// const paramObjectExample: ParamObjectType = {
//   stringTest: 'mock',
// }

// class ClassExample implements ITypescriptExampleProps {
//   private paramNumber: number;

//   constructor() {
//     this.paramNumber = 2;
//   }
// }

interface IGenericCompProps<Generic> {
  param: Generic;
}

function GenericComp<Generic>({ param }: IGenericCompProps<Generic>) {
  console.log("param: ", param);

  return <div>Componente genérico</div>;
}

export const TypescriptExample = () => {
  // if (paramFixo === 1) {
  // }

  // if (typeof param2Natives === "boolean") {
  // }

  return (
    <div>
      Typescript example
      <GenericComp<"meu param" | "outro param"> param="outro param" />
    </div>
  );
};
