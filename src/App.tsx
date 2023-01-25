import React, { useEffect, useState, createContext, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import MobileImages from './components/MobileImages';
import DesktopImages from './components/DesktopImages';
import NoPage from './components/NoPage';
import { saveAs } from 'file-saver';
import '@fontsource/roboto/400.css';
import { Container } from '@mui/material';
import './App.scss';

type Image = {
  id: number;
  src: {
    original: string;
    large: string;
  };
  photographer_url: string;
  photographer: string;
  alt: string;
};

type Joke = {
  setup: string;
  punchline: string;
};

function App() {
  const [homeImages, setHomeImages] = useState<Image[]>([]);
  const [joke, setJoke] = useState<Joke>({ setup: '', punchline: '' });
  const [reloadJoke, setReloadJoke] = useState<boolean>(false);
  const [mobileImages, setMobileImages] = useState<Image[]>([]);
  const [desktopImages, setDesktopImages] = useState<Image[]>([]);
  const [loadMore, setLoadMore] = useState<number>(12);

  const handleClick = (url: string, id: string) => {
    saveAs(url, id);
  };

  const handlePagination = () => {
    setLoadMore(loadMore + 12);
  };

  const handleJokes = () => {
    setReloadJoke(!reloadJoke);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(`https://api.pexels.com/v1/curated?per_page=${loadMore}`, {
  //       method: 'GET',
  //       headers: {
  //         Authorization: '563492ad6f91700001000001c64cbcea7fea470aa20457c80ea7e40e',
  //       },
  //     });
  //     const data: { photos: Image[] } = await response.json();
  //     const photos = data.photos;
  //     setHomeImages(photos);
  //   };
  //   fetchData();
  // }, [loadMore]);

  // useEffect(() => {
  //   const mobileImg = 'mobile wallpaper';
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `https://api.pexels.com/v1/search?query=${mobileImg}&orientation=portrait&per_page=${loadMore}`,
  //       {
  //         method: 'GET',
  //         headers: {
  //           Authorization: '563492ad6f91700001000001c64cbcea7fea470aa20457c80ea7e40e',
  //         },
  //       }
  //     );
  //     const data: { photos: Image[] } = await response.json();
  //     const photos = data.photos;
  //     setMobileImages(photos);
  //   };
  //   fetchData();
  // }, [loadMore]);

  // useEffect(() => {
  //   const desktopImg = 'desktop backgrounds';
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `https://api.pexels.com/v1/search?query=${desktopImg}&orientation=landscape&per_page=${loadMore}`,
  //       {
  //         method: 'GET',
  //         headers: {
  //           Authorization: '563492ad6f91700001000001c64cbcea7fea470aa20457c80ea7e40e',
  //         },
  //       }
  //     );
  //     const data: { photos: Image[] } = await response.json();
  //     const photos = data.photos;
  //     setDesktopImages(photos);
  //   };
  //   fetchData();
  // }, [loadMore]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data: Joke = await response.json();
      setJoke(data);
      console.log(data);
    };
    fetchData();
  }, [reloadJoke]);
  return (
    <Container>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              homeImages={homeImages}
              handleClick={handleClick}
              handlePagination={handlePagination}
              joke={joke}
              handleJokes={handleJokes}
            />
          }
        />
        <Route
          path="/mobile-images"
          element={
            <MobileImages
              mobileImages={mobileImages}
              handlePagination={handlePagination}
              handleClick={handleClick}
              joke={joke}
              handleJokes={handleJokes}
            />
          }
        />
        <Route
          path="/desktop-images"
          element={
            <DesktopImages
              desktopImages={desktopImages}
              handlePagination={handlePagination}
              handleClick={handleClick}
              joke={joke}
              handleJokes={handleJokes}
            />
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
