"use client";
import CryptoCard from "@/components/CryptoCard";
import Loading from "@/components/Loading";
import Searchbar from "@/components/Searchbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [cryptoList, setCryptoList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState("grid");
  const [sortBy, setSortBy] = useState("market_cap_rank");

  const fetchCryptoData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/crypto");
      const data = await res.json();
      setCryptoList(data);
    } catch (error) {
      console.error("Error fetching crypto:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterAndSort = () => {
    let filtered = [...cryptoList];
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price":
          return a.current_price - b.current_price;
        case "price_desc":
          return b.current_price - a.current_price;
        case "change":
          return a.price_change_percentage_24h - b.price_change_percentage_24h;
        case "market_cap":
          return a.market_cap - b.market_cap;
        default:
          return a.market_cap_rank - b.market_cap_rank;
      }
    });

    setFilteredList(filtered);
  };

  useEffect(() => {
    fetchCryptoData();
  }, []);

  useEffect(() => {
    filterAndSort();
  }, [sortBy, cryptoList]);

  return (
    <div className=" min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white">Crypto Tracker</h1>
            <p className="text-sm sm:font-base sm:font-medium text-neutral-400">
              Real-time crypto currency prices and market data
            </p>
          </div>

          <Searchbar/>

        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 ">
        <div className="flex justify-between  items-center py-4">
          <div className="flex gap-1 border border-neutral-500 px-4 py-2 rounded-full">
            <label className="text-sm font-medium">Sort By:</label>
            <select
              className="text-sm font-medium outline-none"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="market_cap_rank">Rank</option>
              <option value="name">Name</option>
              <option value="price">Price (Low to High)</option>
              <option value="price_desc">Price (High to Low)</option>
              <option value="change">24th Change</option>
              <option value="market_cap">Market Cap</option>
            </select>
          </div>
          {/* toogle style */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => setView("grid")}
              className={`${view === "grid" && "bg-blue-400"} border border-neutral-500 px-6 py-2 rounded-full text-sm font-medium active:scale-95`}
            >
              Grid
            </button>
            <button
              onClick={() => setView("flex")}
              className={`${view === "flex" && "bg-blue-400"} border border-neutral-500 px-6 py-2 rounded-full text-sm font-medium active:scale-95`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-10">
        {isLoading ? (
          <Loading />
        ) : (
          // add styles
          <div
            className={`${view === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 auto-rows-fr " : "flex flex-col gap-3"}`}
          >
            {filteredList.map((item, i) => (
              <div key={i} className="h-full">
                <CryptoCard crypto={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
