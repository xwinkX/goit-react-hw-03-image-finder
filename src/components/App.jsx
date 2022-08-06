import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';

 export class App extends Component {
   state = {
     imagesName: '',
     image: '',
     page: 1,
  }
    
   handleFormSubmit = imagesName => {
     this.setState({ imagesName });
   }

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
     const { imagesName, page, image } = this.state;
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: '16px',
      paddingBottom: '24px',
    }}>
      <Searchbar onSubmit={this.handleFormSubmit}/>
      <ImageGallery imagesName={imagesName} page={page} setCurrentImage={this.setCurrentImage} />
      {imagesName && <Button loadMore={this.onLoadMore } />}
        {image && <Modal img={image} onClose={this.closeModal} />}
    </div>
  );
}
}

