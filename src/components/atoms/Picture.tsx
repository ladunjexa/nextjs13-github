import Image from "next/image";

import type { PictureProps } from "@types";

const Picture = ({
  className,
  size,
  src,
  alt,
  loading = "lazy",
  decoding = "async",
  ...rest
}: PictureProps) => {
  const width = size[0];
  const height = size.length === 1 ? size[0] : size[1];
  const defaultAlt = alt || `image-${width}x${height}-${src}`;

  return (
    <Image
      className={className}
      width={`${width}`}
      height={`${height}`}
      alt={defaultAlt}
      src={src}
      loading={loading}
      decoding={decoding}
      {...rest}
    />
  );
};

export default Picture;
