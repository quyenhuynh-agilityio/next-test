import styles from "./infoNews.module.css";

import Post from "../Post";

type Props = {
  title?: string;
  text?: string;
  note?: string;
  date?: string;
};

const InfoNews = ({ title, text, note, date }: Props) => {
  return (
    <div className={styles.infoNews}>
      <div className={styles.date}>{date}</div>
      <div className={styles.content}>
        <Post title={title} text={text} />
      </div>
      <div className={styles.meta}>{note}</div>
    </div>
  );
};

export default InfoNews;
