import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
const Catalog = ({ onClick,imgUrl, title }) => {
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
