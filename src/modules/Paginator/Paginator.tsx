import React from "react";
import s from "./Paginator.module.css"

type PaginatorProps = {
    totalCount: number;
    currentPage: number,
    setCurrentPage: (page:number) => void,
    portionSize: number
}

const Paginator:React.FC<PaginatorProps> = ({totalCount, currentPage, setCurrentPage, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalCount / portionSize);
    let pageCountArray = [];
    for(let i = 0; i < pagesCount; i++) {
        pageCountArray.push(i + 1);
    }

    return (
        <div className={s.paginator}>
            <button disabled={currentPage === 1} className={s.button} onClick={() => currentPage > 1 ? setCurrentPage(currentPage - 1) : ''} >Назад</button>
            {pageCountArray.map((page, index) => <div className={page === currentPage ? s.active : s.item} onClick={() => setCurrentPage(page)} key={index}>{page}</div>)}
            <button disabled={currentPage === pageCountArray.length} className={s.button} onClick={() => currentPage < pageCountArray.length ? setCurrentPage(currentPage + 1) : ''}>Вперёд</button>
        </div>
    );
}

export default Paginator;