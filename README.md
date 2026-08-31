# ⚡ TechStore — Smart Technology E-Commerce Platform

> A modern, full-stack-ready e-commerce web application built with **React 19**, **Vite 8**, **TailwindCSS v4**, **DaisyUI v5**, and **Firebase Authentication**. TechStore lets users browse, wishlist, and purchase the latest laptops, smartphones, wearables, and accessories — with a sleek multi-theme UI, live cart management, promo code discounts, and a complete order flow.

---

## 📋 Table of Contents

- [✨ Features Overview](#-features-overview)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [📦 Installation & Setup](#-installation--setup)
- [🔥 Firebase Configuration](#-firebase-configuration)
- [🎨 Theme System](#-theme-system)
- [🔑 Context Architecture (Global State)](#-context-architecture-global-state)
  - [CartContext](#1-cartcontext)
  - [AuthContext](#2-authcontext)
  - [WishlistContext](#3-wishlistcontext)
  - [ThemeContext](#4-themecontext)
- [🧩 Components](#-components)
- [📄 Pages & Routing](#-pages--routing)
- [🎁 Promo / Coupon Codes](#-promo--coupon-codes)
- [📦 Order Flow (End-to-End)](#-order-flow-end-to-end)
- [🗂️ localStorage Keys](#️-localstorage-keys)
- [🛠️ Available Scripts](#️-available-scripts)

---

## ✨ Features Overview

| Feature | Details |
|---|---|
| 🛍️ **Product Catalog** | Grid view of tech products with category filtering, price slider, and sort options |
| ❤️ **Wishlist** | Toggle favourites with live badge count in the Navbar |
| 🛒 **Shopping Cart** | Add/remove items, adjust quantities, persistent across browser sessions |
| 🏷️ **Promo Codes** | Apply coupon codes at checkout for discounts |
| 🔐 **Authentication** | Firebase email/password login & registration with display name |
| 🎨 **Multi-Theme UI** | 5 curated DaisyUI themes switchable from the Navbar |
| 🔍 **Quick View Modal** | View full product details without leaving the catalog page |
| 📦 **Order History** | Completed orders saved to `localStorage` and viewable in My Orders |
| ✅ **Order Success Page** | Animated confirmation with live delivery tracker and receipt |
| 🖨️ **Print Receipt** | Print-optimized order receipt directly from the success page |
| 📱 **Responsive Design** | Fully mobile-first with a collapsible hamburger Navbar |
| 🍞 **Toast Notifications** | Floating feedback banners for cart, wishlist, and coupon actions |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **Styling** | TailwindCSS v4 + DaisyUI v5 |
| **Icons** | Lucide React |
| **Routing** | React Router DOM v7 |
| **Authentication** | Firebase Auth v12 |
| **Database** | Firebase Firestore (configured, ready to use) |
| **State Management** | React Context API + `localStorage` |
| **Linter** | OxLint |
| **Fonts** | Plus Jakarta Sans, Inter (Google Fonts) |

---

## 📁 Project Structure

```
Tech Store/
├── index.html                    # HTML entry point (Google Fonts, data-theme)
├── vite.config.js                # Vite + TailwindCSS + React plugin config
├── package.json                  # Project dependencies and npm scripts
│
└── src/
    ├── main.jsx                  # App entry — wraps all Providers + Routes
    ├── App.jsx                   # Alternate root component (currently unused in routing)
    ├── Layout.jsx                # Shared layout: Navbar + <Outlet> + Footer
    ├── index.css                 # Global CSS: fonts, glassmorphism, scrollbars
    ├── firebase.js               # Firebase app initialization (Auth + Firestore)
    │
    ├── Context/                  # 🌐 Global state management (React Context API)
    │   ├── AuthContext.jsx       # Firebase auth state, login, register, orders
    │   ├── CartContext.jsx       # Cart CRUD, coupon engine, toast notifications
    │   ├── WishlistContext.jsx   # Wishlist toggle with localStorage persistence
    │   └── ThemeContext.jsx      # DaisyUI theme switcher with localStorage sync
    │
    ├── Components/               # 🧩 Reusable UI components
    │   ├── Navbar.jsx            # Header: logo, nav links, theme picker, cart/wishlist badges
    │   ├── Footer.jsx            # Footer: newsletter, links, contact, trust badges
    │   ├── Cards.jsx             # Individual product card (discount tag, wishlist, quick view)
    │   ├── ProductCard.jsx       # Re-export alias of Cards.jsx
    │   ├── ProductModal.jsx      # Quick View popup modal for product detail
    │   ├── SearchBar.jsx         # Search input with clear button
    │   └── Toast.jsx             # Floating toast notification overlay
    │
    ├── Pages/                    # 📄 Application pages
    │   ├── Welcome.jsx           # Landing/splash page (shown at `/`)
    │   ├── Home.jsx              # Main home page with hero, categories, products
    │   ├── Products.jsx          # Full product catalog with filters and sort
    │   ├── Cart.jsx              # Shopping cart with coupon code and summary
    │   ├── Checkout.jsx          # Multi-field checkout form + payment selector
    │   ├── OrderSuccess.jsx      # Post-order confirmation with delivery tracker
    │   ├── OrderSuccess.css      # Styles specific to the OrderSuccess page
    │   ├── MyOrders.jsx          # Order history page (from localStorage)
    │   ├── Login.jsx             # Firebase login form with password toggle
    │   ├── Register.jsx          # Account creation with Firebase
    │   ├── About.jsx             # Brand story, values, metrics, and CTA
    │   └── Contact.jsx           # Contact form, FAQ accordion, contact info
    │
    ├── Props/                    # 📊 Product data (static data source)
    └── assets/                   # 🖼️ Static images (product photos, etc.)
```

---

## 📦 Installation & Setup

### Prerequisites
- **Node.js** v18 or later
- **npm** v9 or later

### Steps

```bash
# 1. Clone or open the project folder
cd "e:/FSD/Projects/E-comm/Tech Store"

# 2. Install all dependencies
npm install

# 3. Start development server
npm run dev
```

Your app will be available at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

Output goes to the `/dist` folder. Preview the production build with:

```bash
npm run preview
```

---

## 🔥 Firebase Configuration

Firebase is initialized in [`src/firebase.js`](src/firebase.js).

The project uses:
- **Firebase Authentication** — Email/Password sign-in and registration
- **Firebase Firestore** — Configured and exported, ready for cloud data

The configuration is already set up with a live Firebase project (`python-fsd`). To use your own Firebase project:

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Create a new project and add a Web App
3. Copy your config object and replace the values in `src/firebase.js`:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
}
```

4. Enable **Email/Password Authentication** in the Firebase Console → Authentication → Sign-in methods.

---

## 🎨 Theme System

The theme system is powered by **DaisyUI** and managed via [`ThemeContext.jsx`](src/Context/ThemeContext.jsx).

### Available Themes

| Theme ID | Name | Description |
|---|---|---|
| `dark` *(default)* | 🌙 Cyber Dark | Electric indigo & slate |
| `synthwave` | 🌆 Neon Synth | Vibrant cyberpunk purple/pink |
| `night` | 🌌 Midnight | Deep ocean & sapphire |
| `light` | ☀️ Clean Light | Crisp modern white |
| `luxury` | ✨ Luxury Gold | Obsidian black & gold |

### How It Works

- The selected theme is stored in `localStorage` key: `techstore_theme`
- On load, it reads the saved theme and applies it via `document.documentElement.setAttribute('data-theme', theme)`
- Users can switch themes from the **Palette icon** in the Navbar

---

## 🔑 Context Architecture (Global State)

The entire global state is managed using **React Context API**. All providers are wrapped in `src/main.jsx`:

```
<ThemeProvider>
  <AuthProvider>
    <WishlistProvider>
      <CartProvider>
        <App />
        <Toast />
      </CartProvider>
    </WishlistProvider>
  </AuthProvider>
</ThemeProvider>
```

---

### 1. CartContext

**File:** [`src/Context/CartContext.jsx`](src/Context/CartContext.jsx)

Manages all shopping cart logic including quantities, coupons, and price calculations.

#### Exposed values via `useCart()`:

| Value | Type | Description |
|---|---|---|
| `cartItems` | `Array` | List of products in the cart (with `quantity`) |
| `addToCart(product, qty)` | `Function` | Adds a product or increments its quantity |
| `removeFromCart(id)` | `Function` | Removes an item by product ID |
| `increaseQuantity(id)` | `Function` | Increases quantity by 1 |
| `decreaseQuantity(id)` | `Function` | Decreases quantity by 1 (min 1) |
| `clearCart()` | `Function` | Empties cart and removes active coupon |
| `cartCount` | `Number` | Total item count (sum of all quantities) |
| `subtotal` | `Number` | Total before discount |
| `discountAmount` | `Number` | Calculated discount in ₹ |
| `coupon` | `Object \| null` | Active coupon object `{ code, type, value, label }` |
| `applyCoupon(code)` | `Function` | Validates and applies a promo code |
| `removeCoupon()` | `Function` | Removes active coupon |
| `cartTotal` | `Number` | Final amount after discount + free shipping |
| `toast` | `Object \| null` | Current active toast notification |
| `showToast(msg, type)` | `Function` | Triggers a toast (types: `success`, `info`, `error`) |
| `closeToast()` | `Function` | Dismisses the current toast |

**LocalStorage key:** `techstore_cart`, `techstore_coupon`

---

### 2. AuthContext

**File:** [`src/Context/AuthContext.jsx`](src/Context/AuthContext.jsx)

Manages Firebase Authentication state and persists order history locally.

#### Exposed values via `useAuth()`:

| Value | Type | Description |
|---|---|---|
| `currentUser` | `Firebase User \| null` | Currently logged-in user (or `null`) |
| `login(email, pwd)` | `Function` | Signs in a user with email/password |
| `register(email, pwd, name)` | `Function` | Creates an account and sets display name |
| `logout()` | `Function` | Signs out the current user |
| `orders` | `Array` | List of all past orders (from `localStorage`) |
| `addOrder(orderPayload)` | `Function` | Creates a new order, saves to localStorage, returns the created order with generated ID |

**LocalStorage key:** `techstore_orders`

---

### 3. WishlistContext

**File:** [`src/Context/WishlistContext.jsx`](src/Context/WishlistContext.jsx)

Manages the product wishlist with toggle behaviour.

#### Exposed values via `useWishlist()`:

| Value | Type | Description |
|---|---|---|
| `wishlistItems` | `Array` | Array of favourited product objects |
| `toggleWishlist(product)` | `Function` | Adds product if not in wishlist, removes if it is |
| `isInWishlist(id)` | `Function` | Returns `true` if a product ID is in the wishlist |
| `wishlistCount` | `Number` | Total number of wishlisted products |

**LocalStorage key:** `techstore_wishlist`

---

### 4. ThemeContext

**File:** [`src/Context/ThemeContext.jsx`](src/Context/ThemeContext.jsx)

Controls the active DaisyUI theme.

#### Exposed values via `useTheme()`:

| Value | Type | Description |
|---|---|---|
| `theme` | `String` | Currently active theme ID (e.g., `'dark'`) |
| `changeTheme(id)` | `Function` | Switches to the specified theme |
| `toggleLightDark()` | `Function` | Toggles between `light` and `dark` themes |
| `themes` | `Array` | List of all available theme options |

---

## 🧩 Components

### `Navbar.jsx`
The sticky top navigation bar. Features:
- Brand logo with lightning bolt icon
- Desktop navigation links (Home, Products, About, Contact)
- **Theme Picker dropdown** with all 5 themes
- **Wishlist button** with live item count badge
- **Cart button** with live item count badge + pulse animation
- **User menu** (avatar, display name, My Orders link, Sign Out) when logged in
- **Auth buttons** (Sign In / Get Started) when logged out
- **Mobile hamburger menu** with full navigation drawer

### `Cards.jsx` / `ProductCard.jsx`
Individual product card displayed in the catalog grid:
- 20% OFF discount badge
- Wishlist heart button (toggle)
- Product image with hover zoom
- Quick View overlay button
- Category label + 5-star rating
- Product name, truncated description
- Price with original MRP strikethrough
- Free Delivery badge
- **Add to Cart** / **In Cart** button with reactive state

### `ProductModal.jsx`
Full-screen product quick-view popup:
- Product image with hover zoom
- Category, wishlist heart, product title
- Rating (5 stars) + review count + In Stock badge
- Description, discounted price, savings amount
- Free shipping + 7-day replacement perks
- Quantity selector (+/-)
- **Add to Cart** and **Buy Now** buttons
- Closes on backdrop click or `X` button

### `SearchBar.jsx`
Simple search input with:
- Search icon prefix
- Controlled text input
- Live clear (×) button when input has text

### `Toast.jsx`
Floating feedback notification system:
- Renders the active `toast` from `CartContext`
- Positioned fixed bottom-right
- Auto-dismisses after 3 seconds
- Supports `success` (green), `info` (blue), `error` (red) types
- Manual dismiss button

### `Footer.jsx`
Full-featured footer with:
- Newsletter subscription with success feedback
- Explore links (Home, Products, About, Contact)
- Category quick-links with URL routing
- Contact details (email, phone, location)
- Trust badges (Verified Brands, SSL Encrypted)
- Copyright and policy links

---

## 📄 Pages & Routing

All routes are defined in [`src/main.jsx`](src/main.jsx).

| Route | Page Component | Description |
|---|---|---|
| `/` | `Welcome.jsx` | Landing page (no Navbar/Footer) |
| `/login` | `Login.jsx` | Firebase login form |
| `/register` | `Register.jsx` | Account creation form |
| `/home` | `Home.jsx` | Main homepage with hero + categories |
| `/products` | `Products.jsx` | Full product catalog |
| `/products?category=X` | `Products.jsx` | Auto-filtered by category |
| `/about` | `About.jsx` | Brand story and values |
| `/contact` | `Contact.jsx` | Contact form and FAQs |
| `/cart` | `Cart.jsx` | Shopping cart page |
| `/checkout` | `Checkout.jsx` | Delivery + payment form |
| `/order-success` | `OrderSuccess.jsx` | Order confirmation (no Layout) |
| `/my-orders` | `MyOrders.jsx` | Order history |

Routes under `/` → `/home`, `/products`, `/about`, `/contact`, `/cart`, `/checkout`, and `/my-orders` are wrapped in `Layout.jsx` which adds **Navbar** and **Footer**.

`/`, `/login`, `/register`, and `/order-success` render **without** the shared Layout.

---

## 🎁 Promo / Coupon Codes

Applied in the **Cart** page using the promo input field.

| Code | Type | Discount |
|---|---|---|
| `TECH10` | Percentage | 10% off subtotal |
| `WELCOME500` | Flat amount | ₹500 off subtotal |
| `SMART20` | Percentage | 20% off subtotal |

> Coupons are validated in [`CartContext.jsx`](src/Context/CartContext.jsx) → `applyCoupon()` function. Coupons reset when the cart is cleared after a successful order.

---

## 📦 Order Flow (End-to-End)

Here is the complete journey from adding to cart to viewing the order:

```
1. Browse Products  (/products)
        ↓
   Add to Cart  →  CartContext.addToCart()
        ↓
2. View Cart  (/cart)
   - Adjust quantities
   - Apply promo code
   - Review subtotal / discount / total
        ↓
3. Checkout  (/checkout)
   - Fill shipping form (name, email, phone, address, city, state, pincode)
   - Select payment method (COD / UPI / Card)
   - Click "Place Order"
        ↓
   Checkout.handleSubmit()
   → AuthContext.addOrder(payload)  →  Saves to localStorage (techstore_orders)
   → Saves last order to sessionStorage + localStorage (techstore_last_order)
   → CartContext.clearCart()
   → navigate('/order-success', { state: { order } })
        ↓
4. Order Success  (/order-success)
   - Live delivery progress tracker (4 stages)
   - Luxury order receipt with items, address, total
   - Copy Order ID, Print Receipt
   - Links to My Orders / Products / Home
        ↓
5. My Orders  (/my-orders)
   - Lists all past orders from localStorage (techstore_orders)
   - Each order shows: Order ID, items, delivery address, total, status
```

---

## 🗂️ localStorage Keys

The app uses the following `localStorage` keys to persist data across sessions:

| Key | Content | Managed By |
|---|---|---|
| `techstore_cart` | Array of cart items with quantities | `CartContext` |
| `techstore_coupon` | Active coupon object `{ code, type, value, label }` | `CartContext` |
| `techstore_wishlist` | Array of wishlisted product objects | `WishlistContext` |
| `techstore_theme` | Active theme ID string (e.g., `"dark"`) | `ThemeContext` |
| `techstore_orders` | Array of all placed order objects | `AuthContext` |
| `techstore_last_order` | The most recently placed order (for fallback on OrderSuccess) | `Checkout.jsx` |

---

## 🛠️ Available Scripts

Run these commands from inside the `Tech Store/` project folder:

```bash
# Start development server with Hot Module Replacement
npm run dev

# Build optimized production bundle (output: /dist)
npm run build

# Preview the production build locally
npm run preview

# Run OxLint for code quality checks
npm run lint
```

---

## 📝 Notes for Developers

1. **Product data** is stored as static JS arrays inside the `src/Props/` folder and passed as props to the product grid components.

2. **No backend server** is needed — all state is managed via React Context + `localStorage`. Firebase is used only for Authentication.

3. **Category routing** works via URL query parameters: `/products?category=Laptops`. The `Products.jsx` page reads `useSearchParams()` to auto-filter on load.

4. **Order data is not stored in Firebase Firestore** by default — orders are saved to `localStorage`. To persist orders in the cloud, extend `AuthContext.addOrder()` to call `setDoc()` on the Firestore `db` instance (already exported from `firebase.js`).

5. **Theming** is fully controlled by DaisyUI `data-theme` attributes. All colors and component styles automatically update when the theme changes.

---

> Built with ❤️ using React + Vite + TailwindCSS + DaisyUI + Firebase
