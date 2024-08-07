import { IRecivedCategory } from "@/app/api/categories/interface";
import { IRecivedVideo } from "@/app/api/videos/interface";
import VideoGrid from "@/components/VideoGrid";
import getAllCategories from "@/lib/getAllCategories";
import getAllVideos from "@/lib/getAllVideos";

const SingleCategory = async ({ params }: { params: { category: string } }) => {
    const { category } = params;
    
    const videos = await getAllVideos();
    const categories = await getAllCategories();

    const categoryVideos = videos.data.filter(
        (video: IRecivedVideo) => video.categories.some(
            (videoCategory: IRecivedCategory) => videoCategory._id === category
        )
    );

    const filterCategory = categories.data.find((cat: IRecivedCategory) => cat._id === category)

    return (
        <div>
            <VideoGrid category={filterCategory} videos={categoryVideos} isSeeMore={false} />
        </div>
    )
}

export default SingleCategory;
