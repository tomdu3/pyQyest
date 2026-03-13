# Task: Verify Registration and Login

- [x] Open http://localhost:5173
- [ ] Verify Login/Registration screen
    - **FINDING**: Page shows a Vite error: `Failed to resolve import "./contexts/AuthContext" from "src/App.jsx"`.
- [ ] Create account (testuser, test@test.com, password123)
- [ ] Verify redirect to main app
- [ ] Verify 'Welcome, testuser' in top bar

**Notes:**
The application is currently broken due to a missing file or incorrect import path in the React project. It appears `AuthContext.jsx` was not placed in the correct directory (`frontend/src/contexts/`).
