const myArr = [1, 2, 3, 4, 5];

// Disconstruct de array
// const elem1 = myArr[0];
const [elem1, elem2, elem3, ...restante] = myArr;

// Spread operator no array
const myArr2 = [9, 10, ...restante];

const myObj = {
  var1: "algo",
  var2: true,
};

// Disconstruct de objeto
// const var1 = myObj.var1;
const { var2, ...restoDoObjeto } = myObj;

// Spread operator no objeto
const myObj2 = {
  var3: 123,
  // var1: restoDoObjeto.var1,
  ...restoDoObjeto,
};
