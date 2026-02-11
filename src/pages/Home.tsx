import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ContentGrid from '../components/ContentGrid';
import UploadSection from '../components/UploadSection';

const Home = () => {
    return (
        <main>
            <HeroSlider />
            <ContentGrid />
            <UploadSection />

            {/* Footer mockup based on reference bottom right */}
            <footer className="bg-white py-12 px-8 border-t border-gray-100">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <div className="h-60 rounded-xl overflow-hidden relative group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
                                alt="Footer Feature"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
                                <span className="bg-white text-black text-xs font-bold px-2 py-1 rounded w-fit mb-2">Travel</span>
                                <h4 className="text-white text-xl font-bold">Unveiling hidden gems: Exploring off-the-beaten-path destinations</h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
                                alt="Author"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h5 className="font-bold text-dark">Sophie Moore</h5>
                                <p className="text-xs text-gray-500">Editor within Chief</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                        </p>
                        <div className="flex gap-4 text-gray-400">
                            {/* Social Icons Mockup */}
                            <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                            <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                            <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold text-dark mb-4">Popular articles</h5>
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-gray-400 mb-1">Sep 1, 2023</p>
                                <a href="#" className="font-semibold text-dark hover:text-blue-600 text-sm">
                                    Unveiling hidden gems: Exploring off-the-beaten-path...
                                </a>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 mb-1">Aug 28, 2023</p>
                                <a href="#" className="font-semibold text-dark hover:text-blue-600 text-sm">
                                    Conquer the wild: Exploring terrains and conquering nature
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default Home;
