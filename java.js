let cart = [];

        // Function to add items to the cart
        function addToCart(name, price) {
            cart.push({ name, price });
            alert(name + " added to the cart!");
        }

        // Function to view the cart
        function viewCart() {
            const cartItems = document.getElementById("cart-items");
            cartItems.innerHTML = "";

            let total = 0;
            cart.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.name + " - R" + item.price;
                cartItems.appendChild(li);
                total += item.price;
            });

            document.getElementById("cart-total").textContent = total;
            document.getElementById("cart").style.display = "block";
        }

        // Function to close the cart
        function closeCart() {
            document.getElementById("cart").style.display = "none";
        }

        // Function to search products
        function searchProducts() {
            const input = document.getElementById("search-input").value.toLowerCase();
            const products = document.querySelectorAll(".product-item");

            products.forEach(product => {
                const name = product.getAttribute("data-name").toLowerCase();
                product.style.display = name.includes(input) ? "block" : "none";
            });
        }

        // Function for checkout
        function checkout() {
            if (cart.length === 0) {
                alert("Your cart is empty!");
                return;
            }

            alert("Thank you for your purchase!");
            cart = [];
            viewCart(); 
        }

        var card = document.getElementById("card");

function openRegister() {
    card.style.transform = "rotateY(-180deg)";
}

function openLogin() {
    card.style.transform = "rotateY(0deg)";
}

var users = {};

// Function to validate email format
function isValidEmail(email) {
    return email.includes('@') && email.endsWith('.com');
}

// Function to validate password complexity
function isValidPassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return password.length >= minLength && hasUpperCase && hasLowerCase && hasDigits && hasSpecialChar;
}


function registerUser() {
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;

    if (!isValidEmail(email)) {
        document.getElementById("registerError").innerText = "Email must contain '@' and end with '.com'.";
        return false;
    }

    if (email in users) {
        document.getElementById("registerError").innerText = "User already exists!";
        return false;
    }

    if (!isValidPassword(password)) {
        document.getElementById("registerError").innerText = "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a digit, and a special character.";
        return false;
    }

    users[email] = password;
    alert("Registration successful! You can now log in.");
    openLogin();
    return false;
}

// Login validation function
function validateLogin() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    if (!isValidEmail(email)) {
        document.getElementById("loginError").innerText = "Email must contain '@' and end with '.com'.";
        return false;
    }

    if (users[email] && users[email] === password) {
        
        window.location.href = "shop.html";
        return false;
    } else {
        document.getElementById("loginError").innerText = "Invalid email or password.";
        return false;
    }
}
