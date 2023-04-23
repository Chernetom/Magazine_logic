import React from "react";
import s from './Home.module.css'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {toggleAdmin} from "../../redux/productReducer";

const Home:React.FC = () => {
    const dispatch = useDispatch();

    return (
        <div className={s.wrapper}>
            <h1 className={s.header}>Мы компания по продаже продуктов</h1>
            <p className={s.paragraph}>Иногда что-то продаём</p>
            <div className={s.links}>
                <Link to={"/catalog"} className={s.link} onClick={() => dispatch(toggleAdmin(false))}>Каталог продуктов</Link>
                <Link to={"/catalog"} className={s.link} onClick={() => dispatch(toggleAdmin(true))}>Каталог продуктов с админ панелью</Link>
            </div>
        </div>
    )
}

export default Home;