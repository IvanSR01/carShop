import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import { FC } from "react";
import { ICatalog } from "../../types/data";


const Catalog: FC<ICatalog> = ({ onClick,imgUrl, title }) => {
  return (
    <Link onClick={onClick} to='/store' style={{textDecoration:'none'}}>
      <div className={styles.Content}>
        <div className={styles.image}>
          <img src={imgUrl} alt="" />
        </div>
        <div>{title}</div>
      </div>
    </Link>
  );
};

export default Catalog;
