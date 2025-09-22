# Differ Tool ↔️

This is a personal learning project where I built a command-line file comparison tool from scratch using Node.js and TypeScript. The goal was to understand how diffing utilities work by implementing the core logic with the Longest Common Subsequence (LCS) algorithm.

---

## ✨ What It Does

* **CLI Interface**: A simple and fast command-line tool built with `commander`.
* **File Comparison**: Compares any two text files line by line.
* **Color-Coded Output**: Highlights additions in green and deletions in red using `chalk`.
* **LCS Algorithm**: Uses a custom implementation of the Longest Common Subsequence algorithm to find differences accurately.
* **TypeScript**: Written in modern TypeScript for type safety and better code structure.

---

## 👨‍💻 How to Run

1.  **Clone**: `git clone https://github.com/sabyasachimohantty/diff-tool.git`
2.  **Install & Build**: `npm install && npm run build`
3.  **Link & Run**: First, link the command: `npm link`. Then, run it: `differ old.txt new.txt`

---

## 🤔 Why This Project?

Pure curiosity and learning! I wanted to demystify how fundamental algorithms like LCS are used in real-world tools like `git diff`. It has been an excellent way to practice TypeScript and build a useful command-line utility from the ground up.

---

## 🤝 Contribution

Feel free to fork this project, experiment with it, and make it better! If you have ideas for improvements or find any bugs, please open an issue or send a pull request.

---

## ⚖️ License

This project is open-source under the [MIT License](LICENSE).