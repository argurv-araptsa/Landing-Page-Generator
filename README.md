# Smart Landing Page Generator

A robust front-end web application that dynamically generates, previews, and exports tailor-made landing pages for various business categories in real time. 

The application allows users to customize content and imagery, instantly visualizes changes across industry-specific layouts, persists progress, and exports clean, production-ready code.

---

##  Features

* **Real-Time Synchronized Editing:** Instant injection of business name and description across multiple templates without page reloads.
* **Dynamic Theme & Layout Switching:** Smooth transition between industry-specific designs (Restaurant, Service Business, Hotel) using JavaScript and CSS data attributes.
* **Custom Hero Image Uploads:** Users can upload their own images using the FileReader API to instantly preview them in the layouts.
* **Smart Asset Fallback Mechanism:** Built-in safeguard that automatically restores beautiful default local/remote assets if a user removes their custom image, ensuring the design never breaks.
* **Local State Persistence:** Integrates LocalStorage to save user inputs and uploaded image states, preventing data loss upon browser refresh.
* **Code Export Engine:** Generates and downloads a clean, standalone, fully-styled HTML file of the customized template for production use.

---

##  Technologies Used

* **HTML5:** Semantic architecture for dynamic document structures.
* **CSS3:** Advanced layout design utilizing Flexbox, CSS Grid, custom variables, and responsive design principles.
* **JavaScript (Vanilla JS):** Modern ES6+ JavaScript for state management, file processing, DOM manipulation, and dynamic HTML injection.

---

##  Technical Concepts Demonstrated

This project showcases production-level front-end development patterns:
* **State Preservation:** Handling client-side data caching using JSON serialization in LocalStorage.
* **Asynchronous File Handling:** Converting user-uploaded image files into base64 Data URLs via the `FileReader` API for on-the-fly local rendering.
* **Resilient UI Architecture:** Implementing fallback conditions to handle missing inputs or removed assets gracefully.
* **Component-Oriented Template String Management:** Using clean JavaScript template literals to house and switch complex multi-section HTML structures dynamically.
* **Dynamic Stylesheet Scraping:** Programmatic collection of active CSS rules to compile a self-contained, standalone file during export.

---
##  Author
Argyro Araptsa

Junior WordPress & Front-End Developer

Portfolio: https://argiro-portfolio.netlify.app/ 



##  Project Structure

```text
├── index.html          # Main control panel and real-time preview viewport
├── style.css           # Core app styling and shared layout design systems
├── app.js              # Template engine, state management, and asset pipelines
├── restaurant imgs/    # Local high-quality assets for the Restaurant layout
├── services imgs/      # Local high-quality assets for the Service layout
└── hotel imgs/         # Local high-quality assets for the Hotel layout
 Future Improvements
[ ] Live Style Customizer: Color palette pickers to change layout themes on the fly.

[ ] Typography Selection: Integrating Google Fonts dynamically into the generator.

[ ] More Layout Variety: Expanding the library with E-commerce, Portfolio, and SaaS templates.

[ ] Headless CMS Deployment: A seamless "one-click publish" integration.


