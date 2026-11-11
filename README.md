## Setup and Installation

### Prerequisites

Make sure the following software is installed:

- Node.js (version 20 or later)
- npm

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

### 2. Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

If setting up the project from scratch, install TypeScript, tsx, Vitest, and Node.js type definitions:

```bash
npm install -D typescript tsx vitest @types/node
```

## How to Execute the Code

Run the TypeScript implementation using:

```bash
npx tsx main.ts
```

This command executes the `merge()` function and displays the result in the terminal.

Example input:

```typescript
merge([1, 4, 7], [2, 5, 8], [9, 6, 3]);
```

Expected output:

```text
[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## How to Run Unit Tests

This project uses **Vitest** for unit testing.

Run all unit tests using:

```bash
npx vitest run
```

To run tests in watch mode:

```bash
npx vitest
```

The unit tests cover:

- Merging three sorted arrays
- Handling empty arrays
- Handling duplicate values
- Handling negative numbers
- Handling cases where one array is empty

All tests should pass when the implementation is correct.