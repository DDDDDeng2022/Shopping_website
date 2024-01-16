const CATEGORY_URL = 'http://localhost:3000/api/category'; // 替换成你的API URL

async function getCategories() {
    try {
        const response = await fetch(CATEGORY_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const categories = await response.json();
        return categories;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
async function getCategory(category_id) {
    try {
        const response = await fetch(`${CATEGORY_URL}/${category_id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const category = await response.json();
        console.log("cate: ", category);
        return category.category;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export { getCategories, getCategory };
