// Add item to cart
function addToCart(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart successfully!");
}


// Display cart items
function displayCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartBody = document.getElementById("cartBody");
    let totalAmount = document.getElementById("totalAmount");

    if (!cartBody) return;

    cartBody.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        cartBody.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>₹${item.price}</td>
                <td>
                    <button class="btn btn-danger btn-sm"
                        onclick="removeItem(${index})">
                        Remove
                    </button>
                </td>
            </tr>
        `;
    });

    totalAmount.innerHTML = "₹" + total;
}


// Remove item
function removeItem(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}


// Clear cart
function clearCart() {

    localStorage.removeItem("cart");

    displayCart();

    alert("Cart cleared successfully!");
}


// Place order
function placeOrder() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    alert("Order placed successfully!");

    localStorage.removeItem("cart");

    displayCart();
}


// Auto load cart page
window.onload = function () {

    displayCart();

};