import React from 'react';
import '../style/main.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const ImageLink = props.images.map( (item) =>{
    return <ImageCard key={item.id} image={item} />;
  });

  return(
    <div className="image-list">
     {ImageLink}
    </div>
  );
}

export default ImageList;
