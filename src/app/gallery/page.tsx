"use client";

import PinterestGallery, { MediaItem } from '@/components/sections/pinterest-gallery';
import React, { useState } from 'react';

const imagesByCategory: { title: string; media: MediaItem[] }[] = [
	{
		title: 'Health Facilities',
		media: [
			{ type: 'image', src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', alt: 'Sample hospital exterior' },
			{ type: 'image', src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', alt: 'Sample medical equipment' },
			{ type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', alt: 'Sample medical facility video' },
		],
	},
	{
		title: 'Community Outreach',
		media: [
			{ type: 'image', src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd23?auto=format&fit=crop&w=600&q=80', alt: 'Sample outreach event' },
			{ type: 'video', src: 'https://www.w3schools.com/html/movie.mp4', alt: 'Sample outreach video' },
		],
	},
	{
		title: 'Staff Members',
		media: [
			{ type: 'image', src: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=600&q=80', alt: 'Sample staff' },
			{ type: 'image', src: 'https://images.unsplash.com/photo-1512070679279-c2f999098c01?auto=format&fit=crop&w=600&q=80', alt: 'Sample doctor' },
		],
	},
	{
		title: 'Health Campaigns',
		media: [
			{ type: 'image', src: 'https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=crop&w=600&q=80', alt: 'Sample campaign' },
			{ type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', alt: 'Sample campaign video' },
		],
	},
];

const allMedia: MediaItem[] = imagesByCategory.flatMap(cat => cat.media);

const GalleryPage = () => {
	const [selectedTab, setSelectedTab] = useState('All');

	const categories = ['All', ...imagesByCategory.map(cat => cat.title)];

	const displayedMedia =
		selectedTab === 'All'
			? allMedia
			: imagesByCategory.find(cat => cat.title === selectedTab)?.media || [];

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8 text-center">Gallery</h1>
			<div className="flex justify-center mb-8 gap-2 flex-wrap">
				{categories.map((cat) => (
					<button
						key={cat}
						className={`px-4 py-2 rounded-full border transition-colors duration-150 font-medium text-sm ${selectedTab === cat ? 'bg-primary text-white' : 'bg-white dark:bg-zinc-800 text-primary border-primary hover:bg-primary/10'}`}
						onClick={() => setSelectedTab(cat)}
					>
						{cat}
					</button>
				))}
			</div>
			<PinterestGallery media={displayedMedia} />
			<p className="text-center text-xs text-gray-500 mt-8">Sample images and videos are used for demonstration. Replace with your own media when ready.</p>
		</div>
	);
};

export default GalleryPage;
