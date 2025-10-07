# 📅 Countdown Timer

A simple, clean, and stylish digital countdown timer built with HTML, CSS, and JavaScript. This project displays the remaining time until a specified future date, updating every second. When the countdown reaches zero, it displays an "Offer Expired\!" message.

## 🚀 Live Demo

This project is live and interactive on GitHub. Click the link below to see it in action! The cards expand on click, and the background particles react to your mouse movements.

**[Click Here for the Live Demo](https://nitesh-shaw-098.github.io/Countdown-Timer/)**

-----

## 📸 Preview

*(You can add a screenshot of your project here)*

-----

## ✨ Features

  * **Real-time Countdown:** Displays the remaining days, hours, minutes, and seconds.
  * **Digital Flip Clock Design:** A modern and visually appealing interface that mimics a classic flip clock.
  * **Dynamic Updates:** The timer updates automatically every second without needing a page refresh.
  * **Expiration Message:** Once the target date is reached, the timer is replaced with a customizable expiration message.
  * **Easy to Customize:** The target date can be easily changed with a single line of code in the JavaScript file.
  * **Pure Vanilla JS:** Built with plain JavaScript, no external libraries or frameworks are needed for the core logic.

-----

## 💻 Technologies Used

  * **HTML:** For the basic structure and layout of the countdown elements.
  * **CSS:** For styling the digital clock appearance, background, and overall look and feel.
  * **JavaScript:** For the core logic of calculating the time difference and dynamically updating the HTML content.
  * **Google Fonts:** Used for the "Rubik" font family to enhance typography.
  * **Bootstrap:** Utilized for its container class to help with page alignment.

-----

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You only need a modern web browser like Google Chrome, Firefox, or Microsoft Edge.

### Installation & Usage

1.  **Clone the repository or download the files.**
    ```sh
    git clone https://github.com/your-username/your-repository-name.git
    ```
2.  **Navigate to the project directory.**
    ```sh
    cd your-repository-name
    ```
3.  **Open the `index.html` file in your web browser.**
      * You can do this by double-clicking the file or right-clicking and selecting "Open with" your preferred browser.

-----

## 🛠️ Customization

Changing the countdown's target date is very straightforward.

1.  Open the `script.js` file.
2.  Find the following line at the top of the file:
    ```javascript
    const futureDate = new Date(2025, 10, 9, 0, 0, 0); // setting the future date
    ```
3.  Modify the parameters in the `new Date()` constructor to your desired date and time.
      * **Format:** `new Date(year, month, day, hours, minutes, seconds)`
      * **Important:** The `month` parameter is zero-indexed in JavaScript (0 = January, 1 = February, ..., 10 = November, 11 = December). So, `10` in the example code represents **November**.

For example, to set the countdown for Christmas Day 2026 at midnight:

```javascript
const futureDate = new Date(2026, 11, 25, 0, 0, 0);
```

-----

## 📂 File Structure

The project is organized into three main files:

```
.
├── index.html     # The main HTML file with the page structure.
├── style.css      # The CSS file for all styling.
└── script.js      # The JavaScript file containing the countdown logic.
```
