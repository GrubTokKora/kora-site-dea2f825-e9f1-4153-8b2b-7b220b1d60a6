const menuData = {
    categories: [
        {
            name: "Cakes",
            items: [
                { name: "White Forest Cake", price: 470, veg: true },
                { name: "Choco Chips Cake", price: 470, veg: true },
                { name: "Butterscotch Cake", price: 400, veg: true },
                { name: "Black Forest Cake", price: 400, veg: true },
                { name: "Chocolate Cake", price: 470, veg: true },
                { name: "Dark Chocolate Cake", price: 1080, veg: true },
                { name: "Red Velvet Cake", price: 540, veg: true },
                { name: "Mixed Fruit Cake", price: 540, veg: true },
                { name: "Pineapple Cake", price: 340, veg: true },
                { name: "Pista Cake", price: 470, veg: true },
                { name: "Almond Cake", price: 470, veg: true },
                { name: "Strawberry Cake", price: 470, veg: true },
                { name: "Choco Rice Cake", price: 470, veg: true },
                { name: "Chocolate Sandwich Cake", price: 540, veg: true },
                { name: "Chocolate Cheese Roll Cake", price: 540, veg: true },
                { name: "Kiwi Cake", price: 540, veg: true },
                { name: "Litchi Cake", price: 540, veg: true },
                { name: "Blueberry Cake", price: 540, veg: true },
                { name: "Blackberry Cake", price: 540, veg: true },
                { name: "Blackcurrant Cake", price: 540, veg: true },
                { name: "Sponge Cake", price: 220, veg: true },
                { name: "Rich Plum Cake", price: 270, veg: true },
                { name: "Plum Cake", price: 245, veg: true }
            ]
        },
        {
            name: "Pastries",
            items: [
                { name: "Pineapple Pastry", price: 54, veg: true },
                { name: "Butterscotch Pastry", price: 54, veg: true },
                { name: "Black Forest Pastry", price: 68, veg: true },
                { name: "Chocolate Pastry", price: 95, veg: true },
                { name: "Choco Chips Pastry", price: 95, veg: true },
                { name: "Dark Chocolate Pastry", price: 95, veg: true },
                { name: "Red Velvet Pastry", price: 95, veg: true },
                { name: "Italian Chocolate Pastry", price: 95, veg: true },
                { name: "Strawberry Pastry", price: 68, veg: true },
                { name: "Pista Pastry", price: 95, veg: true },
                { name: "White Forest Pastry", price: 95, veg: true },
                { name: "Almond Pastry", price: 95, veg: true },
                { name: "Choco Rice Pastry", price: 100, veg: true },
                { name: "Dry Fruit Pastry", price: 95, veg: true },
                { name: "Chocolate Sandwich Pastry", price: 110, veg: true },
                { name: "Mixed Fruit Pastry", price: 110, veg: true },
                { name: "Kiwi Pastry", price: 81, veg: true },
                { name: "Litchi Pastry", price: 81, veg: true },
                { name: "German Chocolate Pastry", price: 95, veg: true },
                { name: "Oreo Chocolate Pastry", price: 95, veg: true }
            ]
        },
        {
            name: "Biscuits",
            items: [
                { name: "Salt Biscuits", price: 100, veg: true },
                { name: "Chand Biscuits", price: 110, veg: true },
                { name: "Badam Biscuits", price: 110, veg: true },
                { name: "Choco Chip Biscuits", price: 110, veg: true },
                { name: "Vanilla Biscuits", price: 110, veg: true },
                { name: "Pista Biscuits", price: 110, veg: true },
                { name: "Chocolate Kaju Biscuits", price: 110, veg: true },
                { name: "Butterscotch Biscuits", price: 110, veg: true },
                { name: "Almond Biscuits", price: 100, veg: true },
                { name: "Fruit Biscuits", price: 100, veg: true },
                { name: "Coconut Badam Biscuits", price: 110, veg: true },
                { name: "Fruit Cake Rusk Biscuits", price: 110, veg: true },
                { name: "Eggless Osmania Biscuits", price: 100, veg: true },
                { name: "Zeera Biscuits", price: 110, veg: true },
                { name: "Naankhatai", price: 30, veg: true }
            ]
        },
        {
            name: "Starters",
            subcategories: [
                {
                    name: "Veg Starters",
                    items: [
                        { name: "Veg Manchuria", price: 81, veg: true },
                        { name: "Veg 65", price: 81, veg: true },
                        { name: "Paneer 65", price: 88, veg: true }
                    ]
                },
                {
                    name: "Non Veg Starters",
                    items: [
                        { name: "Chicken Tikka", price: 95, veg: false },
                        { name: "Chicken 65", price: 95, veg: false },
                        { name: "Chicken Manchuria", price: 95, veg: false },
                        { name: "KFC Leg Piece", price: 81, veg: false },
                        { name: "Drumstick", price: 81, veg: false },
                        { name: "Chicken Kebab", price: 95, veg: false },
                        { name: "KFC Chicken Wings", price: 81, veg: false },
                        { name: "Lemon Chicken", price: 95, veg: false }
                    ]
                }
            ]
        },
        {
            name: "Burgers & Sandwiches",
            subcategories: [
                {
                    name: "Sandwiches",
                    items: [
                        { name: "Veg Sandwich", price: 54, veg: true },
                        { name: "Veg Cheese Sandwich", price: 68, veg: true },
                        { name: "Veg Grilled Sandwich", price: 68, veg: true },
                        { name: "Veg Cheese Grilled Sandwich", price: 81, veg: true },
                        { name: "Chicken Roast Sandwich", price: 75, veg: false },
                        { name: "Chicken Sandwich", price: 68, veg: false },
                        { name: "Chicken Cheese Sandwich", price: 81, veg: false },
                        { name: "Chicken Grilled Sandwich", price: 95, veg: false },
                        { name: "Chicken Cheese Grilled Sandwich", price: 108, veg: false },
                        { name: "Veg Roast Sandwich", price: 60, veg: true }
                    ]
                },
                {
                    name: "Burgers",
                    items: [
                        { name: "Veg Burger", price: 68, veg: true },
                        { name: "Veg Cheese Burger", price: 81, veg: true },
                        { name: "Plain Cheese Burger", price: 81, veg: true },
                        { name: "Veg Manchurian Burger", price: 81, veg: true },
                        { name: "Paneer Cheese Burger", price: 95, veg: true },
                        { name: "Chicken Burger", price: 81, veg: false },
                        { name: "Chicken Cheese Burger", price: 95, veg: false }
                    ]
                }
            ]
        },
        {
            name: "Snacks",
            items: [
                { name: "Veg Puff", price: 27, veg: true },
                { name: "Paneer Puff", price: 34, veg: true },
                { name: "Veg Hot Dog", price: 65, veg: true },
                { name: "Veg Cheese Hot Dog", price: 75, veg: true },
                { name: "Plain Cheese Hot Dog", price: 68, veg: true },
                { name: "Veg Manchurian Hot Dog", price: 81, veg: true },
                { name: "Veg Spring Roll", price: 50, veg: true },
                { name: "Veg Toast", price: 54, veg: true },
                { name: "Egg Puff", price: 27, veg: false },
                { name: "Chicken Puff", price: 34, veg: false },
                { name: "Chicken Hot Dog", price: 68, veg: false },
                { name: "Chicken Spring Roll", price: 60, veg: false },
                { name: "Chicken Toast", price: 65, veg: false },
                { name: "Samosa", price: 25, veg: true },
                { name: "French Fries", price: 81, veg: true },
                { name: "Masala Fries", price: 95, veg: true },
                { name: "Butter Chicken Slice", price: 65, veg: false }
            ]
        },
        {
            name: "Rolls",
            items: [
                { name: "Veg Cheese Roll", price: 54, veg: true },
                { name: "Paneer Cheese Roll", price: 80, veg: true },
                { name: "Chicken Cheese Roll", price: 81, veg: false },
                { name: "Paneer Frankie", price: 85, veg: true }
            ]
        },
        {
            name: "Desserts",
            items: [
                { name: "Butterscotch Pudding", price: 68, veg: true },
                { name: "Pineapple Pudding", price: 68, veg: true },
                { name: "Strawberry Pudding", price: 68, veg: true },
                { name: "Chocolate Pudding", price: 68, veg: true }
            ]
        }
    ]
};

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
}

function createMenuItemCard(item, index = 0) {
    const badgeClass = item.veg ? "veg" : "non-veg";
    const badgeText = item.veg ? "VEG" : "NON-VEG";
    return `
        <article class="menu-card menu-card-animate" style="--i:${index}">
            <div class="flex items-center justify-between gap-3">
                <h4 class="font-semibold text-zinc-800">${item.name}</h4>
                <p class="price-tag">₹${item.price}</p>
            </div>
            <span class="badge ${badgeClass} mt-2">${badgeText}</span>
        </article>
    `;
}

function buildCategoryHTML(category) {
    const menuContent = document.getElementById("menuContent");
    if (category.items) {
        return `
            <div class="menu-grid">
                ${category.items.map((item, idx) => createMenuItemCard(item, idx)).join("")}
            </div>
        `;
    }

    if (category.subcategories) {
        return `
            <div>
                ${category.subcategories
                    .map(
                        (subcategory) => `
                            <section>
                                <h3 class="subcategory-title">${subcategory.name}</h3>
                                <div class="menu-grid">
                                    ${subcategory.items.map((item, idx) => createMenuItemCard(item, idx)).join("")}
                                </div>
                            </section>
                        `
                    )
                    .join("")}
            </div>
        `;
    }
}

function renderCategory(category, animate = false) {
    const menuContent = document.getElementById("menuContent");
    if (!menuContent) return;

    const nextHTML = buildCategoryHTML(category);
    if (!animate) {
        menuContent.innerHTML = nextHTML;
        return;
    }

    // Switch animation: fade/slide out, replace HTML, then cards animate in.
    menuContent.classList.add("menu-switching");
    setTimeout(() => {
        menuContent.innerHTML = nextHTML;
        menuContent.classList.remove("menu-switching");
    }, 160);
}

function renderMenuTabs() {
    const menuTabs = document.getElementById("menuTabs");
    if (!menuTabs) return;

    menuTabs.innerHTML = menuData.categories
        .map(
            (category, index) => `
                <button class="menu-tab ${index === 0 ? "active" : ""}" data-category="${category.name}">
                    ${category.name}
                </button>
            `
        )
        .join("");

    menuTabs.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLButtonElement)) return;
        if (!target.matches(".menu-tab")) return;

        const categoryName = target.dataset.category;
        const selectedCategory = menuData.categories.find((category) => category.name === categoryName);
        if (!selectedCategory) return;

        menuTabs.querySelectorAll(".menu-tab").forEach((tab) => tab.classList.remove("active"));
        target.classList.add("active");
        renderCategory(selectedCategory, true);
    });

    renderCategory(menuData.categories[0], false);
}

function setupRevealAnimations() {
    const revealItems = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );
    revealItems.forEach((item) => observer.observe(item));
}

renderMenuTabs();
setupRevealAnimations();
lucide.createIcons();
