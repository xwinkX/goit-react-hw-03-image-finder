import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';


 export class App extends Component {
  
  
  
  render() {
    return (
    <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}>
        <Searchbar />
        <ImageGallery />
        <Button/>
    </div>
  )};
};

