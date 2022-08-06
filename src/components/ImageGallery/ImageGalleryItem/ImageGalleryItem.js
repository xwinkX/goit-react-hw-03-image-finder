import css from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem.module.css';

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
