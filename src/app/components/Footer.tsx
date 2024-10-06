import Link from "next/link";
import { Twitter, Send, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#B4178E] p-4">
      <div className="container mx-auto flex justify-center items-center">
        <nav className="flex space-x-6">
          <Link
            href="https://twitter.com"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <span className="sr-only">Twitter</span>
            <Twitter size={24} />
          </Link>
          <Link
            href="https://telegram.org"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <span className="sr-only">Telegram</span>
            <Send size={24} />
          </Link>
          <Link
            href="https://discord.com"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <span className="sr-only">Discord</span>
            <MessageSquare size={24} />
          </Link>
          <Link
            href="https://www.coingecko.com"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <span className="sr-only">CoinGecko</span>
            <svg
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
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              <path d="M12 8v8" />
              <path d="M8 12h8" />
            </svg>
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
