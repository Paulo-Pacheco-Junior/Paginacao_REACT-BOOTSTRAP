import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "./NavBar";
import ListItems from "./components/ListItems";
import Pagination from './components/Pagination';

const App = () => {

  const[photos, setPhotos] = useState([]);
  const [indexOfCurrentPage, setIndexOfCurrentPage] = useState(0);

  const totalOfPhotos = 90;
  const photosPerPage = 9;

  const firstIndexOfPhoto = indexOfCurrentPage * photosPerPage;
  const lastIndexOfPhoto = firstIndexOfPhoto + (photosPerPage - 1);
  
  const numberOfPages = Math.ceil(totalOfPhotos / photosPerPage);
  
  let btnPages = [];
  for(let i = 1; i <= numberOfPages; i++) {
    btnPages.push(i);
  }
  
  
  useEffect(()=>{
    const getPhotos = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos/');
      const json = await res.data.slice(firstIndexOfPhoto, (lastIndexOfPhoto + 1));
      setPhotos(json);
    }
    getPhotos();
  },[firstIndexOfPhoto, lastIndexOfPhoto]);

   
  return ( 
    <>
      <NavBar />
      <ListItems photos={photos} />
      <Pagination 
        pages={btnPages}
        setIndexOfCurrentPage={setIndexOfCurrentPage}
        currentPage={indexOfCurrentPage}
      />
    </>
  );
}

export default App;
