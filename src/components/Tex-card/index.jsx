import clsx from "clsx";
import cn from "./style.module.scss";

function TexCart (){
    return(
        <span className={clsx(cn["box"])}>
        <div className={clsx(cn["TexCart"])}>
            <h1>01</h1>
            <img src="/Frame 4 (9).png" alt="" />
        </div>
        <div className={clsx(cn["TexCart"])}>
            <h1>02</h1>
            <img src="/Frame 4 (8).png" alt="" />
        </div>
        <div className={clsx(cn["TexCart"])}>
            <h1>03</h1>
            <img src="/Frame 4 (7).png" alt="" />
        </div>
        <div className={clsx(cn["TexCart"])}>
            <h1>04</h1>
            <img src="/Frame 4 (6).png" alt="" />
        </div>
        </span>
    )
}
export default TexCart;
