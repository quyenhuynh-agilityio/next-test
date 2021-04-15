import Image from "next/image";

import styles from "./Bulletproof.module.css";

import Post from "../../components/Post";

type image = {
  src: string;
  alt: string;
};

type items = {
  text: string;
};

type bulletproofData = {
  image: image;
  title;
  quote;
  items: items[];
};

type Props = {
  bulletproofData: bulletproofData;
};

const Bulletproof = ({ bulletproofData }: Props) => {
  const { image, title, quote, items } = bulletproofData || {};
  return (
    <div className={styles.bulletproof}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className={styles.img}>
              <Image
                src={image.src}
                alt={image.alt}
                width={420}
                height={280}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.bulletproofContent}>
              <Post title={title} />
              {items.map((items) => {
                return (
                  <div>
                    <ul>
                      <li className={styles.bulletproofText}>{items.text}</li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.bulletproofComment}>
            <Post title={quote} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bulletproof;
