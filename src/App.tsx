import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import MobileImages from './components/MobileImages';
import DesktopImages from './components/DesktopImages';
// @ts-ignore
import { saveAs } from 'file-saver';
import './App.scss';

function App() {
  const [data, setData] = useState<any[]>([]);
  const [mobileData, setMobileData] = useState<any[]>([]);
  const [desktopData, setDesktopData] = useState<any[]>([]);
  const [pagination, setPagination] = useState(12);

  const handleClick = (url: string, id: string) => {
    saveAs(url, id);
  };

  const handlePagination = () => {
    setPagination(pagination + 12);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.pexels.com/v1/curated?per_page=${pagination}`, {
        method: 'GET',
        headers: {
          Authorization: '563492ad6f91700001000001c64cbcea7fea470aa20457c80ea7e40e',
        },
      });
      const data = await response.json();
      const photos = data.photos;
      setData(photos);
    };
    fetchData();
  }, [pagination]);

  useEffect(() => {
    const mobileImg = 'mobile wallpaper';
    const fetchData = async () => {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${mobileImg}&orientation=portrait&per_page=${pagination}`,
        {
          method: 'GET',
          headers: {
            Authorization: '563492ad6f91700001000001c64cbcea7fea470aa20457c80ea7e40e',
          },
        }
      );
      const data = await response.json();
      const photos = data.photos;
      setMobileData(photos);
    };
    fetchData();
  }, [pagination]);

  useEffect(() => {
    const desktopImg = 'desktop backgrounds';
    const fetchData = async () => {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${desktopImg}&orientation=landscape&per_page=${pagination}`,
        {
          method: 'GET',
          headers: {
            Authorization: '563492ad6f91700001000001c64cbcea7fea470aa20457c80ea7e40e',
          },
        }
      );
      const data = await response.json();
      const photos = data.photos;
      setDesktopData(photos);
    };
    fetchData();
  }, [pagination]);
  return (
    <div className="app-container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home data={data} handleClick={handleClick} handlePagination={handlePagination} />} />
        <Route
          path="/mobile-images"
          element={
            <MobileImages mobileData={mobileData} handlePagination={handlePagination} handleClick={handleClick} />
          }
        />
        <Route
          path="/desktop-images"
          element={
            <DesktopImages desktopData={desktopData} handlePagination={handlePagination} handleClick={handleClick} />
          }
        />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
