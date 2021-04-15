import styles from "./Recipe.module.css";

import Post from "../../components/Post";
import Header from "../../components/Header";

import Image from "next/image";

type content = {
  description: string;
};

type recipeData = {
  title: string;
  text: string;
  src: string;
  alt: string;
  content: content[];
};

type Props = {
  recipeData: recipeData;
};

const Recipe = ({ recipeData }: Props) => {
  const { title, text, src, alt, content } = recipeData || {};
  return (
    <div className={styles.infoRecipe}>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6">
                <div className={styles.infoPost}>
                  <Post title={title} text={text} />
                </div>
              </div>
              <div className="col-md-6">
                <Image
                  className={styles.imgRecipe}
                  src={src}
                  alt={alt}
                  height={285}
                  width={326}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-lg-6">
                <h5 className={styles.comment}>
                  <Header text={content[0].description} />
                </h5>
              </div>
              <div className="col-lg-6">
                <h5 className={styles.comment}>
                  <Header text={content[1].description} />
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
