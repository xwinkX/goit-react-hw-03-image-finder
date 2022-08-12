import css from 'components/ImageGallery/ImageGallery.module.css';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, setCurrentImage }) => (
  <ul className={css.gallery}>
    <ImageGalleryItem images={images} setCurrentImage={setCurrentImage} />
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  setCurrentImage: PropTypes.func,
};
