import Showcase from "../Showcase";
import Layout from "../Layout";
import { Title1 } from "../Typography";
import { Paragraph1 } from "../Typography";
import { Link } from "../Typography";
import Img from "../images";
import clsx from "clsx";
import cn from "./style.module.scss";


function HomePage() {
  return (
    <div className={clsx(cn["home-page"])}>
       <Showcase/>
       <Layout/>
       <div className={clsx(cn["section1"])}>
            <div className={clsx(cn["section1_div1"])}>
            {Title1('Простое приложение для управления бюджетом')}
            {Paragraph1('Наше приложение создано, чтобы вы могли в реальном времени управлять своим бюджетом и расходами в режиме онлайн с любого устройства. Оно предоставляет подробные отчеты о доходах и расходах с графиками, чтобы вы сразу могли увидеть расходы и бюджет. Читайте ниже, чтобы узнать больше.')} <br />
            {Link('Узнать подробнее')}
            </div>
            <div className={clsx(cn["section1_div2"])}>
            <Img url={"/img1.png"}/>
            </div>
       </div>
       <div className={clsx(cn["section2"])}>
          {Title1('Возможности')} <br />
          <div className={clsx(cn["section2_carts"])}>
          <div className={clsx(cn["section2_cart"])}>
             <Img url={"/Bg (1).png"}/>
             

             </div>

          </div>
       </div>
    </div>
  );
}

export default HomePage;