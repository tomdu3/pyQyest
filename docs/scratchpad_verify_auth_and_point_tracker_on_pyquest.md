# Task: Verify Auth and Point Tracker on PyQuest

## Checklist
- [x] Navigate to http://localhost:5173
- [ ] Verify Auth Page (Login/Registration) visibility
- [ ] Switch to Registration and create account:
    - Username: "testuser"
    - Email: "testuser@gmail.com"
    - Password: "supersecret"
- [ ] Verify 'Welcome, testuser' in the top bar
- [ ] Start a lesson and answer one question
- [ ] Verify point tracker updates

## Data Extracted
- Backend URL: http://localhost:8000/api
- Frontend URL: http://localhost:5173
- Error encountered: Registration failed with CORS error on frontend.
- Swagger UI (http://localhost:8000/docs) registration failed with 500 Internal Server Error.
- Backend appears to be running but database might not be initialized properly or CORS is missing.
