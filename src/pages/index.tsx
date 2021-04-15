import styles from "../styles/Home.module.css";

import SEO from "../components/SEO";

import Hero from "../layouts/Hero";
import InfoUs from "../layouts/InfoUs";
import Service from "../layouts/Service";
import Recipe from "../layouts/Recipe";
import Latest from "../layouts/Latest";
import Bulletproof from "../layouts/Bulletproof";
import Footer from "../layouts/Footer";

import { HomeBody } from "../types/HomeTypes";

type Props = {
  data: HomeBody;
};

const Home = ({ data }: Props) => {
  if (data) {
    return (
      <div className={styles.container}>
        {/* <SEO title="Home page" description="This is Home page" /> */}

        <Hero
          isActiveCarousel
          heroData={data[0]}
          navigationData={data[1].navigationData}
          carouselData={data[2]?.carouselData}
        />
        <InfoUs infoUsData={data[3]} />

        <Service serverData={data[4]} />

        <Latest latestData={data[5]} />

        <Recipe recipeData={data[6]} />

        <Bulletproof bulletproofData={data[7]} />

        <Footer footerData={data[8].footerData} />
      </div>
    );
  }
  return null;
};
export default Home;

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3004/home`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
