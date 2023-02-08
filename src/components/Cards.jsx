import React, { useState } from 'react'


function Cards() {
    
    const [cards] = useState([
        {
            title: 'Card-1',
            text: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nostrum velit, laudantium nemo quam praesentium a expedita excepturi aliquid tempora.`
        },
        {
            title: 'Card-2',
            text: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nostrum velit, laudantium nemo quam praesentium a expedita excepturi aliquid tempora.`
        },
        {
            title: 'Card-3',
            text: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nostrum velit, laudantium nemo quam praesentium a expedita excepturi aliquid tempora.`
        },
        {
            title: 'Card-4',
            text: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nostrum velit, laudantium nemo quam praesentium a expedita excepturi aliquid tempora.`
        },
        {
            title: 'Card-5',
            text: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nostrum velit, laudantium nemo quam praesentium a expedita excepturi aliquid tempora.`
        },
        {
            title: 'Card-6',
            text: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nostrum velit, laudantium nemo quam praesentium a expedita excepturi aliquid tempora.`
        },
    ])
    return (
        <div className="cards-section">
            <div className="container">
                <div className="cards">
                    {
                        cards.map((card, i) => (

                            <div key={i} className="card">
                                <h3>
                                    {card.title}
                                </h3>
                                <p> 
                                    {card.text}
                                </p>
                                <button className="card-btn">Explore</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
  )
}

export default Cards