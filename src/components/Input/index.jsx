import clsx from "clsx";
import cn from "./style.module.scss";

function Input ({type,placeholder}){
    return(
        <div className={clsx(cn["input"])}>
            <input type={type} placeholder={placeholder}/>
        </div>
    )
}

export default Input;
