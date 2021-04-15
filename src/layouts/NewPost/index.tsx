import Link from "next/link";

import Image from "next/image";

import styles from "./NewPost.module.css";
import InfoNews from "../../components/InfoNews";

type image = {
  src: string;
  alt: string;
};

type newsEventsData = {
  image: image;
  id: number;
  date: string;
  title: string;
  description: string;
  note: string;
};

type Props = {
  newsEventsData: newsEventsData;
};

const NewPost = ({ newsEventsData }: Props) => {
  const { id, image, date, title, description, note } = newsEventsData || {};

  return (
    <div className={styles.newPost}>
      <div className="container">
        <div className={`${styles.post} row`}>
          <div className="col-md-6">
            <Link href={`/news/[id]`} as={`/news/${id}`}>
              <Image
                src={image.src}
                alt={image.alt}
                width={552}
                height={322}
                objectFit="cover"
              />
            </Link>
          </div>
          <div className="col-md-6">
            <InfoNews
              date={date}
              title={title}
              text={description}
              note={note}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
