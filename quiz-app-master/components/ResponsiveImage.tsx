import Image, { StaticImageData } from "next/image";

interface ImageProps {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  layout?: 'fill' | 'intrinsic' | 'responsive' | 'fixed';
  placeholder?: 'blur' | 'empty';
  priority?: boolean;
  className?: string
}

const ResponsiveImage = ({
  src,
  alt,
  width,
  height,
  layout = 'responsive', //setting a default
  placeholder='blur', //setting a default
  className,
  priority
}: ImageProps) => {
  return (
    <Image 
      className={`${className}`}
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
      placeholder={placeholder}
      priority={priority}
    />
  )
}

export default ResponsiveImage
