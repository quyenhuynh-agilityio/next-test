import Image from "next/image";

import styles from "./MenuCategory.module.css";
import MenuItem from "../../components/MenuItem";

type item = {
  name: string;
  price: string;
  description: string;
};

type image = {
  src: string;
  alt: string;
};

type menuData = {
  id: string;
  items: item[];
  category: string;
  image: image;
};

type Props = {
  menuData: menuData;
};

const MenuCategory = ({ menuData }: Props) => {
  const { category, image, items } = menuData || {};

  return (
    <>
      <div className="col-md-6">
        <h1 className={styles.categoryItem}>{category}</h1>
        <div className={styles.itemImg}>
          <Image
            src={image.src}
            alt={image.alt}
            width={525}
            height={321}
            objectFit="cover"
          />
        </div>
      </div>
      <div className="col-md-6">
        {items.map((items) => {
          return (
            <div>
              <MenuItem
                name={items.name}
                price={items.price}
                description={items.description}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuCategory;
