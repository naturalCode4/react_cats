import React from 'react'

function FavCats({favCats, setFavCats}) {

    const removeFavCat = (index) => {
        favCats.splice(index, 1)
        setFavCats([...favCats])
      }
    return (
        <div>{
            favCats.map((favCat, index) => {
              return (
                <div>
                    <h2>Your favorite Cats:</h2>
                    <div>
                        <img
                            src={favCat.url}
                            style={{width: '200px', height: 'auto'}}
                        />
                        <button
                            onClick={index => removeFavCat(index)}
                        >Remove from favorites :(</button>
                    </div>
                </div>
              )
            })
          }
     </div>
    )
}

export default FavCats