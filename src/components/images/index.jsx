import clsx from "clsx";
import cn from "./style.module.scss";

const ImageDisplay = ({ imageUrl }) => {
  return (
    <div className= {clsx(cn["img"])}>
      <img src={imageUrl} alt="Displayed Image" />
    </div>
  );
};

export const displayImage = (imageUrl) => {
  return <ImageDisplay imageUrl={imageUrl} />;
};
