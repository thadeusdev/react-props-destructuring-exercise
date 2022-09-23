import React from 'react'
import EmojiButton from './EmojiButton'

// destructure props coming into PetCard
// add a default image of "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg" if no image is passed as a prop

function PetCard({name, image = "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg", favSnacks}) {
    console.log(image)
  
  const snackLis = favSnacks.map(snack => <li key={snack}>{snack}</li>)
  
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <EmojiButton label="Adopt" />
      <h3>Favorite Snacks</h3>
      <ul>
        {snackLis}
      </ul>
    </div>
  )
}

export default PetCard