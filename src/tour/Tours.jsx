import React from 'react'
import Tour from './Tour'

function Tours({tours,removeTours}) {
  
    return (
        <div>
            {
                 tours.map((tour)=> <Tour key={tour.id} {...tour} removeTour={removeTours}/>)
            }
        </div>
    )
}

export default Tours
