import styles from "@/module.css/styles.module.css";
import Image from "next/image";

import { Alegreya } from "next/font/google";

const alegreya = Alegreya({ subsets: ["cyrillic"], weight: "700" });
import Link from "next/link";
import HeartIcon from "../Icons/HeartIcon";
import ViewIcon from "../Icons/ViewIcon";

const Card = ({
  name,
  thumbnail,
  slug,
  category,
  altText,
  fans,

  views,
}) => {
  return (
    <div className={styles.bioCard}>
      <div className={styles.profilePic}>
        <Image
          className="  rounded-xl  h-full"
          height={720}
          width={1280}
          alt={altText}
          src={thumbnail}
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.content}>
          <div className={styles.categoryBadgeContainer}>
            <h2 className={alegreya.className + " " + styles.name}>{name}</h2>
            <span className={styles.categoryBadge}>{category}</span>
          </div>
          <span className={styles.aboutMe}>
            Know about age, early life earning and more about {name}
          </span>
        </div>
        <div className={styles.bottomOfBottom}>
          <div className={styles.socialIntrectionContainer}>
            <div className="text-white cursor-pointer flex items-center justify-center gap-1">
              <HeartIcon className="text-2xl " />
              <span className="text-sm font-light">
                {Intl.NumberFormat("en", { notation: "compact" }).format(
                  Number(fans)
                )}
              </span>
            </div>
            <div className="text-white  flex items-center justify-center gap-1">
              <ViewIcon className="text-2xl " />
              <span className="text-sm font-light">
                {Intl.NumberFormat("en", { notation: "compact" }).format(
                  Number(views)
                )}
              </span>
            </div>
          </div>

          <Link
            className={styles.button}
            href={`/biographies/${category}/${slug}`}
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
