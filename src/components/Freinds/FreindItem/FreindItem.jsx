import React from "react";
import s from './FreindItem.module.css';

const FreindItem=(props)=>{
    return(
        <div className={s.freind} >
            <a href={"/freind/"+props.state.id} title={props.state.name}>
                <img src={props.state.avatar} alt={props.state.name}/>
            </a>
        </div>
    )
}
export default FreindItem;