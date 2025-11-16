import React from 'react'

const Searchbar = () => {
  return (
    <div className='w-full sm:w-auto '>
        <input type="text" placeholder='Search cryptos...' className='w-full sm:w-70 px-6 py-2 rounded-full border border-neutral-400 bg-black/20 text-white text-sm' />
    </div>
  )
}

export default Searchbar

// 340