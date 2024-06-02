import clsx from "clsx";
import cn from "./style.module.scss";

function Nav() {
  return (
    <header className={clsx(cn["header"])}>
      <nav>
        <div className={clsx(cn["logo"])}>
            <a href=""> <img src="/logo .png" alt="" /></a>
        </div>
        <div className="">
            <ul>
                <li><a href="#">ОБЗОР</a></li>
                <li><a href="#">ОСОБЕННОСТИ</a></li>
                <li><a href="#">ТЕХНОЛОГИЯ</a></li>
                <li><a href="#">КОНТАКТЫ</a></li>
                <li><a href="#">ВОЙТИ</a></li>
            </ul>
        </div>
        <button>ВОЙТИ</button>


      </nav>
    </header>
  );
}

export default Nav;