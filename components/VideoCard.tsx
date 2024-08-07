import { format } from 'date-fns';
import { IRecivedVideo } from '@/app/api/videos/interface';
import React from 'react';

type VideoCardProps = { video: IRecivedVideo }

const VideoCard: React.FC<VideoCardProps> = (props) => {
  const { video } = props;
  // console.log(video.categories)

  return (
    <div className=''>
      <div className='aspect-video w-full pb-3'>
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
      <div className='mt-1'>
        <p className='font-medium text-[#606060] flex gap-1 flex-wrap'>{
          video?.categories.map((category, index) => <span
            key={index}
          >{category.name}{index + 1 !== video?.categories.length && ','}</span>)
        }</p>
        <p className='text-[#606060] text-sm font-light text-right'>{format(video?.date, 'PPP')}</p>
      </div>
    </div>
  );
};

export default VideoCard;
