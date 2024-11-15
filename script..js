document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector(".search-box button");
    const searchInput = document.querySelector(".search-box input[type='text']");
    const minPriceInput = document.querySelector(".search-box input[placeholder='Min $']");
    const maxPriceInput = document.querySelector(".search-box input[placeholder='Max $']");
    const categorySelect = document.querySelector(".search-box select");
    const destinationItems = document.querySelectorAll(".destination");

    searchButton.addEventListener("click", (e) => {
        e.preventDefault();
        filterDestinations();
    });

    function filterDestinations() {
        const keyword = searchInput.value.toLowerCase();
        const minPrice = parseInt(minPriceInput.value) || 0;
        const maxPrice = parseInt(maxPriceInput.value) || Infinity;
        const category = categorySelect.value;

        destinationItems.forEach(destination => {
            const destinationName = destination.querySelector("p").textContent.toLowerCase();
            const matchesKeyword = keyword ? destinationName.includes(keyword) : true;
            const matchesCategory = category === "All categories" || destination.dataset.category === category;
            const matchesPrice = minPrice <= (destination.dataset.price || 0) && (destination.dataset.price || Infinity) <= maxPrice;

            if (matchesKeyword && matchesCategory && matchesPrice) {
                destination.style.display = "block";
            } else {
                destination.style.display = "none";
            }
        });
    }
});

const navbarToggle = document.createElement("button");
navbarToggle.textContent = "☰";
navbarToggle.className = "navbar-toggle";
document.querySelector(".header").appendChild(navbarToggle);

navbarToggle.addEventListener("click", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("show");
});

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

function displayGreeting() {
    const heroText = document.querySelector(".hero-text p");
    const hour = new Date().getHours();
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "Selamat Pagi";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Selamat Siang";
    } else if (hour >= 18 && hour < 22) {
        greeting = "Selamat Malam";
    } else {
        greeting = "Selamat Istirahat";
    }
    
    heroText.textContent = `${greeting}, Selamat Datang di Wisata Sumatra!`;
}

displayGreeting();