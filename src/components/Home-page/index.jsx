import Showcase from "../Showcase";
import Layout from "../Layout";
import { Title1 } from "../Typography";
import { Paragraph1 } from "../Typography";
import { Link } from "../Typography";
import Img from "../images";
import CartComponent from "../Card-component";
import TexCart from "../Tex-card";
import { Title3 } from "../Typography";
import { Paragraph3 } from "../Typography";
import Input from "../Input";
import { SecondaryButton } from "../Button";
import clsx from "clsx";
import cn from "./style.module.scss";


function HomePage() {
  return (
    <div className={clsx(cn["home-page"])}>
       <Showcase/>
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
             <CartComponent/>
          </div>
          <div className={clsx(cn["section2_cart"])}>
             <Img url={"/Bg (2).png"}/>
             <CartComponent/>
          </div>
          <div className={clsx(cn["section2_cart"])}>
             <Img url={"/Bg (3).png"}/>
             <CartComponent/>
          </div>

          </div>
       </div>
       <div className={clsx(cn["section3"])}>
        <TexCart/>
       </div>
       <div className={clsx(cn["section4"])}>
       <div className={clsx(cn["section4_div1"])}>
          {Title3('Сосредоточьтесь на экономии денег')}
          {Paragraph3('Мы помогаем вам отслеживать ваши привычки в расходах, чтобы вы могли легко определить и сократить ненужные расходы. Просто присоединяйтесь сегодня, чтобы начать!')}
           <br />
           <div className={clsx(cn["section4_icons"])}>
           <Img url={"/icon1.png"}/>
           <Img url={"/icon2.png"}/>
           </div>
         </div>
         <div className={clsx(cn["section4_div2"])}>
         <Img url={"/Video_bg.png"}/>
       </div>
       </div>
       <div className={clsx(cn["section5"])}>
       <div className={clsx(cn["section5_div1"])}>
          {Title1('Напишите нам')}  <br /> <br />
          {Paragraph1('Остались вопросы или опасения? Просто заполните форму ниже, и наша служба поддержки свяжется с вами в течение 24 часов.')}
        </div>
        <div className={clsx(cn["section5_div2"])}>
         <form action="">
         <Input type={"text"} placeholder={"Имя"}/>
          <Input type={"number"} placeholder={"Телефон"}/>
          <SecondaryButton/>
         </form>
        </div>
       </div>
       <Layout/>
       <br /><br /><br /><br />

    </div>
  );
}

export default HomePage;