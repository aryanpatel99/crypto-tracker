export default async function CoinPage({ params }) {
  const { id } = await params;

  return (
    <div className="text-white">
      <h1>Coin page details</h1>
      <h1>Coin id: {id}</h1>
    </div>
  );
}



// 'use client'
// import * as React from 'react'
 
// export default function CoinPage({ params }) {
//   // asynchronous access of `params.id`.
//   const { id } = React.use(params)
//   return <p>ID: {id}</p>
// }