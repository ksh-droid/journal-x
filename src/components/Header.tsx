import React from 'react';
import { Search } from 'lucide-react';

const Header = () => {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 text-white py-6 px-8 flex items-center justify-between bg-gradient-to-b from-black/50 to-transparent">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="font-semibold text-lg tracking-wide">Journal X</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
                <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
                <a href="#" className="hover:text-gray-300 transition-colors">About</a>
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors">
                    <span>Pages</span>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
                <a href="#" className="hover:text-gray-300 transition-colors">Cart(0)</a>
            </nav>

            <div className="flex items-center gap-6">
                <div className="hidden md:block">
                    <Search className="w-5 h-5 cursor-pointer hover:text-gray-300" />
                </div>
                <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
                    Subscribe
                </button>
            </div>
        </header>
    );
};

export default Header;
