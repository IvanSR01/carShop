import { useEffect, useState } from "react";
import CarItem from "../../CarItem/CarItem";
import Catalog from "./Catalog";
import styles from "./Home.module.scss";
import { data } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoriteCar } from "../../../redux/slices/getFavorCarSlice";
import { setCategoryId } from "../../../redux/slices/filterSlice";
import Loader from "../../Loader/Loader";
const Home = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.favorCar);
  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchFavoriteCar());
    };
    fetchData();
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.theBest}>
        <h2>Лучшие за неделю</h2>
        <div className={styles.items}>
          {status === "loading" ? (
            <Loader />
          ) : (
            <>
              {items.map((item, i) => (
                <CarItem {...item} key={i} />
              ))}
            </>
          )}
        </div>
        <div className={styles.catalog}>
          <h2>Каталог</h2>
          <div className={styles.CatalogItems}>
            {data.map((item, i) => (
              <Catalog
                onClick={() => dispatch(setCategoryId(i))}
                key={i}
                imgUrl={item.imgUrl}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
