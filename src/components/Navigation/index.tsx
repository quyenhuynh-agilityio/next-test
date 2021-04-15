import Link from "next/link";
import styles from "./Navigation.module.css";

type Item = {
  id?: number;
  label?: string;
  href: string;
};

type Props = {
  menu?: Item[];
  classNames?: string;
};

const Navigation = ({ menu = [], classNames }: Props) => {
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg `}>
      <div className={styles.navbarMenu}>
        <div className={styles.btn}>
          <button
            className="navbar-toggler navbar-light"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {menu.map((item, index) => {
            return (
              <li
                className={`${styles.navItem} active`}
                key={`${index}-${item.label}`}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
