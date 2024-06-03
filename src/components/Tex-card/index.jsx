import clsx from "clsx";
import cn from "./style.module.scss";
import { Title2 } from "../Typography";
import { Paragraph2 } from "../Typography";
import { Title1 } from "../Typography";

function TexCart (){
    return(
        <>
               {Title1('Технологии')}  
        <span className={clsx(cn["box"])}>
        <div className={clsx(cn["TexCart"])}>
        <img src="/Frame 4 (9).png" alt="" />
            <h1>01</h1>
            <span>
            {Title2('Облачное хранение')}
            {Paragraph2('Доступ из любой точки мира с любого устройства')}
            </span>
        </div>
        <div className={clsx(cn["TexCart"])}>
        <img src="/Frame 4 (8).png" alt="" />
            <h1>02</h1>
           <span> {Title2('Безопастность')}
            {Paragraph2('Вся  информация хранится на защищенных облачных серверах')}</span>
        </div>
        <div className={clsx(cn["TexCart"])}>
        <img src="/Frame 4 (7).png" alt="" />
            <h1>03</h1>
            <span>{Title2('PDF Отчеты')}
            {Paragraph2('Скачивайте ваши отчеты в удобном формате PDF')}</span>
        </div>
        <div className={clsx(cn["TexCart"])}>
        <img src="/Frame 4 (6).png" alt="" />
            <h1>04</h1>
            <div className={clsx(cn["text"])}>{Title2('CSV  Отчеты')}
            {Paragraph2('Скачивайте ваши отчеты в удобном формате CSV')}</div>
        </div>
        </span></>
    )
}
export default TexCart;
