import styles from "./Header.module.css";

type ClassNames = {
  title?: string;
  text?: string;
  comment?: string;
};

type Props = {
  title?: string;
  text?: string;
  comment?: string;
  classNames?: ClassNames;
};

const Header = ({
  title = "",
  text = "",
  comment = "",
  classNames = {},
}: Props) => {
  return (
    <>
      <div className={`${styles.title} ${classNames.title}`}>{title}</div>
      <div className={`${styles.text} ${classNames.text}`}>{text}</div>
      <div className={`${styles.comment} ${classNames.text}`}>{comment}</div>
    </>
  );
};

export default Header;
