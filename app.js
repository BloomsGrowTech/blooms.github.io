import { get, put } from 'axios';

const storeId = 98501509;
const publicToken = 'Bearer public_PUb7yJJDWc5RYj1nL7aXHJFT5j5bn2hW';
const privateToken = '';
const groupID = '23865254';
const products = ['625285756','625238809', '625270554', '625285757'];
const categoryIDs = ['163181566','163184815','163191832'];
// Function to apply discounts for a specific customer group
async function applyDiscountsForCategories() {
    try {
        // Iterate over category IDs
        for (const categoryId of categoryIDs) {
            // Fetch products from Ecwid based on category
            const productsResponse = await get(`https://app.ecwid.com/api/v3/${storeId}/products`, {
                params: {
                    token: publicToken,
                    categoryId: categoryId // Include category ID in the request
                }
            });
            const products = productsResponse.data.items;

            // Iterate over products
            for (const product of products) {
                // Check if the product is in the list of products to apply discount to
                if (!productsToDiscount.includes(product.id)) {
                    continue;
                }

                // Calculate discounted price (wholesale cost)
                const discountedPrice = parseFloat(product.wholesalePrice);

                // Update product price in Ecwid
                await put(`https://app.ecwid.com/api/v3/${storeId}/products/${product.id}`, {
                    price: discountedPrice
                }, {
                    params: {
                        token: privateToken
                    }
                });

                console.log(`Discount applied for product ID ${product.id}. New price: ${discountedPrice}`);
            }

            console.log(`Discounts applied successfully for products in category ID ${categoryId}.`);
        }
    } catch (error) {
        console.error('Error applying discounts:', error.response ? error.response.data : error.message);
    }
}


// Call function to apply discounts when page loads
window.onload = function() {
    applyDiscountsForCustomerGroup();
};
