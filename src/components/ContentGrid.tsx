import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const categories = [
    {
        id: 1,
        name: 'Travel',
        image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 2,
        name: 'Adventure',
        image: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=1974&auto=format&fit=crop',
        description: 'Sit luctus vitae varius amet posuere turpis sed turpis.'
    },
    {
        id: 3,
        name: 'Gear',
        image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070&auto=format&fit=crop',
        description: 'Imperdiet tellus tempor bibendum accumsan commodo nunc tincidunt.'
    }
];

const popularArticles = [
    {
        id: 1,
        category: 'Travel',
        date: 'Sep 1, 2023',
        title: 'Unveiling hidden gems: Exploring off-the-beaten-path destinations',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop'
    },
    {
        id: 2,
        category: 'Adventure',
        date: 'Sep 1, 2023',
        title: 'Conquer the wild: Exploring terrains and conquering nature',
        image: 'https://images.unsplash.com/photo-1445307907438-fa6774dd5671?q=80&w=2080&auto=format&fit=crop'
    },
    {
        id: 3,
        category: 'Gear',
        date: 'Sep 1, 2023',
        title: 'Gear up for adventure: Equipment for outdoor enthusiasts',
        image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop'
    }
];

const ContentGrid = () => {
    return (
        <section className="py-20 px-4 md:px-8 container mx-auto">
            {/* Category Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-dark">Article categories</h2>
                <button className="text-sm font-medium border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors">
                    Browse all articles
                </button>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                {categories.map((cat) => (
                    <div key={cat.id} className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
                        <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowUpRight className="text-white w-4 h-4" />
                        </div>

                        <div className="absolute bottom-0 left-0 p-8">
                            <h3 className="text-2xl font-bold text-white mb-2">{cat.name}</h3>
                            <p className="text-gray-300 text-sm line-clamp-2">{cat.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Popular Now */}
            <div className="mb-4">
                <h3 className="text-lg font-bold text-dark mb-6">Popular now</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {popularArticles.map((article) => (
                    <article key={article.id} className="group cursor-pointer">
                        <div className="mb-4 overflow-hidden rounded-xl h-60 hidden">
                            {/* Hidden image logic if we want to mimic the text-only look of the bottom section in the reference, 
                       but let's keep it simple or maybe add small thumbnails if preferred. 
                       The reference shows text mostly for "Popular now".
                   */}
                            <img src={article.image} alt={article.title} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                            <span>{article.category}</span>
                            <span>•</span>
                            <span>{article.date}</span>
                        </div>
                        <h4 className="text-xl font-bold text-dark leading-snug group-hover:text-blue-600 transition-colors">
                            {article.title}
                        </h4>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ContentGrid;
