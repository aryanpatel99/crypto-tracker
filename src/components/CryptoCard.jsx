import { formatPrice ,formatMarketCap } from '@/utils/formatter'
import React from 'react'

const CryptoCard = ({ crypto }) => {
    return (
//         <div className='w-full mx-auto sm:max-w-5xl  bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transition 
//   cursor-pointer 
//   hover:-translate-y-2
//   hover:shadow-2xl
//   hover:border-blue-200/30 relative overflow-hidden'>
            <div className="h-full flex flex-col bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transition 
cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200/30 relative overflow-hidden">
            {/* crytpo header */}
            <div className='flex justify-between flex-start mb-4'>
                <div className='flex items-center gap-2'>
                    {/* crypto info  */}
                    <img className='w-[50px] h-[50px] border border-neutral-500 rounded-full' src={crypto.image} alt="" />
                    <div className='space-y-1'>
                        <h3 className='font-medium text-lg'>{crypto.name}</h3>
                        <p className='font-base text-sm'>{crypto.symbol.toUpperCase()}</p>
                        <span className='inline-block border border-neutral-400 bg-blue-800 px-3 rounded-full mask-b-from-white-500 '>#{crypto.market_cap_rank}</span>
                    </div>
                </div>
            </div>
            {/* crypto price */}
            <div className='mx-4'>
                <p className='font-medium text-lg'>{formatPrice(crypto.current_price)}</p>
                <p className={`border border-white/10 rounded-lg px-3 py-1 text-sm w-fit font-semibold  ${crypto.price_change_percentage_24h > 0 ? "bg-green-500" : "bg-red-500"}`}>
                {crypto.price_change_percentage_24h > 0 ? "↑" : "↓"}{' '}
                {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                </p>
            </div>

        {/* crypto stats  */}
            <div className='border-t mt-4 border-neutral-700 px-4 flex justify-between'>
                <div className='mt-2 flex flex-col gap-1'>
                    <span className='text-xs font-medium text-neutral-400'>MARKET CAP</span>
                    <span className='text-xs font-semibold text-neutral-300'>${formatMarketCap(crypto.market_cap)}</span>
                </div>
                <div className='mt-2 flex flex-col gap-1'>
                    <span className='text-xs font-medium text-neutral-400'>VOLUME</span>
                    <span className='text-xs font-semibold text-neutral-300'>${formatMarketCap(crypto.total_volume)}</span>
                </div>
            </div>
        </div>
    )
}

export default CryptoCard

// 324