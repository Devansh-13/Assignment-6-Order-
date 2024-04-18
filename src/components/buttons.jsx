import { useState } from "react";

const Buttons=({category,setCategory,handleCategory})=>{

    // const [category,setCategory]=useState("Overview"); 

    // const handleCategory=(val)=>{
    //     setCategory(val)
    // }

    return (
        <div className="body-btns">
        <button id={category==="Overview"?"selected":""} onClick={()=>handleCategory("Overview")}>Overview</button>
        <button id={category==="Other"?"selected":""} onClick={()=>handleCategory("Other")}>Other</button>
        </div>
    )
}

export default Buttons;