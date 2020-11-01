import React from "react";
import FreindItem from "../FreindItem/FreindItem";

const FreindList=(props)=>{

    let freindList=props.state.map((freind)=><FreindItem key={freind.id} state={freind}/>)
    return(
        <div>
            <h5>Freinds</h5>
            {freindList}
        </div>
    )
}

export default FreindList;