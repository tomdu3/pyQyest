# Authentication & Database Integration Plan

## Database Recommendation: Relational (PostgreSQL / SQLite)

For a system tracking structured user data—such as answers submitted, points earned, and total time actively spent playing—a **Relational Database** (like PostgreSQL or SQLite) is strongly recommended over a Non-Relational Database (like MongoDB or Firebase).

### Why Relational?
1. **Clear Relationships:** Your data has strict relationships. A `User` has many `Game Sessions`. A `Session` has many `Answers`. Relational databases handle these links natively via Foreign Keys.
2. **Data Integrity:** Strict schemas ensure you can't accidentally save a user's points as a string or submit an answer for a user that doesn't exist.
3. **Complex Aggregations:** Relational databases are highly optimized for queries like "Give me the top 10 users with the highest total points this week," which are common in gamified apps.

*Note: Non-Relational databases are great for flexible, schema-less data, but gamified learning apps typically require rigid structure for scoring.*

---

## Integration Plan

The following plan outlines how we can introduce an authentication and progress-tracking system into the PyQuest application.

### Phase 1: Database Setup & Schema Design
Establish a backend service (e.g., Python with FastAPI or a Backend-as-a-Service like Supabase) and create the tables to store data securely.

1. **`Users` Table:** 
   - `id` (Primary Key)
   - `username`, `email` (Unique)
   - `password_hash`
   - `total_points`
   - `created_at`
2. **`Game_Sessions` Table:**
   - `id` (Primary Key)
   - `user_id` (Foreign Key -> `Users`)
   - `lesson_id`
   - `time_spent_seconds`
   - `session_points_earned`
   - `completed_at`
3. **`Answers` Table (Optional, for deep analytics):**
   - `id` (Primary Key)
   - `session_id` (Foreign Key -> `Game_Sessions`)
   - `question_id`
   - `is_correct`

### Phase 2: Backend API Creation
Build the endpoints required for the React frontend to communicate with the database securely.

1. **Auth Endpoints:**
   - `POST /api/auth/register`: Create a new user account.
   - `POST /api/auth/login`: Verify credentials and return a JSON Web Token (JWT) or session cookie.
   - `GET /api/auth/me`: Retrieve the currently logged-in user's profile and lifetime points.
2. **Progress Endpoints:**
   - `POST /api/progress/submit`: Submit the results of a finished Quest (sends `lesson_id`, `points_earned`, `time_spent`, and updates the user's total score).
   - `GET /api/progress/leaderboard`: Fetch the top players to display in the UI.

### Phase 3: Frontend Integration (React App)
Connect the existing Vite/React interface to the new backend API.

1. **Auth Context & Routing:**
   - Wrap the React app in an `AuthContext` to track if a user is logged in.
   - Create a `Login/Register` page that users must pass through before seeing the Quest Map.
2. **State Syncing:**
   - On login, set the React `coins` (points) and `streak` state to match the database values.
3. **Submitting Results:**
   - Modify the `nextAction` function when `gameState === 'complete'`. Instead of just updating local React state, send a `fetch()` request (with the user's Auth token) to the `POST /api/progress/submit` endpoint.

### Phase 4: Security Polish
- Ensure passwords are hashed using `bcrypt` before storing.
- Protect all progress endpoints so points can only be updated if a valid user token is provided.
- Add basic backend validation to prevent cheating (e.g., rejecting API calls that claim to earn an impossible 10,000 points in 1 second).
