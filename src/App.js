import './App.css';
import React, {useState, useRef} from 'react'
import Cats from './components/Cats';
import AddCat from './components/AddCat';
import FavCats from './components/FavCats';

function App() {
  
  const catData = [
    {url: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', imageIsOpen: false},
    {url: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg', imageIsOpen: false},
    {url: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&w=1000&q=80', imageIsOpen: false},
    {url: 'https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg', imageIsOpen: false},
    {url: 'https://img.freepik.com/free-vector/sticker-template-cat-cartoon-character_1308-73786.jpg?w=2000', imageIsOpen: false},
    {url: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1144982182.jpg?crop=1.00xw:0.751xh;0,0.166xh&resize=1200:*', imageIsOpen: false},
    {url: 'https://www.daysoftheyear.com/wp-content/uploads/international-cat-day1-scaled.jpg', imageIsOpen: true},
  ]

  const [numberOfOpenCats, setNumberOfOpenCats] = useState(1)
  const [cats, setCats] = useState(catData)
  const [favCats, setFavCats] = useState([])
  const [catAlreadyExists, setCatAlreadyExists] = useState(false)

  const removeCatAlreadyExistsMessageOnMouseDown = () => {
    // @ts-ignore
    if (!document.getElementById('add_cat_button').matches(':hover')) setCatAlreadyExists(false)
  }

  return (
    <div className="App"
      onMouseDown={removeCatAlreadyExistsMessageOnMouseDown}
    >
      <header className="App-header">
        <h1>Cats app!</h1>
        <Cats
          numberOfOpenCats={numberOfOpenCats}
          setNumberOfOpenCats={setNumberOfOpenCats}
          cats={cats}
          setCats={setCats}
          favCats={favCats}
          setFavCats={setFavCats}
        />
        <h2>There {numberOfOpenCats === 1 ? 'is' : 'are'} {numberOfOpenCats} open cat{numberOfOpenCats === 1 ? '' : 's'}!</h2>
        <AddCat
          cats={cats}
          setCats={setCats}
          catAlreadyExists={catAlreadyExists}
          setCatAlreadyExists={setCatAlreadyExists}
          numberOfOpenCats={numberOfOpenCats}
          setNumberOfOpenCats={setNumberOfOpenCats}
        />
        <FavCats
          favCats={favCats}
          setFavCats={setFavCats}
        />
      </header>
    </div>
  );
}

export default App;
