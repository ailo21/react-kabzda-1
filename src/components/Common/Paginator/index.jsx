import React from "react";
import s from "../Paginator/paginator.module.css";

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount && i < 21; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map(p => (
                <span className={s.pager + ' ' + (props.currentPage === p ? s.pager_selected : '')}
                      onClick={() => {
                          props.onPageChanged(p)
                      }}
                >{p}</span>
            )
        )}
    </div>
}
export default Paginator;