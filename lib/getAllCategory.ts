import axios from "axios";

export default async function getAllCategory() {
    const response = await fetch('http://localhost:3000/api/categories');
    return response.json();
}