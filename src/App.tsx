import React, { useEffect, useState, createContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import MobileImages from './components/MobileImages';
import DesktopImages from './components/DesktopImages';
import SearchImages from './components/SearchImages';
import NoPage from './components/NoPage';
import { saveAs } from 'file-saver';
import '@fontsource/roboto/400.css';
import { Container } from '@mui/material';
import ScrollToTop from 'react-scroll-to-top';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

type Image = {
  id: string;
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

type Pagination = { home: number; mobile: number; desktop: number };

export type AppContextType = {
  homeImages: Image[];
  mobileImages: Image[];
  desktopImages: Image[];
  handleClick: (url: string, id: string) => void;
  handleLoadMoreImg: () => void;
  joke: Joke;
  handleJokes: () => void;
  searchImages: Image[];
  searchVal: { value: string; submitted: boolean };
  handleSearchVal: (value: string, event: React.FormEvent) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getPage: (event: any) => void;
  currentPage: Pagination;
};

export const AppContext = createContext<AppContextType>({
  homeImages: [],
  mobileImages: [],
  desktopImages: [],
  handleClick: () => {
    null;
  },
  handleLoadMoreImg: () => {
    null;
  },
  joke: { setup: '', punchline: '' },
  handleJokes: () => {
    null;
  },
  searchImages: [],
  searchVal: { value: '', submitted: false },
  handleSearchVal: () => {
    null;
  },
  getPage: () => {
    null;
  },
  currentPage: { home: 1, mobile: 1, desktop: 1 },
});

function App() {
  const navigate = useNavigate();
  const [homeImages, setHomeImages] = useState<Image[]>([]);
  const [mobileImages, setMobileImages] = useState<Image[]>([]);
  const [desktopImages, setDesktopImages] = useState<Image[]>([]);
  const [searchImages, setSearchImages] = useState<Image[]>([]);
  const [joke, setJoke] = useState<Joke>({ setup: '', punchline: '' });
  const [reloadJoke, setReloadJoke] = useState<boolean>(false);
  const [loadMore, setLoadMore] = useState<number>(9);
  const [currentPage, setCurrentPage] = useState<Pagination>({ home: 1, mobile: 1, desktop: 1 });
  const [searchVal, setSearchVal] = useState<{ value: string; submitted: boolean }>({ value: '', submitted: false });

  const handleClick = (url: string, id: string) => {
    saveAs(url, id);
  };

  const handleLoadMoreImg = () => {
    setLoadMore(loadMore + 9);
  };

  const handleJokes = () => {
    setReloadJoke(!reloadJoke);
  };

  const handleSearchVal = (value: string, event: React.FormEvent) => {
    event.preventDefault();
    setSearchVal({ ...searchVal, value, submitted: !searchVal.submitted });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getPage = (event: any): void => {
    const pageNumber = event.currentTarget.textContent;
    const currentPath = window.location.pathname.slice(1);
    const paginationKey = currentPath === '' ? 'home' : currentPath;
    setCurrentPage({ ...currentPage, [paginationKey]: pageNumber });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.pexels.com/v1/curated?page=${currentPage.home}&per_page=${9}`, {
        method: 'GET',
        headers: {
          Authorization: '563492ad6f91700001000001c64cbcea7fea470aa20457c80ea7e40e',
        },
      });
      const data: { photos: Image[] } = await response.json();
      console.log(data);
      const photos = data.photos;
      setHomeImages(photos);
    };
    fetchData();
  }, [loadMore, currentPage.home]);

  useEffect(() => {
    const mobileImg = 'mobile wallpaper' as string;
    const fetchData = async () => {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${mobileImg}&orientation=portrait&page=${
          currentPage.mobile
        }&per_page=${9}`,
        {
          method: 'GET',
          headers: {
            Authorization: '563492ad6f91700001000001c64cbcea7fea470aa20457c80ea7e40e',
          },
        }
      );
      const data: { photos: Image[] } = await response.json();
      const photos = data.photos;
      setMobileImages(photos);
    };
    fetchData();
  }, [loadMore, currentPage.mobile]);

  useEffect(() => {
    const desktopImg = 'desktop backgrounds' as string;
    const fetchData = async () => {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${desktopImg}&orientation=landscape&page=${
          currentPage.desktop
        }&per_page=${9}`,
        {
          method: 'GET',
          headers: {
            Authorization: '563492ad6f91700001000001c64cbcea7fea470aa20457c80ea7e40e',
          },
        }
      );
      const data: { photos: Image[] } = await response.json();
      const photos = data.photos;
      setDesktopImages(photos);
    };
    fetchData();
  }, [loadMore, currentPage.desktop]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${searchVal.value}&orientation=square&page=${currentPage}&per_page=${loadMore}`,
        {
          method: 'GET',
          headers: {
            Authorization: '563492ad6f91700001000001c64cbcea7fea470aa20457c80ea7e40e',
          },
        }
      );
      const data: { photos: Image[] } = await response.json();
      const photos = data.photos;
      setSearchImages(photos);
      if (photos) {
        navigate('/search');
      }
    };
    if (searchVal.value.length > 0) {
      fetchData();
    } else {
      setSearchImages([]);
    }
  }, [loadMore, searchVal.submitted]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data: Joke = await response.json();
      setJoke(data);
    };
    fetchData();
  }, [reloadJoke]);
  return (
    <Container sx={{ padding: 0, position: 'relative' }}>
      <ScrollToTop smooth component={<KeyboardArrowUpIcon style={{ color: '#7e9392' }} />} />
      <AppContext.Provider
        value={{
          homeImages,
          mobileImages,
          desktopImages,
          handleClick,
          handleLoadMoreImg,
          joke,
          handleJokes,
          searchImages,
          searchVal,
          handleSearchVal,
          getPage,
          currentPage,
        }}
      >
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobile" element={<MobileImages />} />
          <Route path="/desktop" element={<DesktopImages />} />
          <Route path="/search" element={<SearchImages />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </Container>
  );
}

export default App;
