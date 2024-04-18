import Buttons from "./buttons"
import { useState } from "react";
import Packages from "./packages";

const Body=()=>{

    const [category,setCategory]=useState("Overview"); 

    const handleCategory=(val)=>{
        setCategory(val);
    }

    return (
        <div className="body">

            <Buttons category={category} setCategory={setCategory} handleCategory={handleCategory}/>

            { category==="Overview"?
            <div className="main-container">
                <Packages/>
            </div>
            :
            <h3>Hello World</h3>
            }

        </div>
       
    )
}

export default Body;