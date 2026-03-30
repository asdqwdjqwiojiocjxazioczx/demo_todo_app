# demo_todo_app

Node.js + Express starter (latest stable/LTS) with:
- /health endpoint
- /api/todos (in-memory demo)
- /api/todos/:todoId/comments
- /api/auth/register
- validation (zod)
- centralized error handling

## Setup
1) edit .env
2) npm install
3) npm run dev

## Endpoints
- GET /health
- GET /api/todos
- POST /api/todos {"title":"..."}
- GET /api/todos/:todoId/comments
- POST /api/todos/:todoId/comments {"content":"..."}
- PUT /api/todos/:todoId/comments/:commentId {"content":"..."}
- DELETE /api/todos/:todoId/comments/:commentId
- POST /api/auth/register {"email":"user@example.com","password":"secret123"}
