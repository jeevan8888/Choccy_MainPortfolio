"use client";

import React, { useState } from "react";

interface AccordionItem {
  title: string;
  items: { title: string; content: string }[];
  color?: string; // Added color property as optional
  textColor?: string; // Added textColor property as optional
}

const accordionData: AccordionItem[] = [
  {
    title: "Completed",
    items: [
      {
        title: "First Version Release",
        content:
          "Introduce the application publicly and invite early adopters to explore and test its features on a private server.",
      },
      {
        title: "FT4 Update",
        content:
          "Improve the dapp experience by integrating it with the newest version of the FT protocol, ensuring performance and compatibility with Chromia's latest advancements.",
      },
      {
        title: "Website and Branding Update",
        content:
          "Refreshed website with our new branding, setting the stage for the debut of our project on mainnet.",
      },
      {
        title: "Liquidity Deals",
        content:
          "Strategic partnerships and collaborations with important players in the space to boost liquidity for the swap platform at launch, clearing the path for seamless trading.",
      },
    ],
    color: "border-[#F202FF]",
    textColor: "text-[#F202FF]",
  },
  {
    title: "In progress",
    items: [
      {
        title: "Order Book Implementation",
        content:
          "Add an order book to the AMM swap platform to expand its functionality, letting users make precise trades within asset pairs.",
      },
      {
        title: "Performance Test",
        content:
          "Thoroughly test the order book feature to confirm the feasibility of a hybrid exchange model, combining the best of automated pools and orderbook trading.",
      },
      {
        title: "User Onboarding",
        content:
          "Engaging promotional push across our social accounts to capture audiences attention and foster community growth.",
      },
      {
        title: "Launchpad Implementation",
        content:
          "Build a launchpad on Choccy's platform, allowing developers to launch tokens and initial offerings with simplicity and ease.",
      },
    ],
    color: "border-[#91A2FA]",
    textColor: "text-[#91A2FA]",
  },
  {
    title: "Scheduled",
    items: [
      {
        title: "Liquidity Provision",
        content:
          "Establishing liquidity pools linked to tokens from key ecosystem players to strengthen the platform's foundation and create a diverse trading environment that reflects the collective strength of the Chromia ecosystem.",
      },
      {
        title: "Subscription Model",
        content:
          "Allowing token holders more flexibility with access to lower trading fees on our platform. By offering lower trading fees to token holders, we aim to incentivize participation and demonstrate the practical utility of the token both for transactions as well as participation in the growing services across our ecosystem.",
      },
    ],
    color: "border-[#ED8FDD]",
    textColor: "text-[#ED8FDD]",
  },
  {
    title: "Planned",
    items: [
      {
        title: "Metamask Integration",
        content:
          "Utilizing Metamask Snaps to simplify the user experience and seamlessly integrate with the Chromia network. This will make it easier for users to navigate and engage with the platform, creating a more intuitive and frictionless experience overall.",
      },
      {
        title: "Oracles",
        content:
          "Integrating oracle solutions and price feeds to provide accurate and reliable data for other chains within the Chromia network and beyond, enhancing interoperability and facilitating the exchange of information.",
      },
      {
        title: "Sharding",
        content:
          "Build a dedicated environment for lower liquidity pairs, allowing high-volatility trades involving 'meme' tokens and similar assets without disrupting the functionality of blue-chip tokens, ensuring optimal performance and stability.",
      },
    ],
    color: "border-[#42E8E0]",
    textColor: "text-[#42E8E0]",
  },
];

const CustomAccordion: React.FC = () => {
  const [openMain, setOpenMain] = useState<number>(0);
  const [openSub, setOpenSub] = useState<{ [key: number]: number }>({ 0: 0 });

  const toggleMain = (index: number) => {
    setOpenMain((prevOpen) => (prevOpen === index ? -1 : index));
    setOpenSub((prevOpenSub) => ({
      ...prevOpenSub,
      [index]: prevOpenSub[index] || 0,
    }));
  };

  const toggleSub = (mainIndex: number, subIndex: number) => {
    setOpenSub((prevOpenSub) => ({
      ...prevOpenSub,
      [mainIndex]: prevOpenSub[mainIndex] === subIndex ? -1 : subIndex,
    }));
  };

  return (
    <div className="w-full z-50 font-poppins max-w-[650px]   text-white rounded-lg">
      {accordionData.map((section, index) => (
        <div
          key={index}
          className={`my-8 overflow-hidden ${section.color} px-6 py-3 border bg-[#FFFFFF] bg-opacity-[5%] rounded-[15px]`}
        >
          <button
            className={`w-full py-4 px-2 text-left flex items-center justify-between rounded ${section.textColor}`}
            onClick={() => toggleMain(index)}
          >
            <span className="flex items-center">
              {index === openMain ? (
                <MinusIcon className="mr-2 w-6 h-6" />
              ) : (
                <PlusIcon className="mr-2 w-6 h-6" />
              )}
              {section.title}
            </span>
          </button>
          {openMain === index && (
            <div
              className={`transition-all duration-300 ease-in-out ${
                index === openMain
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {section.items.map((item, subIndex) => (
                <div
                  key={subIndex}
                  className={`border my-[20px] py-2 rounded-[7px] px-4 ${section.color}`}
                >
                  <button
                    className={`w-full py-4 px-2 text-left flex items-center justify-between ${section.textColor}`}
                    onClick={() => toggleSub(index, subIndex)}
                  >
                    <span className="flex items-center">
                      {openSub[index] === subIndex ? (
                        <MinusIcon className="mr-2 w-4 h-4" />
                      ) : (
                        <PlusIcon className="mr-2 w-4 h-4" />
                      )}
                      {item.title}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openSub[index] === subIndex
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="py-2 px-4 font-light text-base text-[#fff]">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const MinusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

export default CustomAccordion;
