export default function FeatureGrid() {
  return (
    <div className="w-full  relative  h-fit flex items-center justify-center text-white p-6 py-20 px-8 lg:px-24 xl:px-32 md:px-12">
      <div className="grid  place-items-start  grid-cols-1 md:grid-cols-2 gapy-x-[77px] gap-y-[78px] md:gapy-y-[67px] gap-8 max-w-screen-2xl mx-auto">
        <Feature
          icon={<ZeroGasIcon />}
          title="Zero Gas"
          description="Using ChoosySwap only involves a liquidity fee."
        />
        <Feature
          icon={<RecycleIcon />}
          title="FT4 & ERC20 compatible"
          description="You can exchange between FT4 and ERC20 tokens."
        />
        <Feature
          icon={<BookOpenIcon />}
          title="Orderbook Trading"
          description="You can trade while you're logged off using the orderbook."
        />
        <Feature
          icon={<RecycleIcon />}
          title="To be announced"
          description="This feature is going to be announced soon. Stay tuned and follow us to know more!"
        />
        <Feature
          icon={<RecycleIcon />}
          title="To be announced"
          description="This feature is going to be announced soon. Stay tuned and follow us to know more!"
        />
        <Feature
          icon={<RecycleIcon />}
          title="To be announced"
          description="This feature is going to be announced soon. Stay tuned and follow us to know more!"
        />
      </div>

      <div
        className="absolute -z-[1] top-0 left-0"
        style={{
          backgroundImage: "url('/feature-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div
      className={` flex font-poppins w-full items-center justify-start space-x-4 ${
        title === "Zero Gas" ? "pt-3" : " "
      } `}
    >
      <div className={title === "Zero Gas" ? "ml-4 mr-3 " : ""}>{icon}</div>
      <div
        className={`${
          title === "Orderbook Trading" ? "2xl:pb-2" : " "
        } flex items-start justify-center flex-col lg:w-[70%] `}
      >
        <h3 className="text-[20px] md:text-[26px] font-normal text-white italic mb-1">
          {title}
        </h3>
        <p className="text-[#7D7D7D] text-sm font-light">{description}</p>
      </div>
    </div>
  );
}

function ZeroGasIcon() {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46 31.3334C47.9449 31.3334 49.8102 32.106 51.1854 33.4812C52.5607 34.8565 53.3333 36.7218 53.3333 38.6667M64.3333 49.6667V24L53.3333 13M5.66667 64.3334V13C5.66667 10.9907 6.47333 9.17202 7.78233 7.84835M20.3333 5.66669H35C36.9449 5.66669 38.8102 6.4393 40.1854 7.81457C41.5607 9.18984 42.3333 11.0551 42.3333 13V27.6667M42.3333 42.3334V64.3334M2 64.3334H46"
        stroke="#ED8FDD"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M57 16.6667V20.3333C57 21.3058 57.3863 22.2384 58.0739 22.9261C58.7616 23.6137 59.6942 24 60.6667 24H64.3333M5.66667 31.3333H31.3333M2 2L68 68"
        stroke="#ED8FDD"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function RecycleIcon() {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M78.24 48.392L84.368 59C85.5967 61.1283 86.2436 63.5424 86.2436 65.9999C86.2436 68.4574 85.5968 70.8716 84.3681 72.9999C83.1394 75.1281 81.3721 76.8955 79.2439 78.1243C77.1156 79.353 74.7015 80 72.244 80H63.996V90L43.996 76L63.996 62V72H72.244C73.2972 72 74.3318 71.7227 75.2439 71.1961C76.156 70.6695 76.9134 69.9121 77.44 69C77.9666 68.0878 78.2438 67.0532 78.2438 66C78.2438 64.9468 77.9666 63.9121 77.44 63L71.312 52.392L78.24 48.392ZM29.216 36.536L31.336 60.856L22.676 55.856L18.556 63C18.0296 63.9118 17.7523 64.9461 17.7521 65.999C17.752 67.0519 18.0288 68.0862 18.5549 68.9982C19.0811 69.9102 19.8379 70.6677 20.7494 71.1946C21.661 71.7215 22.6951 71.9993 23.748 72H35.996V80H23.748C21.2902 80.0007 18.8755 79.3542 16.7467 78.1258C14.6179 76.8973 12.8501 75.13 11.6209 73.0016C10.3917 70.8732 9.7445 68.4588 9.74434 66.0009C9.74418 63.5431 10.3911 61.1286 11.62 59L15.744 51.852L7.08398 46.856L29.216 36.536ZM55 11.876C57.1266 13.1053 58.8924 14.8724 60.12 17L64.248 24.144L72.908 19.144L70.784 43.464L48.66 33.144L57.32 28.144L53.196 21C52.6694 20.088 51.9119 19.3306 50.9999 18.8041C50.0878 18.2775 49.0532 18.0003 48 18.0003C46.9468 18.0003 45.9122 18.2775 45.0001 18.8041C44.088 19.3306 43.3306 20.088 42.804 21L36.672 31.612L29.744 27.612L35.872 17C37.7285 13.7857 40.7856 11.4402 44.3711 10.4794C47.9566 9.51848 51.7768 10.0209 54.992 11.876"
        fill="#ED8FDD"
      />
    </svg>
  );
}

function BookOpenIcon() {
  return (
    <svg
      width="94"
      height="94"
      viewBox="0 0 94 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47 8.8125C25.944 8.8125 8.8125 25.944 8.8125 47C8.8125 68.056 25.944 85.1875 47 85.1875C68.056 85.1875 85.1875 68.056 85.1875 47C85.1875 25.944 68.056 8.8125 47 8.8125ZM47 14.6875C64.8159 14.6875 79.3125 29.1841 79.3125 47C79.3125 64.8159 64.8159 79.3125 47 79.3125C29.1841 79.3125 14.6875 64.8159 14.6875 47C14.6875 29.1841 29.1841 14.6875 47 14.6875ZM54.4759 27.8651L43.1519 39.1863L54.7991 50.8393L58.4827 47.1557L50.4692 39.1745L54.4671 35.1766L66.1202 46.8267L54.4671 58.4739L52.7928 56.8054L49.1532 60.4831L54.4671 65.7941L73.4375 46.8384L54.4759 27.8651ZM39.5299 28.1941L20.5625 47.1616L39.5299 66.129L50.8452 54.7844L39.198 43.1343L35.5144 46.8179L43.5279 54.7961L39.5123 58.8088L27.8651 47.1616L39.5123 35.5085L41.1867 37.1829L44.8439 33.5286L39.5299 28.1941Z"
        fill="#ED8FDD"
      />
    </svg>
  );
}
