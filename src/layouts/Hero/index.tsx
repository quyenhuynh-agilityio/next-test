import Image from "next/image";

import styles from "./Hero.module.css";

import Carousel from "../../components/Carousel";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";

type heroBg = {
  src: string;
  title: string;
};

type carouselData = {
  src: string;
  alt: string;
  title: string;
  text: string;
  isActive: boolean;
};

type navigationData = {
  id: number;
  lable: string;
  href: string;
};

type Props = {
  heroData: heroBg;
  carouselData?: carouselData[];
  navigationData: navigationData[];
  isActiveCarousel?: boolean;
};

const Hero = ({
  isActiveCarousel,
  heroData,
  carouselData,
  navigationData,
}: Props) => {
  const { src, title } = heroData;
  return (
    <div className={styles.hero}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Logo
            url="/logo.png"
            alt=" Coffee Shop Logo"
            width={201}
            height={60}
          />
        </div>
        <div className={styles.nav}>
          <Navigation menu={navigationData} />
        </div>
      </div>
      <>
        {isActiveCarousel ? (
          <Carousel data={carouselData} />
        ) : (
          <>
            <div>
              <Image
                src={src}
                alt="background"
                width={1920}
                height={478}
                layout="responsive"
              />
            </div>
            <div className={`${styles.title} container`}>
              <Header title={title} classNames={{ title: "text-white" }} />
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default Hero;
