# Mohammed Nuseirat - Portfolio Website

A modern, responsive portfolio website showcasing my professional experience, projects, and technical skills. Built with HTML, CSS, and JavaScript, featuring smooth animations and an interactive user interface.

![لقطة شاشة 2024-10-26 213120](https://github.com/user-attachments/assets/4de75ed5-e7f8-4800-97b8-c0a1754dd6ff)

## 🌟 Features

- Custom cursor with interactive animations
- Smooth scrolling and fade-in effects using AOS (Animate On Scroll)
- Responsive design that works on all devices
- Dynamic statistics counter
- Interactive project cards with image modal
- Timeline-based experience section
- Comprehensive skills showcase
- Dark theme with accent colors
- Social media integration
- Downloadable CV functionality

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript
- AOS Library
- System Font Stack
- Custom SVG Icons

![لقطة شاشة 2024-10-26 213146](https://github.com/user-attachments/assets/88bd9881-3763-4779-9610-75c53e8c6d6b)


## 🚀 Components

### Profile Section
- Professional profile image
- Key statistics
- Social media links
- Downloadable CV button

### Experience Timeline
- Interactive timeline showing professional history
- Animated transitions
- Detailed role descriptions

### Projects Grid
- Image previews
- Project descriptions
- Direct links to live projects
- Modal image viewer

### Skills & Tools Section
- Icon-based tool cards
- Interactive hover effects
- Categorized skill display

## 💻 Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/nuseirat/portfolio.git
```

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve
```

## 🎨 Customization

### Colors
The website uses CSS variables for easy color customization. Edit the following in `styles.css`:

```css
:root {
    --primary: #ff6b4a;    /* Main highlight color */
    --accent: #9fff4a;     /* Accent highlight color */
    --dark: #111;          /* Dark background color */
    --gray: #333;          /* Gray background for components */
    --light: #fff;         /* Light text color */
}
```

### Content
Update your personal information in `index.html`:
- Profile details
- Experience timeline
- Project information
- Skills and tools

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile devices
- Tablets
- Desktop screens
- Large screens

## 🔑 Key Features Implementation

### Custom Cursor
```javascript
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
```

### Statistics Animation
```javascript
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👤 Author

**Mohammed Nuseirat**
- GitHub: [@nuseirat](https://github.com/nuseirat)
- LinkedIn: [@mohammednuseirat](https://linkedin.com/in/mohammednuseirat)
- X: [@MohaNuseirat](https://X.com/mohanuseirat)
- Website: [nuseirat.hashnode.dev](https://nuseirat.hashnode.dev/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/nuseirat/portfolio/issues).

## ⭐️ Show your support

Give a ⭐️ if you like this project!
