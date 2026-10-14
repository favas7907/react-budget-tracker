<div align="center">
  <h1>💸 React Budget Tracker</h1>
  <p><strong>Take control of your budget. Track every expense. Spend smarter.</strong></p>
  <p>
    A simple, responsive, and interactive personal finance application built with React.js.
  </p>
</div>

<hr />

<h2>📖 About the Project</h2>

<p>
  <strong>React Budget Tracker</strong> helps users create budgets, record expenses,
  monitor spending, and track their remaining balances. The application uses a
  modern black, white, and teal-blue design with a lightweight frontend architecture.
</p>

<p>
  All budget, expense, and user data is stored locally in the browser using
  <code>localStorage</code>, so the application works without a backend or database.
</p>

<h2>✨ Features</h2>

<h3>📊 Budget Management</h3>
<ul>
  <li>Create budgets with custom names and spending limits.</li>
  <li>View all budgets in an organized card layout.</li>
  <li>Track total budget, amount spent, and remaining balance.</li>
  <li>Visualize spending progress with progress bars.</li>
  <li>Identify overspending with clear visual indicators.</li>
  <li>Delete budgets and their associated expenses.</li>
</ul>

<h3>💳 Expense Tracking</h3>
<ul>
  <li>Record expenses with a name, amount, and associated budget.</li>
  <li>View expenses in an organized list.</li>
  <li>Identify which budget each expense belongs to.</li>
  <li>Delete individual expenses.</li>
  <li>Automatically update budget totals when expenses change.</li>
</ul>

<h3>👋 Simple Onboarding</h3>
<ul>
  <li>Start with a welcoming page that asks for your name.</li>
  <li>Save your name locally for subsequent visits.</li>
  <li>Display a personalized greeting on the dashboard.</li>
  <li>Skip onboarding when a saved name is available.</li>
</ul>

<h3>💾 Local Data Persistence</h3>
<ul>
  <li>Save budgets, expenses, and the user's name in <code>localStorage</code>.</li>
  <li>Restore saved information when reopening or refreshing the application.</li>
  <li>Keep the application functional without a backend or database.</li>
</ul>

<h3>📱 Responsive Design</h3>
<ul>
  <li>Clean, minimal, and modern interface.</li>
  <li>Responsive layouts for mobile, tablet, and desktop.</li>
  <li>Consistent spacing, readable typography, and clear visual hierarchy.</li>
  <li>Interactive buttons, form states, and navigation.</li>
</ul>

<h2>🎨 Design Philosophy</h2>

<p>
  The interface follows a minimal design system focused on clarity, usability, and simplicity.
</p>

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Design</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Primary accent</td><td>Teal blue</td></tr>
    <tr><td>Base theme</td><td>Black and white</td></tr>
    <tr><td>Layout</td><td>Clean, card-based interface</td></tr>
    <tr><td>Navigation</td><td>Simple, intuitive navigation</td></tr>
    <tr><td>Feedback</td><td>Clear validation and spending indicators</td></tr>
    <tr><td>Responsiveness</td><td>Mobile-first layout</td></tr>
  </tbody>
</table>

<p>
  The goal is to make managing personal budgets straightforward without overwhelming
  users with unnecessary features.
</p>

<h2>🛠️ Tech Stack</h2>

<table>
  <thead>
    <tr>
      <th>Technology</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>React.js</td><td>Building the user interface</td></tr>
    <tr><td>JavaScript (ES6+)</td><td>Application logic</td></tr>
    <tr><td>React Router 6.8</td><td>Client-side navigation</td></tr>
    <tr><td>HTML5</td><td>Application structure</td></tr>
    <tr><td>CSS3</td><td>Styling and responsive layouts</td></tr>
    <tr><td>React Hooks</td><td>Component state and lifecycle management</td></tr>
    <tr><td><code>localStorage</code></td><td>Browser-based data persistence</td></tr>
    <tr><td>Vite</td><td>Development server and production build</td></tr>
  </tbody>
</table>

<h2>📂 Project Structure</h2>

<pre>
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
</pre>

<p><em>The exact file structure may vary depending on the implementation.</em></p>

<h2>🚀 Getting Started</h2>

<h3>Prerequisites</h3>

<ul>
  <li><a href="https://nodejs.org/">Node.js</a></li>
  <li>npm, included with Node.js</li>
  <li>Git, optional for cloning the repository</li>
</ul>

<h3>Installation</h3>

<ol>
  <li>
    <strong>Clone the repository</strong>
    <pre><code>git clone https://github.com/favas7907/react-budget-tracker.git
cd react-budget-tracker</code></pre>
  </li>
  <li>
    <strong>Install dependencies</strong>
    <pre><code>npm install</code></pre>
  </li>
  <li>
    <strong>Start the development server</strong>
    <pre><code>npm run dev</code></pre>
  </li>
</ol>

<p>
  Open the local URL displayed in your terminal to use the application.
</p>

<h2>📦 Production Build</h2>

<p>Create an optimized production build:</p>

<pre><code>npm run build</code></pre>

<p>Preview the production build locally:</p>

<pre><code>npm run preview</code></pre>

<p>
  Vite generates the production files in the <code>dist/</code> directory.
</p>

<h2>🌐 Deployment</h2>

<p>The application can be deployed to any suitable static hosting platform.</p>

<ul>
  <li><a href="https://vercel.com/">Vercel</a> — straightforward deployment with GitHub integration.</li>
  <li><a href="https://www.netlify.com/">Netlify</a> — static hosting with continuous deployment.</li>
  <li><a href="https://pages.github.com/">GitHub Pages</a> — host the application directly from a GitHub repository.</li>
</ul>

<h3>Deployment Notes</h3>

<ul>
  <li>Run <code>npm run build</code> before deploying if your hosting platform does not build automatically.</li>
  <li>Configure the appropriate base path when deploying a Vite application to a GitHub Pages project site.</li>
  <li>Configure your hosting platform to serve <code>index.html</code> for supported client-side routes when necessary.</li>
  <li>Verify that refreshing the Dashboard, Budgets, or Expenses page works correctly after deployment.</li>
</ul>

<h2>🔐 Data and Privacy</h2>

<p>
  React Budget Tracker uses browser <code>localStorage</code> to persist information.
</p>

<ul>
  <li>No backend database is required.</li>
  <li>No account registration or authentication is required.</li>
  <li>Data remains in the browser where it was saved.</li>
  <li>Clearing browser storage or using a different browser or device may remove or make saved data unavailable.</li>
</ul>

<blockquote>
  <strong>Important:</strong> This application is a lightweight budgeting tool, not a secure financial records system.
  Avoid storing sensitive financial or personal information.
</blockquote>

<h2>🧠 What This Project Demonstrates</h2>

<ul>
  <li>Building reusable React components.</li>
  <li>Managing application state with React Hooks.</li>
  <li>Implementing navigation with React Router.</li>
  <li>Creating and validating forms.</li>
  <li>Handling relationships between budgets and expenses.</li>
  <li>Calculating spending and remaining balances.</li>
  <li>Persisting and restoring data with <code>localStorage</code>.</li>
  <li>Designing responsive interfaces with CSS.</li>
  <li>Preparing a frontend application for production deployment.</li>
</ul>

<h2>🔮 Future Improvements</h2>

<ul>
  <li>Expense editing.</li>
  <li>Budget editing.</li>
  <li>Expense filtering and sorting.</li>
  <li>Monthly spending summaries.</li>
  <li>Exporting expense records.</li>
  <li>Optional dark and light themes.</li>
</ul>

<p>
  These enhancements are optional; the core application is intentionally designed
  to remain simple and easy to maintain.
</p>

<h2>📄 License</h2>

<p>
  This project is open source and available under the
  <a href="https://opensource.org/license/mit">MIT License</a>.
</p>

<p>
  If you intend to use this license, add a <code>LICENSE</code> file containing the
  MIT License text to the repository.
</p>

<h2>👨‍💻 Author</h2>

<p>
  <strong>Favas</strong>
</p>

<ul>
  <li>
    GitHub:
    <a href="https://github.com/favas7907">@favas7907</a>
  </li>
</ul>

<hr />

<div align="center">
  <strong>Plan your budget. Track your spending. Stay in control.</strong>
  <br />
  Built with React.js, React Router, and <code>localStorage</code>.
</div>
