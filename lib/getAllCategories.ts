export default async function getAllCategories() {
    const response = await fetch('https://krishi-bioscope-2-r8p2gn2t8-faisalahmednours-projects.vercel.app/api/categories');
    return response.json();
}