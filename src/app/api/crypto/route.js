import { NextResponse } from "next/server";

export async function GET(){
    const BASE_URL = "https://api.coingecko.com/api/v3"; 

    const url = `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

    const res = await fetch(url,{
        next:{
            revalidate:60     //cache for 1 min
        }
    });

    if(!res.ok){
        return NextResponse.json(
            {error:'Failed to fetch crypto data'},
            {status:500}
        )
    }

    const data = await res.json();
    return NextResponse.json(data);

}