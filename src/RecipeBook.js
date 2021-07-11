import { useState } from 'react';



function RecipeBook ( {forageables} ) {
    const [savedRecipes, setSavedRecipes] = useState([])

    return (
        <div>
            {forageables.find(f => f.saved === true)}
        </div>
    )
}

export default RecipeBook;