"use client"

import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { Button } from './ui/button';
import { ChevronRight } from "lucide-react"
import Link from 'next/link';
import axios from 'axios';

interface VideoGridProps {
  category: string;
  isSeeMore?: boolean;
}

const VideoGrid: React.FC<VideoGridProps> = ({ category, isSeeMore }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get('/api/videos');
      console.log(response)
      setVideos(response.data.data);
    };

    fetchVideos();
  }, [category]);

  return (
    <div className='mb-10 p-5'>
      <div className='flex justify-between items-end mb-3'>
        <h2 className='text-xl font-semibold capitalize'>{category === '' ? "Latest Videos" : category}</h2>
        <Link href={'/' + category}>
          <Button variant="link" className={`${isSeeMore ? '' : "hidden"}`}>
            See All <ChevronRight className='text-black h-4 w-4 ' />
          </Button>
        </Link>
      </div>
      <div className='grid grid-cols-3 gap-5 gap-y-10'>
        {videos?.map((video) => (
          <VideoCard
            key={video?._id}
            video={video}
          // title={video.title}
          // link={video.link}
          // date={new Date(video.date).toLocaleDateString()}
          // category={video.category.name}
          />
        ))}
        {/* <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard /> */}
      </div>
    </div>
  );
};

export default VideoGrid;
