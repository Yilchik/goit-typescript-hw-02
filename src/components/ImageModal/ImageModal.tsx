import React from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

interface Image {
  urls: {
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  likes: number;
}

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={css.modal}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={css.image}
      />
      <p>Author: {image.user.name}</p>
      <p>Likes: {image.likes}</p>
    </Modal>
  );
};

export default ImageModal;
