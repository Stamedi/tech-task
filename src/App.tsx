import React, { useEffect, useState } from 'react';
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
  const [pagination, setPagination] = useState(12);

  const handleClick = (url: string, id: number) => {
    saveAs(url, id);
  };

  const handlePagination = () => {
    setPagination(pagination + 12);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.pexels.com/v1/curated?per_page=${pagination}&page=1`, {
        method: 'GET',
        headers: {
          Authorization: '563492ad6f91700001000001c64cbcea7fea470aa20457c80ea7e40e',
        },
      });
      const data = await response.json();
      const photos = data.photos;
      console.log(data);
      setData(photos);
    };
    fetchData();
  }, [pagination]);
  // useEffect(() => {
  //   const desktopImg = 'desktop backgrounds';
  //   const fetchData = async () => {
  //     const response = await fetch(`https://api.pexels.com/v1/search?query=${desktopImg}&orientation=landscape`, {
  //       method: 'GET',
  //       headers: {
  //         Authorization: '563492ad6f91700001000001c64cbcea7fea470aa20457c80ea7e40e',
  //       },
  //     });
  //     const data = await response.json();
  //     const photos = data.photos;
  //     console.log(data);
  //     setData(photos);
  //   };
  //   fetchData();
  // }, []);
  return (
    <div className="app-container">
      <Nav />
      <Home data={data} handleClick={handleClick} handlePagination={handlePagination} />
      <MobileImages />
      <DesktopImages />
      <Footer />
    </div>
  );
}

export default App;
