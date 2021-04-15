import Image from "next/image";

import styles from "./NewsDetailPost.module.css";

import InfoNewDetail from "../../components/InfoNewsDetail";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const NewsDetailPost = ({ src, alt, width = 0, height = 0 }: Props) => {
  return (
    <div className={styles.detailPost}>
      <div className={styles.detailImg}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          objectFit="cover"
        />
      </div>
      <div className={styles.detailContent}>
        <InfoNewDetail />
      </div>
    </div>
  );
};

export default NewsDetailPost;
