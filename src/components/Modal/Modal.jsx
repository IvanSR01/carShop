import styles from "./Modal.module.scss";
import { data } from "../screens/Home/data";

import Category from "./Category";
import Sorted from "../Sorted/Sorted";
const Modal = ({ dataSort, isOpen, setIsOpen }) => {
  return (
    <div className={`${styles.wrapper} ${isOpen ? "" : styles.hidden}`}>
      <div
        className={`${styles.content} ${isOpen ? "" : styles.hiddenContent}`}
      >
        <div className={styles.header}>
          <p>Фильтрация</p>
          <img
            onClick={() => setIsOpen(!isOpen)}
            src="public/servicesImg/img_229857.png"
            alt=""
          />
        </div>
        <div className={styles.main}>
					<Category data={data}/>
					<div className={styles.sorted}>
						<Sorted data={dataSort}/>
					</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
