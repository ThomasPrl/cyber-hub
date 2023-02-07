import React, { useState } from 'react'


function Cards() {

    const [cards] = useState()
  return (
    <div className="cards-section">
        <div className="cards">
            <div className="card">
                <h3>Card-1</h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nostrum velit, laudantium nemo quam praesentium a expedita excepturi aliquid tempora.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Cards