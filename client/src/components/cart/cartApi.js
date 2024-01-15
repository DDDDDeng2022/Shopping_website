const CART_URL = 'http://localhost:3000/api/cart/user'; // 替换成你的API URL

export const updateCart = async (userId, productId, type) => {
    try {
        let url = "";
        if (type === "add") {
            url = `${CART_URL}/${userId}/product/${productId}/add`;
        } else if (type === "decrease") {
            url = `${CART_URL}/${userId}/product/${productId}/decrease`;
        }
        else if (type === "remove") {
            url = `${CART_URL}/${userId}/product/${productId}/remove`;
        }
        else {
            url = `${CART_URL}/${userId}/clear`;
        }
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to increase item quantity');
        }
        const updatedCart = await response.json();
        return updatedCart.cart;
    } catch (error) {
        console.error('Increase item failed:', error);
    }
};