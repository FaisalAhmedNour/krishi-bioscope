import { IVideo } from '@/app/api/videos/interface';
import { format } from 'date-fns';
import React from 'react';

type VideoCardProps = Partial<IVideo>

const VideoCard: React.FC<VideoCardProps> = (props) => {
  const { video } = props
  return (
    <div className=''>
      <div className='aspect-video w-full pb-3 '>
        {/* <h3>{title}</h3>
      <iframe width="560" height="315" src={link} title={title} frameBorder="0" allowFullScreen></iframe>
      <p>{date}</p>
      <p>{category}</p> */}
        <iframe
          className="w-full h-full rounded-xl"
          // src={"https://www.youtube.com/embed/TC5R6UYm9tQ?si=jpafqGUOJBp4rVwH"}
          src={video?.link}
          title={"title"}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <h3 className='font-bold text-[17px]'>{video?.title}</h3>
      <div className='flex justify-between items-end mt-1'>
        <p className='font-medium text-[#606060]'>{video?.categories?.[0]?.name}</p>
        <p className='text-[#606060] text-sm font-light'>{format(video?.date, 'PPP')}</p>
      </div>
    </div>
  );
};

export default VideoCard;
