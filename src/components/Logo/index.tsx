import Link from "next/link";

import Image from "next/image";
import styles from "./Logo.module.css";

type Props = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

const Logo = ({ url, alt, width, height }: Props) => {
  return (
    <div className={styles.imgLogo}>
      <Link href="/">
        <Image src={url} alt={alt} width={width} height={height} />
      </Link>
    </div>
  );
};

export default Logo;
