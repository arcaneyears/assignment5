# Assignment #5. JavaScript Basics (DOM Manipulation & Events)

**Student:** Yersaiyn Taubay
**Group:** SE-2524

Web Technologies / Front-End Development. A multi-page site that covers the basics of JavaScript:
variables and operators, DOM manipulation, mouse and keyboard events, a calculator and a small
to-do application.

## Live demo

https://arcaneyears.github.io/assignment5/

## Pages

| Page | Task | What it shows |
| --- | --- | --- |
| `index.html` | — | Home page with the navigation bar and a short description of every task |
| `task0.html` | Task 0 | External script, `console.log()` with the student data, `alert()` message |
| `task1.html` | Task 1 | Variables of type string, number and boolean, arithmetic operations, string concatenation |
| `task2.html` | Task 2 | A button that changes the text of a paragraph through `textContent` |
| `task3.html` | Task 3 | Buttons that change `style.backgroundColor` and `style.fontSize` of a block |
| `task4.html` | Task 4 | Adding list items with `createElement()` / `appendChild()` and removing them with `removeChild()` |
| `task5.html` | Task 5 | A box that reacts to the `mouseover` and `mouseout` events |
| `task6.html` | Task 6 | An input field that shows its value in real time on the `keyup` event |
| `task7.html` | Task 7 | A calculator with addition, subtraction, multiplication and division |
| `task8.html` | Task 8 | To-do list: add a task, mark it as completed, delete it; the data is kept in an array |

## Structure

```
.
├── index.html
├── task0.html … task8.html
├── css
│   └── style.css
├── js
│   ├── task0.js
│   ├── task1.js
│   ├── task2.js
│   ├── task3.js
│   ├── task4.js
│   ├── task5.js
│   ├── task6.js
│   ├── task7.js
│   └── task8.js
└── README.md
```

## How to run it locally

1. Clone the repository:
   ```
   git clone https://github.com/arcaneyears/assignment5.git
   ```
2. Open `index.html` in a browser, or start it with a local server
   (for example the Live Server extension in VS Code).
3. Use the navigation bar to move between the tasks.
4. For Task 0 and Task 1 open the developer tools with `F12` and look at the Console tab.

Bootstrap 5.3 is loaded from a CDN, so an internet connection is needed for the styles.

## Notes

- Task 0 shows an `alert()` right after the page is loaded; the button on the page shows it again.
- In Task 8 the tasks are stored in a plain array, so the list is empty again after a page reload.
