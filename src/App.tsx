import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import MobileImages from './components/MobileImages';
import DesktopImages from './components/DesktopImages';
import ReplayIcon from '@mui/icons-material/Replay';
// @ts-ignore
import { saveAs } from 'file-saver';
import './App.scss';

function App() {
  const [homeImages, setHomeImages] = useState<any[]>([]);
  const [joke, setJoke] = useState<any>({});
  const [reloadJoke, setReloadJoke] = useState(false);
  // const [currentPage, setCurrentPage] = useState('');
  const [mobileImages, setMobileImages] = useState<any[]>([]);
  const [desktopImages, setDesktopImages] = useState<any[]>([]);
  const [loadMore, setLoadMore] = useState(12);

  const handleClick = (url: string, id: string) => {
    saveAs(url, id);
  };

  const handlePagination = () => {
    setLoadMore(loadMore + 12);
  };

  // const handleCurrentPageVal = (navVal: string) => {
  //   setCurrentPage(navVal);
  // };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.pexels.com/v1/curated?per_page=${loadMore}`, {
        method: 'GET',
        headers: {
          Authorization: '563492ad6f91700001000001c64cbcea7fea470aa20457c80ea7e40e',
        },
      });
      const data = await response.json();
      const photos = data.photos;
      setHomeImages(photos);
    };
    fetchData();
  }, [loadMore]);

  useEffect(() => {
    const mobileImg = 'mobile wallpaper';
    const fetchData = async () => {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${mobileImg}&orientation=portrait&per_page=${loadMore}`,
        {
          method: 'GET',
          headers: {
            Authorization: '563492ad6f91700001000001c64cbcea7fea470aa20457c80ea7e40e',
          },
        }
      );
      const data = await response.json();
      const photos = data.photos;

      setMobileImages(photos);
    };
    fetchData();
  }, [loadMore]);

  useEffect(() => {
    const desktopImg = 'desktop backgrounds';
    const fetchData = async () => {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${desktopImg}&orientation=landscape&per_page=${loadMore}`,
        {
          method: 'GET',
          headers: {
            Authorization: '563492ad6f91700001000001c64cbcea7fea470aa20457c80ea7e40e',
          },
        }
      );
      const data = await response.json();
      const photos = data.photos;
      setDesktopImages(photos);
    };
    fetchData();
  }, [loadMore]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(data);
    };
    fetchData();
  }, [reloadJoke]);
  return (
    <div className="app-container">
      <Nav />
      <div className="joke-container">
        <h1>Random jokes to "boost the day":</h1>
        <div className="joke-text-container">
          <h3>{joke.setup}</h3>
          <h2>{joke.punchline}</h2>
        </div>
        <button onClick={() => setReloadJoke(!reloadJoke)}>
          New Joke
          <ReplayIcon />
        </button>
      </div>
      <Routes>
        <Route
          path="/"
          element={<Home homeImages={homeImages} handleClick={handleClick} handlePagination={handlePagination} />}
        />
        <Route
          path="/mobile-images"
          element={
            <MobileImages mobileImages={mobileImages} handlePagination={handlePagination} handleClick={handleClick} />
          }
        />
        <Route
          path="/desktop-images"
          element={
            <DesktopImages
              desktopImages={desktopImages}
              handlePagination={handlePagination}
              handleClick={handleClick}
            />
          }
        />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
