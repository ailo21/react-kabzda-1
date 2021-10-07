import React, {useEffect, useState} from "react";
import s from "../Paginator/paginator.module.css";

let Paginator = ({totalItemCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let [portion, setPortion] = useState(0);
    let pagesCount = Math.ceil(totalItemCount / pageSize);

    let leftNumber = portion * portionSize + 1;
    let rightNumber = leftNumber + portionSize-1;

    let goToLeftPortionDisabled=portion<1;
    let goToRightPortionDisabled=portion>=(pagesCount-1);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    useEffect(()=>{
        onPageChanged(leftNumber);
    },[leftNumber, onPageChanged, portionSize]);

    return <div>
        <button disabled={goToLeftPortionDisabled} onClick={() => {
            setPortion(portion - 1);
        }}>{'<'}сюда
        </button>
        {pages.filter(p => (p >= leftNumber && p <= rightNumber)).map(p => (
                <span key={`pagin-${p}`} className={s.pager + ' ' + (currentPage === p ? s.pager_selected : '')}
                      onClick={() => {
                          onPageChanged(p)
                      }}
                >{p}</span>
            )
        )}
        <button disabled={goToRightPortionDisabled} onClick={() => {
            setPortion(portion + 1);
        }}>туда{'>'}</button>
    </div>
}
export default Paginator;