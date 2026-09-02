# Foundation Program Assignment - 1 | Apollo Level 2 Web Dev

[![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge&logo=javascript)](https://github.com)
[![Course](https://img.shields.io/badge/Platform-Programming%20Hero-orange?style=for-the-badge&logo=codeforces)](https://web.programming-hero.com/)
[![Marks](https://img.shields.io/badge/Total%20Marks-60%2F60-blue?style=for-the-badge&logo=checkmarx)](https://github.com)

Welcome to my repository for **Foundation Program Assignment - 1** under the Apollo Level-2 Web Development course. This assignment focuses on building solid JavaScript logic fundamentals using vanilla JS.

---

## 📋 Assignment Overview & Breakdown

| Question No. | Topic Name | Marks | Description |
| :---: | :--- | :---: | :--- |
| **Q1** | **Value Detective** | 10 | Inspects any given value's data type and evaluates whether it is truthy or falsy. |
| **Q2** | **Bangladesh Weekend Machine** | 10 | Evaluates days of the week using `switch` cases and handles case-insensitive string inputs. |
| **Q3** | **Username Gatekeeper** | 10 | Validates usernames against sequential length, space, and reserved-word rules. |
| **Q4** | **Dhaka CNG Fare Meter** | 15 | Calculates dynamic transit fares based on distance, waiting time, and night multipliers. |
| **Q5** | **Run Chase Commentator** | 15 | An arrow function tracking cricket run-chase scenarios, calculating required run rates and match verdicts. |
| **Total** | | **60** | |

---

## 🛠️ Implementation Details (`answer.js`)

All functions are written adhering strictly to the constraints:
- Uses only approved fundamentals: variables, operators, strings, template strings, `if/else`, `switch`, ternary operations, and functions.
- No forbidden structures (no arrays, loops, or objects).
- Strict adherence to exact return types, casing, and spacing formats.

### 🔍 Quick Function Reference

1. **`describeValue(value)`**
   - Extracts `typeof` and evaluates truthiness natively using a conditional branch.
   - Returns format: `"<type> | <truthy/falsy>"`.

2. **`getDayType(day)`**
   - Normalizes input string case using `.toLowerCase()`.
   - Leverages cascading `switch` case fall-throughs for weekend vs. working day matching.

3. **`validateUsername(username)`**
   - Enforces sequential validation rules (Length < 4 ➔ Space check ➔ Case-insensitive "admin" search).

4. **`getCngFare(distance, isNight, waitingMinutes)`**
   - Computes base fare (50 taka for $\le 2$ km), incremental distance charges (15 taka/km), waiting costs (2 taka/min), and applies the 20% night surcharge conditionally.

5. **`getChaseVerdict(target, scored, ballsLeft)`**
   - An ES6 arrow function calculating required run rates and outputting precise match status strings (`Won`, `Lost`, or formatted run-rate evaluations).

---

## ⚙️ How to Run

1. Clone or download this repository.
2. Ensure you have [Node.js](https://nodejs.org/) installed on your system.
3. Test the functions by importing or running them in your terminal:
   ```bash
   node answer.js
!!!THIS  README FILE IS BUILT WITH AI
