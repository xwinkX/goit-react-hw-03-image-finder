import css from 'components/ImageGallery/ImageGallery.module.css';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = () => (
  <ul className={css.gallery}>
    <ImageGalleryItem />
  </ul>
);
