import css from "./ImageCard.module.css";

function ImageCard({ image, onImageClick }) {
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
}

export default ImageCard;
