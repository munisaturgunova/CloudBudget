import clsx from "clsx";
import cn from "./style.module.scss";

function Img ({url}) {
  return(
    <div className= {clsx(cn["img"])}>
      <img src={url} alt="Displayed Image" />
    </div>
  )
}
export default Img;
