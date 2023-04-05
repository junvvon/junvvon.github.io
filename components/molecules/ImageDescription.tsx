import { ReactNode } from 'react';

const ImageDescription = ({
  src,
  alt,
  children,
}: {
  src: string;
  alt?: string;
  children?: ReactNode;
}) => (
  <div>
    <img src={src} alt={alt} width="100%" />
    <p>{children}</p>
  </div>
);

export default ImageDescription;
