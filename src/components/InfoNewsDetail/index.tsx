import styles from "./InfoNewsDetail.module.css";

import InfoNews from "../InfoNews";

type Props = {
  title?: string;
  description?: string;
  note?: string;
  date?: string;
  quote?: string;
};

const InfoNewDetail = ({ title, description, note, date, quote }: Props) => {
  return (
    <div>
      <div className={`${styles.infoNewsDetail} container`}>
        <InfoNews date={date} />
        <InfoNews title={title} note={note} />
        <p>{description}</p>
        <blockquote className={styles.infoNewsQuote}>{quote}</blockquote>
      </div>
    </div>
  );
};

export default InfoNewDetail;
