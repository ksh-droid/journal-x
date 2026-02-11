import React, { useState } from 'react';

const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=2070&auto=format&fit=crop', // Desert dunes
        category: 'Adventure',
        date: 'Sep 1, 2023',
        title: 'Conquer the wild: Exploring terrains and conquering nature',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop', // Mountains lake
        category: 'Travel',
        date: 'Aug 28, 2023',
        title: 'Unveiling hidden gems: Exploring off-the-beaten-path destinations',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop', // Camping
        category: 'Camping',
        date: 'Aug 25, 2023',
        title: 'Camping under the stars: A guide to the best spots',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative h-[80vh] w-full overflow-hidden text-white">
            {/* Background Image */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
            ))}

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-start px-8 md:px-20 container mx-auto">
                <div className="max-w-2xl">
                    <div className="mb-4 flex items-center gap-3">
                        <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                            {slides[currentSlide].category}
                        </span>
                        <span className="text-sm opacity-80">{slides[currentSlide].date}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="text-lg opacity-80 mb-8 max-w-xl line-clamp-2">
                        {slides[currentSlide].description}
                    </p>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
