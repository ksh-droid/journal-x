import React, { useState } from 'react';

const UploadSection = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Article Submitted:\nTitle: ${title}\nCategory: ${category}`);
        // Reset form
        setTitle('');
        setCategory('');
        setContent('');
    };

    return (
        <section className="bg-black text-white py-20 px-4 md:px-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left Side: Text */}
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                        Subscribe to our newsletter to receive our daily news
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <form className="relative max-w-md">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-white text-black pl-4 pr-32 py-3 rounded-full focus:outline-none"
                        />
                        <button className="absolute right-1 top-1 bottom-1 bg-black text-white px-6 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Right Side: Mock Upload / Laptop Image */}
                <div className="flex-1 relative">
                    {/* 
                In the reference, this is a laptop image. 
                For the "Upload Section" requirement, I will create a styled form card 
                that looks like a featured interactive element, or I can put the form *next* to it.
                
                Let's implemented the user's specific request: "Content Upload Site Structure".
                I will create a distinct section below the newsletter for the actual upload form 
                to satisfy the requirement clearly.
             */}
                    <div className="relative z-10">
                        <img
                            src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2070&auto=format&fit=crop"
                            alt="Laptop"
                            className="rounded-xl shadow-2xl border-4 border-gray-800 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>

            {/* Actual Upload Form Section (As requested) */}
            <div className="container mx-auto mt-24 border-t border-gray-800 pt-16">
                <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-6 text-center">Post a New Article</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Article Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white transition-colors"
                                placeholder="Enter article title"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Category</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white transition-colors"
                                required
                            >
                                <option value="">Select a category</option>
                                <option value="Travel">Travel</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Gear">Gear</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Content</label>
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                rows={4}
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white transition-colors"
                                placeholder="Write your article content..."
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors">
                            Publish Article
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UploadSection;
