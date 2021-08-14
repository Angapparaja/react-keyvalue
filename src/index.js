import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
function Listkey(props){
  const key =props.keys;
  const item =props.items;
  return (<li>{key}-{item}</li>);
}
function Mylist(props){
  const content=props.data.map((listvalue,index)=>
  <Listkey keys ={index} items={listvalue}/>
  );
  return (
    <div>
      <h1>raja</h1>
      <ul>{content}</ul>
    </div>
  );

}

const myValue=[200,400,100,500];
ReactDOM.render(<Mylist data={myValue} />, document.getElementById("root"));
