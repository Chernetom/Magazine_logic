import React from "react";
import s from './AdminPanel.module.css'
import {useState} from "react";
import {addDataItem, deleteDataItem, updateDataItem} from "../../redux/productReducer";
import {useDispatch} from "react-redux";

type FormData = {
    title: string;
    description: string;
    price: any;
    quantity: any;
    media:  File | null;
}

type FormData2 = {
    id: string;
    title: string;
    description: string;
    price: any;
    quantity: any;
    media:  File | null;
}

const AdminPanel:React.FC = () => {
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState<FormData>({title: '', description: '', price: 0, quantity: 0, media: null});
    const [formData2, setFormData2] = useState<FormData2>({id: '',title: '', description: '', price: 0, quantity: 0, media: null});
    const [productId, setProductId] = useState('');

    const handleInputChange = (event:any, formName: string) => {
        if (formName === "form1") {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
            });
        } else if (formName === "form2") {
            setFormData2({
                ...formData2,
                [event.target.name]: event.target.value,
            });
        }
    };

    const handleFormSubmit = (event:any, formName: string) => {
        if (formName === "form1") {
            event.preventDefault();
            let {title, description, price, quantity, media} = formData;
            price = parseFloat(price);
            quantity = parseInt(quantity);
            //@ts-ignore
            dispatch(addDataItem({title, description, price, quantity, media}));
        } else if (formName === "form2") {
            event.preventDefault();
            let {id, title, description, price, quantity, media} = formData2;
            price = parseFloat(price);
            quantity = parseInt(quantity);
            //@ts-ignore
            dispatch(updateDataItem({ id, title, description, price, quantity, media}));
        }
    };

    const handleClick = () => {
        //@ts-ignore
        dispatch(deleteDataItem(productId));
    }

    function inputChange(event: any) {
        setProductId(event.target.value);
    }

    return (
        <div className={s.wrapper}>
            <button className={s.button} onClick={() => setIsVisible(!isVisible)}>Открыть панель</button>
            {isVisible && <div className={s.panel}>
                <form name ="form1" onSubmit={(event) => handleFormSubmit(event, "form1")}>
                    <p className={s.paragraph}>Добавить продукт</p>
                    <label htmlFor="title">Название</label>
                    <input type="text" name="title" onChange={(event) => handleInputChange(event, "form1")} />

                    <label htmlFor="description">Описание</label>
                    <input type="text" name="description" onChange={(event) => handleInputChange(event, "form1")} />

                    <label htmlFor="price">Цена</label>
                    <input type="number" name="price" onChange={(event) => handleInputChange(event, "form1")} />

                    <label htmlFor="quantity">Значение для сортировки</label>
                    <input type="number" name="quantity" onChange={(event) => handleInputChange(event, "form1")} />

                    <label htmlFor="media">Картинка</label>
                    <input type="file" name="media" onChange={(event) => handleInputChange(event, "form1")} />

                    <button className={s.form__button} type="submit">Добавить продукт</button>
                </form>
                <div>
                    <p className={s.paragraph}>Удалить продукт</p>
                    <label>
                        Введите id продукта:
                        <input type="text" value={productId} onChange={inputChange} />
                    </label>
                    <button className={s.form__button} onClick={handleClick}>Удалить продукт</button>
                </div>
                <form name ="form2" onSubmit={(event) => handleFormSubmit(event, "form2")}>
                    <p className={s.paragraph}>Обновить продукт</p>
                    <label htmlFor="id">Введите id продукта</label>
                    <input type="text" name="id" onChange={(event) => handleInputChange(event, "form2")} />

                    <label htmlFor="title">Название</label>
                    <input type="text" name="title" onChange={(event) => handleInputChange(event, "form2")} />

                    <label htmlFor="description">Описание</label>
                    <input type="text" name="description" onChange={(event) => handleInputChange(event, "form2")} />

                    <label htmlFor="price">Цена</label>
                    <input type="number" name="price" onChange={(event) => handleInputChange(event, "form2")} />

                    <label htmlFor="quantity">Значение для сортировки</label>
                    <input type="number" name="quantity" onChange={(event) => handleInputChange(event, "form2")} />

                    <label htmlFor="media">Картинка</label>
                    <input type="file" name="media" onChange={(event) => handleInputChange(event, "form2")} />

                    <button className={s.form__button} type="submit">Обновить продукт</button>
                </form>
            </div>
            }
        </div>
    )
}

export default AdminPanel;