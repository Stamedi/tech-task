import React from 'react';

const Home = ({ data, handleClick, handlePagination }: any) => {
  console.log(data);
  return (
    <div>
      <div className="photo-container">
        {data.map(
          (photo: {
            id: React.Key | null | undefined;
            src: {
              large: string | undefined;
              medium: string | undefined;
              original: string | undefined;
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
                <button onClick={() => handleClick(photo.src.original, photo.id)}>Download Image</button>
              </div>
            </div>
          )
        )}
      </div>
      <button onClick={() => handlePagination()}>Load More</button>
    </div>
  );
};

export default Home;
