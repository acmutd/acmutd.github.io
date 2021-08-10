import React from 'react';
import Image from 'next/image';

const DEFAULT_SCROLL_SPEED = 7 /* seconds */ * 1000;

/**
 * Component properties for an ImageCarousel.
 */
type ImageCarouselProps = {
  /**
   * A list of image URLs to display.
   */
  images: string[];

  /**
   * How quickly the image changes in milliseconds, 7000 milliseconds (7 seconds) by default.
   */
  scrollSpeed?: number;
};

/**
 * An image carousel that automatically alternates between a set of images.
 */
export default function ImageCarousel({
  images,
  scrollSpeed = DEFAULT_SCROLL_SPEED,
}: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (images.length === 0) {
        setCurrentImageIndex(0);
        return;
      }
      const nextImage = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextImage);
    }, scrollSpeed);

    return () => {
      // Make sure the carousel timer is cleared when component is destroyed
      clearInterval(timer);
    };
  }, [images, currentImageIndex, scrollSpeed]);

  return (
    // TODO: Possibly use React.forwardRef to allow setting additional classes
    <div
      className="m-auto w-3/4 aspect-w-16 aspect-h-7 rounded-3xl overflow-hidden"
      style={{ zIndex: -3 }}
    >
      {images.length > 0 &&
        (() => {
          // TODO: give all images meaningful alt props to make them accessible.
          const imageUrl = images[currentImageIndex];
          const imageAlt = 'A glimpse of ACM.';
          return (
            <Image
              className="w-full h-full"
              src={imageUrl}
              layout="fill"
              objectFit="cover"
              alt={imageAlt}
            />
          );
        })()}
    </div>
  );
}
