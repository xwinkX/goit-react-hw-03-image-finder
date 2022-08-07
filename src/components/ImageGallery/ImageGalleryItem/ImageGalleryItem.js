import css from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images, setCurrentImage }) =>
  images.map(({ id, webformatURL, largeImageURL }) => (
    <li key={id} className={css.galleryItem}>
      <img
        onClick={() => setCurrentImage(largeImageURL)}
        className={css.image}
        src={webformatURL}
        alt="foto"
      />
    </li>
  ));

ImageGalleryItem.propTypes = {
  images: PropTypes.objectOf(PropTypes.string),
  id: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,

  setCurrentImage: PropTypes.func,
};
