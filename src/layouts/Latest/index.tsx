import styles from "./Latest.module.css";

import Image from "next/image";

import Header from "../../components/Header";
import Post from "../../components/Post";

type item = {
  subTitle: string;
  description: string;
  src: string;
  alt: string;
};

type latestData = {
  items: item[];
  title: string;
  src: string;
  alt: string;
};

type Props = {
  latestData: latestData;
};

const Latest = ({ latestData }: Props) => {
  const { title, src, alt, items } = latestData || {};
  return (
    <div className={styles.latest}>
      <div className="container">
        <div className="row">
          <div className={`${styles.infoLatest} col`}>
            <Header title={title} classNames={{ title: "text-center" }} />
            <div className={`${styles.line} row`}>
              <div className="col-md-4">
                <div className={styles.img}>
                  <Image
                    src={items[1].src}
                    alt={items[1].alt}
                    width={220}
                    height={143}
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="col-md-8">
                <div className={styles.latestContent}>
                  <Post title={items[1].subTitle} text={items[1].description} />
                </div>
              </div>
            </div>
            <div className={`${styles.line} row`}>
              <div className="col-md-8">
                <div className={styles.latestContent}>
                  <Post title={items[0].subTitle} text={items[0].description} />
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.img}>
                  <Image
                    src={items[0].src}
                    alt={items[0].alt}
                    width={220}
                    height={155}
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <div className={styles.img}>
              <Image
                className={styles.coffeeImg}
                src={src}
                alt={alt}
                width={427}
                height={540}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
