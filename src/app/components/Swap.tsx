import CustomAccordion from "./Accordion";
import Image from "next/image";

// async function getTrendingCoins() {
//   const res = await fetch("https://api.coingecko.com/api/v3/search/trending", {
//     next: { revalidate: 60 },
//   });
//   if (!res.ok) throw new Error("Failed to fetch trending coins");
//   return res.json();
// }

export default async function Swap() {
  // const trendingData = await getTrendingCoins();
  // interface Coin {
  //   item: {
  //     id: string;
  //     name: string;
  //     symbol: string;
  //     price_btc: number;
  //   };
  // }
  // const ccy = {
  //   id: "ccy",
  //   name: "CCY",
  //   symbol: "CCY",
  //   price: 0.000016784219578480544,
  // };
  // const trendingCoins = trendingData.coins.map((coin: Coin) => ({
  //   id: coin.item.id,
  //   name: coin.item.name,
  //   symbol: coin.item.symbol,
  //   price: coin.item.price_btc,
  // }));

  return (
    <main
      id="swap"
      className="flex flex-col items-center justify-center px-8 lg:px-24 py-16 bg-black relative overflow-hidden"
    >
      {/* <h3 className="text-[#ED8FDD] font-medium text-[45px] font-oswald mb-4">
        SWAP
      </h3>
      <Suspense fallback={<div>Loading...</div>}>
        <SwapInterface trendingCoins={[ccy, ...trendingCoins]} />
      </Suspense>*/}
      <h3 className="text-[#ED8FDD] pt-16  font-medium text-[45px] font-poppins mb-4">
        ROADMAP
      </h3>
      <CustomAccordion />
      <Image
        width={633}
        height={633}
        src="/glow.png"
        alt="bg"
        className="absolute pointer-events-none -right-[20%] bottom-10"
      />
      <Image
        width={633}
        height={633}
        src="/glow.png"
        alt="bg"
        className="absolute pointer-events-none -left-[20%] bottom-60"
      />
      <Image
        width={633}
        height={633}
        src="/glow.png"
        alt="bg"
        className="absolute pointer-events-none -right-[20%] top-10"
      />
      <Image
        width={633}
        height={633}
        src="/glow.png"
        alt="bg"
        className="absolute pointer-events-none -right-[20%] bottom-60"
      />
      <Image
        width={633}
        height={633}
        src="/glow.png"
        alt="bg"
        className="absolute hidden lg:block pointer-events-none opacity-50 right-[20%] bottom-10"
      />
      <Image
        width={633}
        height={633}
        src="/glow.png"
        alt="bg"
        className="absolute hidden lg:block pointer-events-none opacity-50 left-[20%] bottom-60"
      />
      <Image
        width={633}
        height={633}
        src="/glow.png"
        alt="bg"
        className="absolute hidden lg:block pointer-events-none opacity-50 right-[20%] top-10"
      />
      <Image
        width={633}
        height={633}
        src="/glow.png"
        alt="bg"
        className="absolute hidden lg:block pointer-events-none opacity-50 right-[20%] bottom-60"
      />
    </main>
  );
}
