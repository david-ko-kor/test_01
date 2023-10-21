import { useState } from "react";
import List from "./Component/List";
import Hander from "./Component/Hander";
function App() {
  const [On,Seton]=useState(false)
  const Showhandler =()=>{
    Seton(true)
  }
  const Hidehandler =()=>{
    Seton(false)
  }
  const ClickHandler =()=>{
    Seton(!On)
  }
  return (
    <>
    <Hander modal={ClickHandler}/>
    {On && <List modal={ClickHandler}/>}
    </>
  );
}

export default App;
