import styles from './Modal.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../../redux/slices/filterSlice";
const Category = ({data}) => {
	const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();
  const onClick = (i) => {
    dispatch(setCategoryId(i));
  };
  return (
    <div className={styles.categorys}>
      {data.map((item, index) => (
        <div
          onClick={() => onClick(index)}
          className={`${styles.category} ${
            categoryId === index ? styles.active : ""
          }`}
          key={index}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default Category;
