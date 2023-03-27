import React, {useState} from 'react'

function AddCat({cats, setCats, catAlreadyExists, setCatAlreadyExists, numberOfOpenCats, setNumberOfOpenCats}) {

    const [text, setText] = useState('')

    const addCatHelper = () => {

        const findIndexOfCat = () => {
            const catsWithMatchingURL = cats.filter(cat => cat.url === text)
            if (!catsWithMatchingURL[0]) return false
            const catWithMatchingURL = catsWithMatchingURL[0]
            const indexOfMatchingCat = cats.indexOf(catWithMatchingURL)
            return indexOfMatchingCat
        }

        const indexOfMatchingCat = findIndexOfCat()
        if (!indexOfMatchingCat) {
            setCats([...cats, {url: text, imageIsOpen: true}])
            setNumberOfOpenCats(numberOfOpenCats + 1)
        } else {
            if (cats[indexOfMatchingCat].imageIsOpen === false) setNumberOfOpenCats(numberOfOpenCats + 1)
            cats[indexOfMatchingCat].imageIsOpen = true
            setCats([...cats])
            setCatAlreadyExists(true)
        }
    }

    return (
        <div>
            <input
                placeholder="Add cat's URL"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button
                onClick={addCatHelper}
                id='add_cat_button'
            >Submit Cat!</button>
            {catAlreadyExists && <p>We already have that cat!</p>}
        </div>
    )
}

export default AddCat