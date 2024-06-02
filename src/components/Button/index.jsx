import clsx from "clsx";
import cn from "./style.module.scss";

export const PrimaryButton = (props) => {
  return (
    <button className= {clsx(cn["primary-button"])} {...props}>
      ВХОД
    </button>
  );
};

export const SecondaryButton = (props) => {
  return (
    <button className={clsx(cn["secondary-button"])} {...props}>
      ОТПРАВИТЬ
    </button>
  );
};
