💸 React Budget Tracker

Take control of your budget. Track every expense. Spend smarter.

React Budget Tracker is a simple, responsive, and interactive personal finance application built with React.js. It helps users create budgets, record expenses, monitor spending, and track remaining balances through a clean and intuitive interface.

Designed with a modern black, white, and teal-blue theme, the application combines essential budgeting features with a lightweight frontend architecture. All budget and expense data is stored locally in the browser, making the application easy to use without requiring an account or backend.

---

✨ Features

📊 Budget Management

- Create budgets with custom names and spending limits.
- View all budgets in an organized card layout.
- Track total budget, amount spent, and remaining balance.
- Visualize spending progress with progress bars.
- Identify overspending with clear visual indicators.
- Delete budgets and their associated expenses.

💳 Expense Tracking

- Record expenses with a name, amount, and associated budget.
- View expenses in an organized list.
- Identify which budget each expense belongs to.
- Delete individual expenses.
- Automatically update budget totals when expenses change.

👋 Simple Onboarding

- Start with a welcoming page that asks for your name.
- Save your name locally for subsequent visits.
- Display a personalized greeting on the dashboard.
- Skip onboarding when a saved name is available.

💾 Local Data Persistence

- Save budgets, expenses, and the user's name in "localStorage".
- Restore saved information when reopening or refreshing the application.
- Keep the application functional without a backend or database.

📱 Responsive Design

- Clean, minimal, and modern interface.
- Responsive layouts for mobile, tablet, and desktop.
- Consistent spacing, readable typography, and clear visual hierarchy.
- Interactive buttons, form states, and navigation.

---

🎨 Design Philosophy

The interface follows a minimal design system focused on clarity, usability, and simplicity.

Element| Design
Primary accent| Teal Blue
Base theme| Black and White
Layout| Clean, card-based interface
Navigation| Simple, intuitive navigation
Feedback| Clear validation and spending indicators
Responsiveness| Mobile-first layout

The goal is to make managing personal budgets straightforward without overwhelming users with unnecessary features.

---

🛠️ Tech Stack

Technology| Purpose
React.js| Building the user interface
JavaScript (ES6+)| Application logic
React Router 6.8| Client-side navigation
HTML5| Application structure
CSS3| Styling and responsive layouts
React Hooks| Component state and lifecycle management
localStorage| Browser-based data persistence
Vite| Development server and production build

---

📂 Project Structure

react-budget-tracker/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── BudgetCard.jsx
│   │   ├── BudgetForm.jsx
│   │   ├── ExpenseForm.jsx
│   │   └── ExpenseList.jsx
│   ├── pages/
│   │   ├── Start.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Budgets.jsx
│   │   └── Expenses.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md

The exact file structure may vary depending on the implementation.

---

🚀 Getting Started

Follow these steps to run the application locally.

Prerequisites

Install the following:

- "Node.js" (https://nodejs.org/)
- npm, included with Node.js
- Git (optional, for cloning the repository)

1. Clone the Repository

git clone https://github.com/YOUR_USERNAME/react-budget-tracker.git

Replace "YOUR_USERNAME" with your GitHub username.

2. Navigate to the Project

cd react-budget-tracker

3. Install Dependencies

npm install

4. Start the Development Server

npm run dev

Open the local URL displayed in your terminal to use the application.

---

📦 Production Build

Create an optimized production build:

npm run build

Preview the production build locally:

npm run preview

Vite generates the production files in the "dist/" directory.

---

🌐 Deployment

The application can be deployed to a static hosting platform.

Recommended options:

- "Vercel" (https://vercel.com/) — straightforward deployment with GitHub integration.
- "Netlify" (https://www.netlify.com/) — static hosting with continuous deployment.
- "GitHub Pages" (https://pages.github.com/) — host the application directly from a GitHub repository.

Deployment Notes

- Run "npm run build" before deploying if your hosting platform does not build automatically.
- Configure the appropriate base path if deploying a Vite application to a GitHub Pages project site.
- Configure your hosting platform to serve "index.html" for supported client-side routes when necessary.
- Verify that refreshing the Dashboard, Budgets, or Expenses page works correctly after deployment.

---

🔐 Data and Privacy

React Budget Tracker uses browser "localStorage" to persist information.

- No backend database is required.
- No account registration or authentication is required.
- Data remains in the browser where it was saved.
- Clearing browser storage or using a different browser or device may remove or make saved data unavailable.

Important: This application is a lightweight budgeting tool, not a secure financial records system. Avoid storing sensitive financial or personal information.

---

🧠 What This Project Demonstrates

This project provides practical experience with:

- Building reusable React components.
- Managing application state with React Hooks.
- Implementing navigation with React Router.
- Creating and validating forms.
- Handling relationships between budgets and expenses.
- Calculating spending and remaining balances.
- Persisting and restoring data with "localStorage".
- Designing responsive interfaces with CSS.
- Preparing a frontend application for production deployment.

---

🔮 Future Improvements

Potential enhancements include:

- Expense editing.
- Budget editing.
- Expense filtering and sorting.
- Monthly spending summaries.
- Exporting expense records.
- Optional dark and light themes.

These enhancements are optional; the core application is intentionally designed to remain simple and easy to maintain.

---

📄 License

This project is open source and available under the "MIT License" (https://opensource.org/license/mit).

If you intend to use this license, add a "LICENSE" file containing the MIT License text to the repository.

---

👨‍💻 Author

YOUR NAME

- GitHub: "@favas7907" (https://github.com/favas7907)

Replace the placeholders with your actual profile details.

---

<p align="center">
  <strong>Plan your budget. Track your spending. Stay in control.</strong>
  <br />
  Built with React.js, React Router, and localStorage.
</p>
