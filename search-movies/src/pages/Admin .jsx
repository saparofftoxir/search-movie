import React, { useState } from 'react'
import { movies } from '../data/movies'
import MovieCard from '../components/MovieCard'
import { CgSearch } from "react-icons/cg";

function Admin() {
    const [search, setSearch] = useState("")
    const [movi, setMovi] = useState(movies)
    const [ress, setRess] = useState(false)
    const searchMovie = movi.filter(item => item.title.toLowerCase() === search.toLowerCase().trim())
    const searchMovieHandler = (e) => {
        e.preventDefault()
        if (searchMovie.length === 0) {
            setRess(true)
        }
        setMovi(searchMovie)
    }
    console.log(searchMovie)
    return (
        <div className='w-2/5 min-h-40 p-4 bg-gray-100 border-2 rounded mt-10 m-auto'>
            <div className=''>
                <h1 className='flex'>Search Movies</h1>
                <p className='flex text-sm text-gray-600'>Type the movie title and press search</p>
            </div>
            <form onSubmit={searchMovieHandler} className='w-full mt-7 ' action="">
                <div className='flex w-full border rounded justify-between items-center '>
                    <input required onChange={(e) => setSearch(e.target.value)} className='p-1 rounded-l text-sm pl-2 w-full outline-none ' type="text" placeholder='Enter movie title' />
                    <button className='w-10 flex items-center justify-center h-7 rounded-r bg-gray-200'>
                        <CgSearch />
                    </button>
                </div>
            </form> 
            <div>
                {ress && <p className='text-sm text-gray-500' >Unfrotunately, the movie does'nt !</p>}
            </div>
            <div className='mt-3 flex flex-col gap-4'>
                {movi.map(item => <MovieCard key={item.id} item={item} />)}
            </div>


        </div>
    )
}

export default Admin 