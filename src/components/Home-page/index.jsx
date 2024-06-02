import Showcase from "../Showcase";
import Layout from "../Layout";
import { Title1 } from "../Typography";
import { Paragraph1 } from "../Typography";
import clsx from "clsx";
import cn from "./style.module.scss";


function HomePage() {
  return (
    <div className={clsx(cn["home-page"])}>
       <Showcase/>
       <Layout/>
       <div className={clsx(cn["section1"])}>
            <div className={clsx(cn["section1_div1"])}>
                
            </div>
       </div>

    </div>
  );
}

export default HomePage;