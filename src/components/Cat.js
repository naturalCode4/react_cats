import React, {useState, useEffect} from 'react'

function Cat({cat, numberOfOpenCats, setNumberOfOpenCats, cats, setCats, favCats, setFavCats, index}) {

    const [catIsOpen, setCatIsOpen] = useState(cat.imageIsOpen)

    // added useEffect for feature where if an existing cat is added, its image opens
    useEffect(() => {
        setCatIsOpen(cat.imageIsOpen)
    }, [cat.imageIsOpen])

    const openOrCloseCat = () => {
        cat.imageIsOpen = !cat.imageIsOpen
        setCatIsOpen(cat.imageIsOpen)
        catIsOpen ? setNumberOfOpenCats(numberOfOpenCats - 1) : setNumberOfOpenCats(numberOfOpenCats + 1)
        console.log('cats', cats)
    }

    const removeCat = () => {
        if (catIsOpen) setNumberOfOpenCats(numberOfOpenCats - 1)
        cats.splice(index, 1)
        setCats([...cats])
    }

    const addToFavorites = () => {
        favCats.push(cats[index])
        setFavCats([...favCats])
    }

    return (
        <div>
            <button
                onClick={openOrCloseCat}
            >{catIsOpen ? 'Close': 'Open'} Cat</button>
            <button
                onClick={removeCat}
            >Remove cat :(</button>
            <button
                onClick={addToFavorites}
            >Add to favorites!
            </button>
            {catIsOpen && <img
                src={cat.url}
                style={{width: '200px', height: 'auto'}}
                alt={`Couldnt get cat. Check if there is an image at the url: "${cat.url}"!`}
            />}
        </div>
    )
}

export default Cat