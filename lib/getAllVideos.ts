export default async function getAllVideos(category?: string) {
    // console.log('category : ', category);
    // const response = await fetch('/api/videos' + (category ? `?category=${category}` : ''));
    const response = await fetch('https://krishi-bioscope-2-r8p2gn2t8-faisalahmednours-projects.vercel.app/api/videos');
    return response.json();
}
