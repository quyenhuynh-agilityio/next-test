import SEO from "../../components/SEO";

import Footer from "../../layouts/Footer";

import Hero from "../../layouts/Hero";
import NewPost from "../../layouts/NewPost";

type Props = {};

const News = ({ data, newsList }) => {
  if (data) {
    return (
      <div>
        {/* <SEO title="News & Events page" description="This is New page" />*/}
        <Hero heroData={data[0]} navigationData={data[1].navigationData} />
        {newsList.map((item) => {
          return <NewPost newsEventsData={item} key={item.id} />;
        })}
        <Footer footerData={data[2].footerData} />
      </div>
    );
  }
  return null;
};

export default News;

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3004/news-events`);
  const resNewsList = await fetch(`http://localhost:3004/news-list`);
  const data = await res.json();
  const newsList = await resNewsList.json();

  return {
    props: {
      data,
      newsList,
    },
  };
}
