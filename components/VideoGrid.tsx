import React from 'react';
import Link from 'next/link';
import VideoCard from './VideoCard';
import { Button } from './ui/button';
import { ChevronRight } from "lucide-react"
import { IRecivedVideo } from '@/app/api/videos/interface';
import { IRecivedCategory } from '@/app/api/categories/interface';

interface VideoGridProps {
  category?: IRecivedCategory;
  videos: IRecivedVideo[];
  isSeeMore?: boolean;
}

const VideoGrid: React.FC<VideoGridProps> = async ({ category, videos, isSeeMore }) => {
  return (
    <div className='mb-10 p-5'>
      <div className='flex justify-between items-end mb-3'>
        <h2 className='text-xl font-semibold capitalize'>{category ? category?.name : "Latest Videos"}</h2>
        <Link href={'/category/' + category?._id}>
          <Button variant="link" className={`${isSeeMore ? '' : "hidden"}`}>
            See All <ChevronRight className='text-black h-4 w-4 ' />
          </Button>
        </Link>
      </div>
      {
        videos.length > 0 ?
          <div className='grid grid-cols-3 gap-5 gap-y-10'>
            {videos?.map((video: IRecivedVideo) => (
              <VideoCard
                key={video?._id}
                video={video}
              />
            ))}
          </div> :
          <p className='text-ld font-semibold px-5'>No Vidos Found!</p>
      }
    </div>
  );
};

export default VideoGrid;
