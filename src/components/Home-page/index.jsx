import Showcase from "../Showcase";
import Layout from "../Layout";
import clsx from "clsx";
import cn from "./style.module.scss";


function HomePage() {
  return (
    <div className={clsx(cn["home-page"])}>
       <Showcase/>
       <Layout/>
    </div>
  );
}

export default HomePage;