# Task: Verify Auth and Point Tracker

## Checklist:
- [x] Open/Reload `http://localhost:5173` (Connection refused)
- [ ] Verify Auth Page (Login/Registration)
- [ ] Register account: Username "testuser", Email "testuser@gmail.com", Password "supersecret"
- [ ] Verify 'Welcome, testuser' in the top bar
- [ ] Answer one question and verify point tracker

**Findings:**
- `http://localhost:5173` is refusing connection.
- `http://localhost:8000/docs` is working (backend is up).
- Tried `127.0.0.1:5173` and `localhost:5174` with no success.
- Requesting main agent to restart the frontend with `npm run dev`.
