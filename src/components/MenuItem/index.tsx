import styles from "./MenuItem.module.css";

type Props = {
  name: string;
  price: string;
  description: string;
};

const MenuItem = ({ name, price, description }: Props) => {
  return (
    <div className={`${styles.menuItem} row`}>
      <div className={styles.menuContent}>
        <h5 className={styles.menuTitle}>
          <span>{name}</span>
          <span className={styles.menuPrice}>{price}</span>
        </h5>
        <p className={styles.menuText}>{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
