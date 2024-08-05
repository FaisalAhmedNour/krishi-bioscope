import VideoGrid from '../components/VideoGrid';
import getAllCategory from '@/lib/getAllCategory';

const Home: React.FC = async () => {
  const categories = await getAllCategory();

  return (
    <div className='max-w-screen-xl mx-auto'>
      <VideoGrid isSeeMore={true} category='all' />
      {
        categories.data.map((category) => (
          <VideoGrid
            isSeeMore={true}
            key={category?._id}
            category={category?.name}
          />
        ))
      }
    </div>
  );
};

export default Home;
