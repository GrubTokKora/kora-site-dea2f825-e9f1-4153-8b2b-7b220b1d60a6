# Site index · format 2
Structure and the names of what each page offers. Values that change often — prices, hours, phone,
address — and body copy are deliberately not recorded here; read the page itself for those.

## index.html → /
title: Universe Bakes & Cakes | Premium Bakery in Nizamabad
purpose: Home page of Universe Bakes & Cakes, a premium bakery in Nizamabad offering cakes, pastries, biscuits, starters, sandwiches, burgers, snacks, rolls, and desserts with online ordering via Zomato and Swiggy.
sections:
- `#home` — hero greeting and statistics
- `#about` — business history and features
- `#menu` "Delicious Offerings" — bakery product and dish categories: Cakes, Pastries, Biscuits, Starters, Sandwiches & Burgers, Snacks, Rolls, Desserts
- `#order` "Get It Delivered" — online delivery platforms: Zomato, Swiggy
- `#gallery` "Sweet Moments" — bakery photo gallery
- `#reviews` "What Our Customers Say" — customer testimonials
- `#faq` "Frequently Asked Questions" — frequently asked questions: Do you take custom cake orders?, What are your most popular items?, Do you offer eggless options?, What are your store hours?
- `#contact` "Visit or Call Us" — contact details and map
- site footer links: Home, About Us, Menu, Contact, Zomato, Swiggy, Privacy Policy, Terms of Service
also: The business name 'Universe Bakes & Cakes' and phone number appear in multiple headings, metadata blocks, and structured-data JSON-LD blocks across the page.
also: The business address and coordinates appear in structured-data blocks and the contact section.
also: Menu items and categories are rendered dynamically via a client-side JavaScript object (menuData) rather than static HTML markup.
also: Multiple structured-data JSON-LD blocks provide business details, ratings, reviews, and FAQs.

## support files
Files that are not pages. A line marked [content] holds words or data a visitor reads, so a
change to the site's content can land there; the rest only make the site work or look right.
- `robots.txt` — 78 bytes — too small to hold content
- `sitemap.xml` — XML sitemap listing the website URLs for search engines

## shared (every page)
The header, navigation, mobile menu and footer are propagated from index.html to every other page by
`shell_propagation`. A change to any of them is made on index.html alone and copied automatically.
