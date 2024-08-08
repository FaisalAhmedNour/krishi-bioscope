export default async function getAllVideos() {
  try {
    const response = await fetch('https://krishi-bioscope-faisalahmednours-projects.vercel.app/api/videos', {
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
