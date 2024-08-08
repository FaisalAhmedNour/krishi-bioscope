export default async function getAllCategories() {
    try {
        const response = await fetch('http://localhost:3000/api/categories', {
            next: {
                revalidate: 10
            }
        });

        // console.log('Response status:', response.status);
        // console.log('Response statusText:', response.statusText);

        if (!response.ok) {
            // const errorResponse = await response.text();
            // console.log('Error response:', errorResponse);

            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching videos:', error);
        // throw error; // Rethrow the error after logging it
        return []
    }
}