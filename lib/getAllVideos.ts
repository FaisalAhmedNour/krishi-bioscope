export default async function getAllVideos() {
    try {
        const response = await fetch('https://krishi-bioscope-evv6laz7l-faisalahmednours-projects.vercel.app/api/videos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data || [];
      } catch (error) {
        console.error('Failed to fetch data:', error);
        return [];
      }
}
