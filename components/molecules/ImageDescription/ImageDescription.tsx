import Image from 'next/image';
import { ImageDescriptionProps } from './ImageDescription.type';
import { Wrapper, ImageWrapper, Description } from './ImageDescription.style';

const ImageDescription = ({ src, alt, children }: ImageDescriptionProps) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={src} alt={alt} layout="fill" objectFit="contain" />
      </ImageWrapper>
      <Description>{children}</Description>
    </Wrapper>
  );
};

export default ImageDescription;
