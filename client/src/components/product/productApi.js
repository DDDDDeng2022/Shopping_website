const PRODUCT_URL = 'http://localhost:3000/api/product';

//获取所有商品信息
async function getProducts() {
    try {
        const response = await fetch(PRODUCT_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        products.sort((a, b) => a.price - b.price);
        return products;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}


//获取一个商品
async function getProductById(productId) {
    try {

        const response = await fetch(`${PRODUCT_URL}/${productId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// 更新产品信息
async function updateProduct(productId, productData) {
    try {
        const response = await fetch(`${PRODUCT_URL}/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
// 增加产品
async function addProduct(productData) {
    try {
        const response = await fetch(PRODUCT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
// 删除商品
async function deleteProduct(productId) {
    try {
        const response = await fetch(`${PRODUCT_URL}/${productId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
//上传图片
const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
        const response = await fetch(`${PRODUCT_URL}/upload`, {
            method: 'POST',
            body: formData,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.imageUrl;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export { updateProduct, addProduct, deleteProduct, uploadImage, getProductById, getProducts };
