import { useState } from "react";
import Image from "next/image";
import { CSSTransition } from "react-transition-group";
import ImageCardLayout from "./layouts/ImageCardLayout";

type ImageProp = {
  title: string;
  alt: string;
  className: string;
  width: number;
  height: number;
  src: string;
  sizes: string;
  backtext: string;
};

export default function FlippableImage({
  className: classes,
  title,
  width,
  height,
  sizes,
  src: img,
  alt: alt,
  backtext,
  ...props
}: ImageProp) {
  const [showFront, setShowFront] = useState(true);
  return (
    <div
      onMouseEnter={() => {
        {
          showFront == true ? setShowFront(false) : setShowFront(true);
        }
      }}
      onMouseLeave={() => {
        {
          showFront == false ? setShowFront(true) : setShowFront(false);
        }
      }}
    >
      <ImageCardLayout>
        <CSSTransition in={showFront} timeout={300} classNames="flip">
          <div className="card">
            <div className="card-front">
              <Image
                {...props}
                className={classes}
                alt={alt}
                src={img}
                width={width}
                height={height}
                sizes={sizes}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="card-back flex flex-col px-2 py-1">
              <p className="text-lg	font-semibold text-gray-900 dark:text-white">
                More about {title} &nbsp;
              </p>
              <p className="text-sm text-gray-900 dark:text-white">
                {backtext}
              </p>
            </div>
          </div>
        </CSSTransition>
      </ImageCardLayout>
    </div>
  );
}
