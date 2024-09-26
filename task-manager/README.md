# React + Vite Project

This repository is a minimal setup for a **React.js** application using **Vite** as the build tool. It includes hot module replacement (HMR) for a faster development experience and a pre-configured ESLint setup to ensure code consistency.

## Getting Started

Follow the instructions below to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

Make sure you have **Node.js** installed. You can download it from [Node.js official website](https://nodejs.org/).

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/react-vite-app.git
   cd react-vite-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173/`.

### Build for Production

To create a production build, run:

```bash
npm run build
```

The production build will be located in the `dist/` directory.

### Preview the Production Build

To preview the production build locally, run:

```bash
npm run preview
```

````

## Vite Plugins

### Using `@vitejs/plugin-react`

This plugin is included by default when working with React in Vite. If you need to install it manually:

```bash
npm install @vitejs/plugin-react
````

### Using `@vitejs/plugin-react-swc`

If you prefer using **SWC** instead of **Babel** for faster builds, install the SWC plugin:

```bash
npm install @vitejs/plugin-react-swc
```

Then update `vite.config.js`:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
});
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
