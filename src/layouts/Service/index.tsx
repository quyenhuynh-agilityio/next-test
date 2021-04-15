import Image from "next/image";

import styles from "./Service.module.css";

type image = {
  src: string;
  alt: string;
};

type serverData = {
  image: image;
};

type Props = {
  serverData: serverData;
};

const Service = ({ serverData }: Props) => {
  const { image } = serverData;
  return (
    <Image
      className={styles.imgService}
      src={image.src}
      alt={image.alt}
      height={740}
      width={1370}
      objectFit="cover"
    />
  );
};

export default Service;
