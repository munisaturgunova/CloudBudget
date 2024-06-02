import clsx from "clsx";
import cn from "./style.module.scss";

export const Title1 = (props,text) => {
    return (
      <h1 className= {clsx(cn["title1"])} {...props}>
        {text}
      </h1>
    );
  };
export const Title2 = (props,text) => {
    return (
      <h2 className= {clsx(cn["title2"])} {...props}>
        {text}
      </h2>
    );
  };

  export const Paragraph1 = (props,text) => {
    return (
    <h4 className={clsx(cn["paragraph1"])} {...props}>
        {text}
      </h4>
    );
  };
export const Paragraph2 = (props,text) => {
    return (
      <h6 className={clsx(cn["paragraph2"])} {...props}>
        {text}
      </h6>
    );
  };
