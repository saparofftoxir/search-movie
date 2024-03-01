import React from 'react'

function MovieCard({item}) {
  return (
    <div className='w-full h-32 flex justify-between p-6 bg-gray-300  rounded border-2'>
        <div>
        <h1 className='text-xl font-sans font-semibold'>{item.title}</h1>
        <h1 className='text-same font-sans '>{item.paragraph}</h1>
        </div>
        <div>
            <img className='w-20 h-20 bg-cover bg-center rounded ' src={item.image} alt="" />
        </div>
        
    </div>
  )
}

export default MovieCard;