import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';


export class App extends Component {
  state = {
    imagesName: '',
    page: 1,
    // render: '',
    images: [],
    loading: false,
    // isShow: false,
    image: '',
    
  }
  componentDidUpdate(prevProps, prevState) {
    const apiKey = '28142937-a3dfb3cd180998f959efa9eff';
    const baseUrl = 'https://pixabay.com/api/';
    const imagesName = this.state.imagesName;
    const page = this.state.page;
    if (this.state.imagesName.trim() === '') {
     return;
    }
    if (prevState.imagesName !== imagesName || prevState.page !== page) {
      this.setState({ loading: true });
      fetch(
        `${baseUrl}?q=${imagesName}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(images =>
          this.setState(prevState => ({
            images: [
              ...prevState.images,
              ...images.hits.map(({ id, webformatURL, largeImageURL }) => {
                return { id, webformatURL, largeImageURL };
              }),
            ],
          }))
        )
        .finally(() => this.setState({ loading: false }));
    }
  }
  handleSubmit = event => {
    console.log(event.target.name.value)
    event.preventDefault();
    this.setState({
      imagesName: event.target.name.value,
      images: [],
      page: 1,
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
   } 
   
   closeModal = () => {
    this.setState({ image: '' });
  };
   setCurrentImage = url => {
     this.setState({ image: url })
   }
   render() {
     const { imagesName, images, image, loading} = this.state;
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: '16px',
      paddingBottom: '24px',
    }}>
      <Searchbar onSubmit={this.handleSubmit} />
      {images.length > 0 && <ImageGallery images={images} imagesName={imagesName} setCurrentImage={this.setCurrentImage} />}
      {loading && <Loader />}
      {imagesName && <Button loadMore={this.onLoadMore} />}
      {image && <Modal img={image} onClose={this.closeModal} />}
   </div>
  );
}
}

