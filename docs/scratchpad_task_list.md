# Task List
- [ ] Load `http://localhost:5173`
  - [X] URL opened, but getting 500 error on `App.jsx`
- [ ] Register new user: Username "testuser", Email "testuser@gmail.com", Password "supersecret"
- [ ] Verify "Welcome, testuser" in the top bar
- [ ] Answer one question and verify point tracker

## Findings
- `http://localhost:5173/src/App.jsx` returns 500 because it cannot resolve `./contexts/AuthContext`.
- The directory `frontend/src/contexts/` exists but is empty.
- Probed several locations using `file://` protocol but could not find the missing `AuthContext.jsx` file.
- Cannot fix the code or move files due to permission restrictions in the current subagent session.

## Conclusion
The application is broken and cannot be tested as requested. The file `AuthContext.jsx` is missing from the location expected by `App.jsx`.
