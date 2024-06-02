import clsx from "clsx";
import cn from "./style.module.scss";
  function Title1(text) {
    return (
      <h1 className= {clsx(cn["title1"])}>
        {text}
      </h1>
    );
  }
  function Title2(text) {
    return (
      <h2 className= {clsx(cn["title2"])}>
        {text}
      </h2>
    );
  }
  function Title3(text) {
    return (
      <h1 className= {clsx(cn["title3"])}>
        {text}
      </h1>
    );
  }
  function Paragraph1(text) {
    return (
      <h4 className={clsx(cn["paragraph1"])}>
        {text}
      </h4>
    );
  }
  function Paragraph2(text) {
    return (
      <h6 className={clsx(cn["paragraph2"])}>
        {text}
      </h6>
    );
  }
  function Paragraph3(text) {
    return (
      <h4 className={clsx(cn["paragraph3"])}>
        {text}
      </h4>
    );
  }
  
  function Link(text){
    return(
      <div className={clsx(cn["link"])}>
        <a href=""> {text}</a>
      </div>
      
    );
  }
  export {Title1, Title2,Title3, Paragraph1,Paragraph2,Paragraph3, Link};
  