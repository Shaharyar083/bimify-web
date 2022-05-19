import React from "react";

class Dog {
  walk() {
    alert("Walking");
  }
}

const Practice = () => {
  const animal = new Dog();
  return (
    <>
      <button onClick={() => animal.walk()}>Walk</button>
    </>
  );
};

export default Practice;

// import React, { useState, useEffect, useMemo } from "react";
// import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// const useCustomHook = (initial) => {
//   const [state, setState] = useState(initial);

//   const handleState = (value) => {
//     setState(value);
//   };

//   useEffect(() => {
//     setState(initial);
//   }, [initial]);

//   return [state, handleState];
// };

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }
//   return num;
// };

// const Practice = () => {
//   let [value, setValue] = useCustomHook(0);
//   const [expense, setexpense] = useState();

//   const calculation = useMemo(() => expensiveCalculation(value), []);

//   useEffect(() => {
//     setexpense(expensiveCalculation(value));
//   }, [value]);

//   useEffect(() => {
//     console.log("value", value);
//   }, [value]);

//   return (
//     <>
//       <Button
//         onClick={() => {
//           setValue(value + 1);
//         }}
//       >
//         Value 15
//       </Button>
//       <div>
//         {value}
//         <br />
//         {calculation}
//         <br />
//         {expense}
//         <Link to="/">HOme page</Link>
//       </div>
//     </>
//   );
// };

// export default Practice;
