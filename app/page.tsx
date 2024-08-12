import getAllCategories from '@/lib/getAllCategories';
import VideoGrid from '../components/VideoGrid';
import { IRecivedCategory } from './api/categories/interface';
import getAllVideos from '@/lib/getAllVideos';
import { IRecivedVideo } from './api/videos/interface';

const Home: React.FC = async () => {
  const categories = await getAllCategories();
  const videos = await getAllVideos();

  const latestVideos = videos?.data?.length > 6 ? videos?.data?.slice(0, 6) : videos.data;

  return (
    <div className='max-w-screen-xl mx-auto'>
      <VideoGrid isSeeMore={true} videos={latestVideos} />
      {
        categories?.data?.map((category: IRecivedCategory) => {
          const categoryVideos = videos ? videos?.data?.filter(
            (video: IRecivedVideo) => video?.categories?.some(
              (videoCategory: IRecivedCategory) => videoCategory?._id === category?._id
            )
          ) : []
          const categoryVideosToShow = categoryVideos?.length > 3 ? categoryVideos?.slice(0, 3) : categoryVideos;
          return <VideoGrid
            isSeeMore={true}
            key={category?._id}
            videos={categoryVideosToShow}
            category={category}
          />
        })
      }
    </div>
  );
};

export default Home;
