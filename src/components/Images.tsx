import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
const Images = ({ images, handleClick, handlePagination }: any) => {
  return (
    <div>
      <div className="photo-container">
        {images.map(
          (photo: {
            id: React.Key | null | undefined;
            src: {
              original: any;
              large: string | undefined;
            };
            photographer_url: string | undefined;
            photographer:
              | string
              | number
              | boolean
              | React.ReactElement<any, string | React.JSXElementConstructor<any>>
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
          }) => (
            <div key={photo.id} className="single-photo-container">
              <img src={photo.src.large} alt="" />
              <div className="card-text-container">
                <p>
                  Taken by <a href={photo.photographer_url}>{photo.photographer}</a>
                </p>
                <button onClick={() => handleClick(photo.src.original, photo.id)}>
                  <DownloadIcon />
                </button>
              </div>
            </div>
          )
        )}
      </div>
      <button className="load-more-btn" onClick={() => handlePagination()}>
        Load More
      </button>
    </div>
  );
};

export default Images;
