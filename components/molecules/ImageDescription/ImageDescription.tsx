import { ImageDescriptionProps } from './ImageDescription.type';
import { Description, Image, Wrapper } from './ImageDescription.style';

const ImageDescription = ({ src, alt, children }: ImageDescriptionProps) => {
  return (
    <Wrapper>
      <Image src={src} alt={alt} />
      <Description>{children}</Description>
    </Wrapper>
  );
};

export default ImageDescription;
