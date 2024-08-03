'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';
import VideoGrid from '../components/VideoGrid';
import { Navbar } from '@/components/Navbar';
import Category from './category/page';

const Home: React.FC = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('/api/categories');
      console.log(response)
      setCategories(response.data.data);
    };

    fetchCategories();
  }, []);

  return (
    <div className='max-w-screen-xl mx-auto'>
      <Navbar />
      <VideoGrid isSeeMore={true} category='' />
      {
        categories.map((Category) => <VideoGrid key={Category?._id} isSeeMore={true} category={Category?.name} />)
      }
    </div>
  );
};

export default Home;
