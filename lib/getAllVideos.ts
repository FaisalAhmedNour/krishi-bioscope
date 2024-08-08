export default async function getAllVideos() {
  try {
    const response = await fetch('http://localhost:3000/api/videos', {
      next: {
        revalidate: 10
      }
    });
    // console.log(response)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching videos:', error);
    // throw error; // Rethrow the error after logging it
    return []
  }
}
