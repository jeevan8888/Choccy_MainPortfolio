"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  price: number;
}

export default function SwapInterface({
  trendingCoins,
}: {
  trendingCoins: Coin[];
}) {
  const [fromAmount, setFromAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState(
    trendingCoins[0]?.symbol || "CCY"
  );
  const [toCurrency, setToCurrency] = useState("BTC");
  const [toAmount, setToAmount] = useState("");
  const [isFromDropdownOpen, setIsFromDropdownOpen] = useState(false);
  const [isToDropdownOpen, setIsToDropdownOpen] = useState(false);

  useEffect(() => {
    updateToAmount(fromAmount, fromCurrency);
  }, [fromCurrency]);

  const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFromAmount(value);
    updateToAmount(value, fromCurrency);
  };

  const updateToAmount = (amount: string, currency: string) => {
    const selectedCoin = trendingCoins.find((coin) => coin.symbol === currency);
    if (selectedCoin) {
      setToAmount((parseFloat(amount) * selectedCoin.price).toFixed(6));
    }
  };

  const handleFromCurrencySelect = (currency: string) => {
    setFromCurrency(currency);
    setIsFromDropdownOpen(false);
  };

  const handleToCurrencySelect = (currency: string) => {
    setToCurrency(currency);
    setIsToDropdownOpen(false);
  };

  return (
    <div className="bg-[#FFFFFF] bg-opacity-[5%] md:w-[519px] font-poppins border border-[#ED8FDD] rounded-3xl p-3 md:p-6 text-white shadow-lg">
      <div className="flex items-center justify-center pl-8 mb-4">
        <Image src="/logo.png" alt="logo" width={256} height={92} />
      </div>
      <div className="flex flex-col gap-[60px]">
        <div className="relative w-80 md:w-full">
          <label className="block text-sm mb-2">From</label>
          <div className="flex items-center bg-[#ED8FDD] bg-opacity-[3%] rounded py-3 px-1 md:pl-3 md:pr-2  ">
            <input
              type="number"
              value={fromAmount}
              onChange={handleFromAmountChange}
              className="bg-transparent flex-grow outline-none input-shadow rounded px-2 py-1"
            />
            <div className="absolute right-0 md:relative ">
              <button
                onClick={() => setIsFromDropdownOpen(!isFromDropdownOpen)}
                className="flex items-center rounded-lg px-2 py-1 text-sm"
              >
                {fromCurrency}
                <div className="ml-1">
                  <ArrowDown />
                </div>
              </button>
              {isFromDropdownOpen && (
                <div className="absolute rounded w-28 right-0 mt-1 bg-[#000] shadow-lg z-10 max-h-48 overflow-y-auto hide-scrollbar">
                  {trendingCoins.map((coin) => (
                    <button
                      key={coin.id}
                      onClick={() => handleFromCurrencySelect(coin.symbol)}
                      className="block w-full text-left rounded pl-4 py-1 hover:bg-[#ED8FDD] hover:bg-opacity-[8%]"
                    >
                      {coin.symbol}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-1 absolute -bottom-10 -translate-x-1/2 left-1/2 w-[32px]">
            <ArrowDown />
            <ArrowUp />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm mb-2">To (Estimated)</label>
          <div className="flex w-80 md:w-full items-center bg-[#ED8FDD] bg-opacity-[3%] rounded py-3 px-1 md:pl-3 md:pr-2 ">
            <input
              type="text"
              value={toAmount}
              readOnly
              className="bg-transparent flex-grow outline-none input-shadow rounded px-2 py-1"
            />
            <div className=" absolute right-0 md:relative">
              <button
                onClick={() => setIsToDropdownOpen(!isToDropdownOpen)}
                className="flex items-center rounded-lg px-2 py-1 text-sm"
              >
                {toCurrency}
                <div className="ml-1">
                  <ArrowDown />
                </div>
              </button>
              {isToDropdownOpen && (
                <div className="absolute right-0 mt-1 w-28 bg-black rounded shadow z-10 hide-scrollbar">
                  <button
                    onClick={() => handleToCurrencySelect("USD")}
                    className="block w-full text-left rounded pl-4 py-1 hover:bg-[#ED8FDD] hover:bg-opacity-[8%]"
                  >
                    USD
                  </button>
                  <button
                    onClick={() => handleToCurrencySelect("EUR")}
                    className="block w-full text-left rounded pl-4 py-1 hover:bg-[#ED8FDD] hover:bg-opacity-[8%]"
                  >
                    EUR
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <button className="w-full bg-[#ED8FDD] bg-opacity-[20%] border-[#630468] transition-all hover:bg-opacity-[30%] text-white font-semibold py-3 px-8 text-sm rounded-full duration-200">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

function ArrowDown() {
  return (
    <svg
      width="9"
      height="5"
      viewBox="0 0 9 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.25 0.625L4.5 4.375L0.75 0.625"
        stroke="#CECECE"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUp() {
  return (
    <svg
      width="9"
      height="5"
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 10.25L10 1.75L1.5 10.25"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
