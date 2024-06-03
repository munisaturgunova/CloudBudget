import { Link } from "../Typography";
import { Title2 } from "../Typography";
import { Paragraph2 } from "../Typography";
import clsx from "clsx";
import cn from "./style.module.scss";

function CartComponent(){
    return(
        <div className={clsx(cn["Cart_component"])}>
            {Title2('Поддерживает все валюты и карты')}
            {Paragraph2('Мы поддерживаем все популярные валюты и полностью настраиваем, чтобы добавить')}
            {Link ('Подробнее')}
        </div>
    )
}
export default CartComponent;
