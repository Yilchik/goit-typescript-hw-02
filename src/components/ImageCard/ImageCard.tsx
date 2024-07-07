import css from "./ImageCard.module.css";

interface Image {
  urls: {
    small: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  likes: number;
}

interface ImageCardProps {
  image: Image;
  onImageClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  return (
    <div className={css.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.image}
        onClick={() => onImageClick(image)}
      />
      <div className={css.overlay}>
        <p>Author: {image.user.name}</p>
        <p className={css.imgTitle}>Likes: {image.likes}</p>
      </div>
    </div>
  );
};

export default ImageCard;
