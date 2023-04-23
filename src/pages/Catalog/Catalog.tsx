import React from "react";
import Skeleton from "../../modules/ProductBlock/Skeleton";
import {useDispatch, useSelector} from "react-redux";
import ProductBlock from "../../modules/ProductBlock/ProductBlock";
import {useEffect, useState} from "react";
import s from "./Catalog.module.css"
import Paginator from "../../modules/Paginator/Paginator";
import AdminPanel from "../../modules/AdminPanel/AdminPanel";
import {selectCatalog} from "../../redux/selector/selector";
import {getData} from "../../redux/productReducer";

const Catalog:React.FC = () => {
    const dispatch = useDispatch();
    const {items, isFetching, isAdmin, isUpdate, limit} = useSelector(selectCatalog);
    const total_products = items.length;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * limit;
    const endIndex = Math.min(startIndex + limit, items.length);
    const currentData = items.slice(startIndex, endIndex);

    useEffect(() => {
        const getProducts = async () => {
            // @ts-ignore
            dispatch(getData());
        }
        getProducts();
    },[isUpdate, currentPage]);

    return (
        <div>
            <div className={s.wrapper__up}>
                <h2 >Все товары</h2>
                {isAdmin && <AdminPanel />}
            </div>
            <div className={s.content__items}>
                {isFetching ? currentData.map((p:any, index:number) => <ProductBlock key = {index} {...p}/>) :
                    [...new Array(4)].map((_, index) => <Skeleton key={index} />)
                }
            </div>

            <Paginator totalCount={total_products} currentPage={currentPage} setCurrentPage={setCurrentPage} portionSize={limit}/>
        </div>
    )
}

export default Catalog;