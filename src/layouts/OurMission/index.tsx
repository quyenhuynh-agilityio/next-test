import Image from "next/image";

import styles from "./OurMission.module.css";

import Header from "../../components/Header";

type image = {
  src: string;
  alt: string;
};

type content = {
  title: string;
  text: string;
  comment: string;
  subComment: string;
  subText: string;
};

type ourMissionData = {
  image: image;
  content: Array<content>;
};

type Props = {
  ourMissionData: ourMissionData;
};

const OurMission = ({ ourMissionData }: Props) => {
  const { image, content } = ourMissionData;
  const description = content[0];
  return (
    <div className={styles.OurMission}>
      <div className="container">
        <div className={`${styles.missionContent} row`}>
          <div className="col-md-5 text-center">
            <Image
              className=""
              src={image.src}
              alt={image.alt}
              width={458}
              height={568}
              objectFit="cover"
            />
          </div>
          <div className="col-md-7">
            <Header
              title={description.title}
              text={description.text}
              comment={description.comment}
            />
            <Header
              text={description.subText}
              comment={description.subComment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
