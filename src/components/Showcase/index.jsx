import clsx from "clsx";
import cn from "./style.module.scss";
import Nav from "../Layout/components/Navbar";

function Showcase() {
  return (
    <div style={{  
        backgroundImage: "url(/background.png)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
     className={clsx(cn["showcase"])}>
        <Nav/>
        <h1>CloudBudget</h1><br />
        <p>Управление бюджетом в для всех. <br />
         Всего 69,95 € в месяц после 7-дневной <br />
            пробной версии за 4,99 €</p>
        
            <br /><br />
        <span><a href="">ПОПРОБОВАТЬ</a></span> <br />
    </div>
  );
}

export default Showcase;