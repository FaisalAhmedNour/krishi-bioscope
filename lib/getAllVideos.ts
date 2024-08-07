export default async function getAllVideos(category?: string) {
    // console.log('category : ', category);
    // const response = await fetch('/api/videos' + (category ? `?category=${category}` : ''));
    const response = await fetch('http://localhost:3000/api/videos');
    return response.json();
}
