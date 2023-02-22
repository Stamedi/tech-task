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
import { Container, SelectChangeEvent } from '@mui/material';
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

type ImageState = {
  images: Image[];
  imagesAmount: number;
};

type Joke = {
  setup: string;
  punchline: string;
};

type Pagination = { home: number; mobile: number; desktop: number; search: number };

type Colors = { mobile: string; desktop: string; search: string };

export type AppContextType = {
  homeImages: ImageState;
  mobileImages: ImageState;
  desktopImages: ImageState;
  handleClick: (url: string, id: string) => void;
  handleLoadMoreImg: () => void;
  joke: Joke;
  handleJokes: () => void;
  searchImages: ImageState;
  handleSearchVal: (value: string, event: React.FormEvent) => void;
  getPage: (event: React.ChangeEvent<unknown>, page: number) => void;
  handleColorFilter: (colorVal: string, event: React.FormEvent) => void;
  handleOrientationFilter: (event: SelectChangeEvent<string>) => void;
};

export const AppContext = createContext<AppContextType>({
  homeImages: { images: [], imagesAmount: 0 },
  mobileImages: { images: [], imagesAmount: 0 },
  desktopImages: { images: [], imagesAmount: 0 },
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
  searchImages: { images: [], imagesAmount: 0 },
  handleSearchVal: () => {
    null;
  },
  getPage: () => {
    null;
  },
  handleColorFilter: () => {
    null;
  },
  handleOrientationFilter: () => {
    null;
  },
});

function App() {
  const navigate = useNavigate();
  const [homeImages, setHomeImages] = useState<ImageState>({ images: [], imagesAmount: 0 });
  const [mobileImages, setMobileImages] = useState<ImageState>({ images: [], imagesAmount: 0 });
  const [desktopImages, setDesktopImages] = useState<ImageState>({ images: [], imagesAmount: 0 });
  const [searchImages, setSearchImages] = useState<ImageState>({ images: [], imagesAmount: 0 });
  const [joke, setJoke] = useState<Joke>({ setup: '', punchline: '' });
  const [reloadJoke, setReloadJoke] = useState<boolean>(false);
  const [loadMore, setLoadMore] = useState<number>(9);
  const [currentPage, setCurrentPage] = useState<Pagination>({ home: 1, mobile: 1, desktop: 1, search: 1 });
  const [currentColor, setCurrentColor] = useState<Colors>({ mobile: '', desktop: '', search: '' });
  const [orientationVal, setOrientationVal] = useState<string>('');
  const [searchVal, setSearchVal] = useState<{ value: string; submitted: boolean }>({ value: '', submitted: false });
  const photosPerPage = 9;

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

  const getPage = (event: React.ChangeEvent<unknown>, page: number): void => {
    const currentPath = window.location.pathname.slice(1);
    const paginationKey = currentPath === '' ? 'home' : currentPath;
    setCurrentPage({ ...currentPage, [paginationKey]: page });
  };

  const handleColorFilter = (colorVal: string, event: React.FormEvent) => {
    event.preventDefault();
    const colorsFilterKey = window.location.pathname.slice(1);
    setCurrentColor({ ...currentColor, [colorsFilterKey]: colorVal });
  };

  const handleOrientationFilter = (event: SelectChangeEvent<string>) => {
    setOrientationVal(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.pexels.com/v1/curated?page=${currentPage.home}&per_page=${photosPerPage}`,
        {
          method: 'GET',
          headers: {
            Authorization: `${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      const data: { photos: Image[]; total_results: number } = await response.json();
      const photos = data.photos;
      setHomeImages({ images: photos, imagesAmount: data.total_results });
    };
    fetchData();
  }, [loadMore, currentPage.home]);

  useEffect(() => {
    const mobileImg = 'mobile wallpaper' as string;
    const fetchData = async () => {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${mobileImg}&orientation=portrait&page=${currentPage.mobile}&per_page=${photosPerPage}&color=${currentColor.mobile}`,
        {
          method: 'GET',
          headers: {
            Authorization: `${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      const data: { photos: Image[]; total_results: number } = await response.json();
      const photos = data.photos;
      setMobileImages({ images: photos, imagesAmount: data.total_results });
    };
    fetchData();
  }, [loadMore, currentPage.mobile, currentColor.mobile]);

  useEffect(() => {
    const desktopImg = 'desktop backgrounds' as string;
    const fetchData = async () => {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${desktopImg}&orientation=landscape&page=${currentPage.desktop}&per_page=${photosPerPage}&color=${currentColor.desktop}`,
        {
          method: 'GET',
          headers: {
            Authorization: `${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      const data: { photos: Image[]; total_results: number } = await response.json();
      const photos = data.photos;
      setDesktopImages({ images: photos, imagesAmount: data.total_results });
    };
    fetchData();
  }, [loadMore, currentPage.desktop, currentColor.desktop]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${searchVal.value}&orientation=${orientationVal}&page=${currentPage.search}&per_page=${photosPerPage}&color=${currentColor.search}`,
        {
          method: 'GET',
          headers: {
            Authorization: `${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      const data: { photos: Image[]; total_results: number } = await response.json();
      const photos = data.photos;
      setSearchImages({ images: photos, imagesAmount: data.total_results });
      if (photos) {
        navigate('/search');
      }
    };
    if (searchVal.value.length > 0) {
      fetchData();
    } else {
      setSearchImages({ images: [], imagesAmount: 0 });
    }
  }, [loadMore, searchVal.submitted, currentPage.search, currentColor.search, orientationVal]);

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
          handleSearchVal,
          getPage,
          handleColorFilter,
          handleOrientationFilter,
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
