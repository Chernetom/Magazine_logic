import React from "react";
import s from './ProductBlock.module.css';
import {useDispatch} from "react-redux";
import {addItem} from "../../redux/cartReducer";

type ProductBlockProps = {
    title: string,
    price: number,
    media: string,
    description: string
}

const ProductBlock:React.FC<ProductBlockProps> = ({ title, price, media, description}) => {
    const dispatch = useDispatch();

    const onClickAdd = () => {
        dispatch(addItem(price));
    }

    return (
        <div className={s.wrapper}>
            <div className={s.product__block}>
                <img
                    className={s.image}
                    src={media}
                    alt="Product"
                />
                <h4 className={s.title}>{title}</h4>
                <p>{description}</p>
                <div className={s.bottom__block}>
                    <div className={s.price}>от {price} ₽</div>
                    <div onClick={onClickAdd} className={s.button}>
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductBlock;