import SEO from "../../components/SEO";

import Hero from "../../layouts/Hero";
import InfoUs from "../../layouts/InfoUs";
import OurMission from "../../layouts/OurMission";
import Footer from "../../layouts/Footer";
import OurPromise from "../../layouts/ourPromise";
import Flickity from "../../layouts/Flickity";
import OurMethods from "../../layouts/OurMethods";

import type { Body } from "../../types/AboutTypes";

type Props = {
  data: Body;
};

const About = ({ data }: Props) => {
  if (data) {
    return (
      <div>
        {/* <SEO title="About page" description="This is About page" /> */}

        <Hero heroData={data[0]} navigationData={data[1].navigationData} />

        <InfoUs infoUsData={data[2]} />

        <OurMission ourMissionData={data[3]} />

        <OurPromise ourPromiseData={data[4]} />

        <Flickity flickityData={data[5]} />

        <OurMethods ourMethodsData={data[6]} />

        <Footer footerData={data[7].footerData} />
      </div>
    );
  }
  return null;
};

export default About;

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3004/about`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
