import styles from "./Menu.module.css";

import MenuCategory from "../../layouts/Categories";
import Hero from "../../layouts/Hero";
import Footer from "../../layouts/Footer";

const Menu = ({ data }) => {
  if (data) {
    return (
      <>
        <Hero heroData={data[0]} navigationData={data[1].navigationData} />

        <div className={`${styles.MenuCategories} container`}>
          {data[2].menuData.map((item) => {
            return (
              <div className={`${styles.categories} row`}>
                <MenuCategory menuData={item} key={item.id} />
              </div>
            );
          })}
        </div>

        <Footer footerData={data[3].footerData} />
      </>
    );
  }
  return null;
};

export default Menu;

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3004/menu`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
