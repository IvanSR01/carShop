import React from "react";
import styles from "./Basket.module.scss";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";
const EmptyBasket = () => {
  return (
    <div className={styles.empty}>
      <div>
        <img src="public/servicesImg/image 8.png" alt="" />
        <p>Корзина пустая</p>
        <span>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</span>
        <br />
        <Link to="/store">
          <Button>Вернуться назад</Button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyBasket;
