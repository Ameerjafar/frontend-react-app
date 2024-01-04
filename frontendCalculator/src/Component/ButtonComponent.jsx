import { useState } from "react";

export function ButtonComponent({getInput, setInput}) {
  const [identify, setIdentify] = useState("");
  const [firstOne, setfirstOne] = useState("");
  return (
    <>
      <button onClick = {() => {

        setInput(getInput + 9);
      }}>9</button>
       <button onClick = {() => {
        setInput(getInput + 8);
      }}>8</button>
      <button onClick = {() => {
        setInput(getInput + 7);
      }}>7</button>
      <button onClick = {() => {
        setfirstOne(getInput);
        setInput("");
        setIdentify("+");
      }}>+</button>
      <br/>
      <button onClick = {() => {
        setInput(getInput + 6);
      }}>6</button>
        <button onClick = {() => {
        setInput(getInput + 5);
      }}>5</button>
        <button onClick = {() => {
        setInput(getInput + 4);
      }}>4</button>
        <button onClick = {() => {
       setfirstOne(getInput);
       setInput("");
       setIdentify("-");
      }}>-</button>
      <br />
      <button onClick = {() => {
        setInput(getInput + 3);
      }}>3</button>
        <button onClick = {() => {
        setInput(getInput + 2);
      }}>2</button>
      <button onClick = {() => {
        setInput(getInput + 1);
      }}>1</button>
      <button onClick = {() => {
       setfirstOne(getInput);
       setInput("");
       setIdentify("*");
      }}>*</button>
      <br />
      <button onClick = {() => {
        let secondOne = getInput;

        if(identify === '+') {
          let finalValue = +firstOne + +secondOne;
          console.log(finalValue);
          setInput(finalValue);
        }
        else if(identify === '-') {
          let finalValue = +firstOne - +secondOne;
          setInput(finalValue);
        }
        else if(identify === '*') {
          let finalValue = +firstOne * +secondOne;
          setInput(finalValue);
        }
      }}>=</button>
      <button onClick={() => {
        setInput("");
        setfirstOne("");
        setIdentify("");
      }}>AC</button>
    </>
  );
}
