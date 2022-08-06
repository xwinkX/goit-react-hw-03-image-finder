import css from 'components/ImageGallery/ImageGallery.module.css';
import { Loader } from 'components/Loader/Loader';
import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
  };
  componentDidUpdate(prevProps) {
    const apiKey = '28142937-a3dfb3cd180998f959efa9eff';
    const baseUrl = 'https://pixabay.com/api/';
    const imagesName = this.props.imagesName;
    const page = this.props.page;
    if (prevProps !== this.props) {
      this.setState({ loading: true });
      fetch(
        `${baseUrl}?q=${imagesName}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(images => this.setState({ images: images.hits }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { images, loading } = this.state;
    return (
      <ul className={css.gallery}>
        {loading && <Loader />}
        {images && (
          <ImageGalleryItem images={images} setCurrentImage={this.props.setCurrentImage} />
        )}
      </ul>
    );
  }
}
