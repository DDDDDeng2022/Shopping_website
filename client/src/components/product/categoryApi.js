const CATEGORY_URL = 'http://localhost:3000/api/category'; // 替换成你的API URL

async function getCategories() {
    try {
        const response = await fetch(CATEGORY_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const categories = await response.json();
        console.log("categories api: ", categories);
        return categories;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export { getCategories };
