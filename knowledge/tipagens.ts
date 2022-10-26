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

interface IMinhaFuncParams<T> {
  param1: T;
}

function minhaFunc<T>(params: IMinhaFuncParams<T>) {
  console.log("tipo de param1: ", typeof params.param1);
}

minhaFunc<"algo">({ param1: "algo" });
