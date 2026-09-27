let cart = 0;


// Add to Cart

function addToCart() {

    cart++;

    document.getElementById("cartCount").innerText = cart;

    alert("☕ Item added to cart!");
}


// Cart

function showCart() {

    if (cart === 0) {
        alert("Your cart is empty!");
    } else {
        alert("🛒 You have " + cart + " item(s) in your cart.");
    }
}


// Search Menu

function searchMenu() {

    let input = document.getElementById("search").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        let name = card.querySelector("h3").innerText.toLowerCase();

        if (name.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}