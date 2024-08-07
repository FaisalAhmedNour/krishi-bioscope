export default async function getAllCategories() {
    const response = await fetch('https://krishi-bioscope-evv6laz7l-faisalahmednours-projects.vercel.app/api/categories',
        {cache: 'no-store'});
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}