import styles from "./Footer.module.css";

type Item = {
  text: string;
};

type footerData = {
  title: string;
  items: Item[];
};

type Props = {
  footerData: footerData[];
};

const Footer = ({ footerData }: Props) => {
  return (
    <>
      <div className={styles.footer}>
        <footer className="container">
          <div className="row">
            {footerData.map((data) => {
              const { title, items } = data || {};
              return (
                <div className="col-md-4">
                  <aside className="widget">
                    <h3 className={styles.title}>{title}</h3>
                    {items.map((item) => {
                      return (
                        <div>
                          <p>{item.text}</p>
                        </div>
                      );
                    })}
                  </aside>
                </div>
              );
            })}
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
