//Playing with currying function
//too much higher order according to my opinion lol
const curry = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(curry(1)(1)(1));  //how we need to call it 

const level = curry(1);
console.log(level(1)(1));