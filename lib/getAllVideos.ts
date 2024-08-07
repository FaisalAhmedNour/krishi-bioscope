export default async function getAllVideos() {
        const response = await fetch('https://krishi-bioscope-evv6laz7l-faisalahmednours-projects.vercel.app/api/videos',
          {cache: 'no-store'}
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
}
