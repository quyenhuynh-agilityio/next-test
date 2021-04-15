import Image from "next/image";

import styles from "./OurMethods.module.css";

import Header from "../../components/Header";

type image = {
  src: string;
  alt: string;
};

type ourMethodsData = {
  title: string;
  text: string;
  comment: string;
  image: image;
};

type Props = {
  ourMethodsData?: ourMethodsData;
};

const OurMethods = ({ ourMethodsData }: Props) => {
  const { title, text, comment, image } = ourMethodsData;
  return (
    <div className={styles.methods}>
      <div className="container">
        <div className={`${styles.aboutContent} row`}>
          <div className="col-md-5">
            <Image
              className={styles.mrthodsImg}
              src={image.src}
              alt={image.alt}
              width={350}
              height={370}
              objectFit="cover"
            />
          </div>
          <div className="col-md-7">
            <Header title={title} text={text} comment={comment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMethods;
