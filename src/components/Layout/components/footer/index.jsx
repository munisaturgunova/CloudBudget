import clsx from "clsx";

import cn from "./style.module.scss";

function Footer() {
  return (
    <footer className={clsx(cn["footer"])}>
      <h2>Адрес</h2> <br />
      <li>Pipang Ltd, Griva Digeni,</li>
      <li>81-83 Jacovides Tower, 1st Floor</li>
      <li>1090 Picosia USA</li>  <br /> <br />
      <p>Copyright 2021 CloudBudget</p>
    </footer>
  );
}

export default Footer;