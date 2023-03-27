import React from "react"
import Cat from './Cat';

function Cats({numberOfOpenCats, setNumberOfOpenCats, cats, setCats, favCats, setFavCats}) {
    return (
        <div>{
            cats.map((cat, index) => {
              return (
                <Cat
                  cat={cat}
                  numberOfOpenCats={numberOfOpenCats}
                  setNumberOfOpenCats={setNumberOfOpenCats}
                  cats={cats}
                  setCats={setCats}
                  favCats={favCats}
                  setFavCats={setFavCats}
                  index={index}
                  key={cat.url}
                />
              )
            })
          }
        </div>
    )
}

export default Cats