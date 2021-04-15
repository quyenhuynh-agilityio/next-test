import Image from "next/image";

import styles from "./News.module.css";

import InfoNewsDetail from "../../components/InfoNewsDetail";

import Hero from "../../layouts/Hero";
import Footer from "../../layouts/Footer";

// type Props = {
//   src?: string;
//   alt?: string;
// };

const NewsDetailPost = ({ detail, staticData }) => {
  const { image, description, date, note, quote } = detail || {};
  const { src, alt } = image || {};
  const { title } = detail || {};
  if (detail && staticData) {
    return (
      <>
        <Hero
          heroData={staticData[0]}
          navigationData={staticData[1].navigationData}
        />
        <div className={styles.detailImg}>
          <Image
            src={src}
            alt={alt}
            width={750}
            height={435}
            objectFit="cover"
          />
        </div>
        <InfoNewsDetail
          title={title}
          date={date}
          note={note}
          quote={quote}
          description={description}
        />
        <Footer footerData={staticData[2].footerData} />
      </>
    );
  }
  return null;
};

export default NewsDetailPost;

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3004/news-list`);
  const data = await res.json();

  const paths = data.map((item) => ({
    params: { id: item.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const id = params.id.toString() || "";
  const res = await fetch(`http://localhost:3004/news-list/${id}`);
  const response = await fetch(`http://localhost:3004/news-events`);
  const staticData = await response.json();
  const detail = await res.json();

  return {
    props: {
      detail,
      staticData,
    },
  };
}
