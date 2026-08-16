# Setup Instructions (TypeScript, Tailwind, and shadcn)

This project currently uses standard React with `.jsx` files and pure custom CSS. To support TypeScript, Tailwind CSS, and shadcn UI, please follow these instructions:

---

## 1. Setting Up TypeScript in Vite

To migrate the project to TypeScript:

1. **Install Dependencies**:
   ```bash
   npm install --save-dev typescript @types/react @types/react-dom
   ```

2. **Initialize Configuration**:
   Create a `tsconfig.json` in the root directory:
   ```json
   {
     "compilerOptions": {
       "target": "ES2020",
       "useDefineForClassFields": true,
       "lib": ["DOM", "DOM.Iterable", "ES2020"],
       "module": "ESNext",
       "skipLibCheck": true,
       "moduleResolution": "bundler",
       "allowImportingTsExtensions": true,
       "resolveJsonModule": true,
       "isolatedModules": true,
       "noEmit": true,
       "jsx": "react-jsx",
       "strict": true,
       "noUnusedLocals": true,
       "noUnusedParameters": true,
       "noFallthroughCasesInSwitch": true,
       "baseUrl": ".",
       "paths": {
         "@/*": ["./src/*"]
       }
     },
     "include": ["src"]
   }
   ```

3. **Rename Extensions**:
   Rename your `.jsx` files (like `App.jsx`, `main.jsx`, `Navbar.jsx`) to `.tsx` (and `main.jsx` to `main.tsx`). Update any static configuration (like `index.html`) to source `/src/main.tsx` instead of `/src/main.jsx`.

---

## 2. Installing and Configuring Tailwind CSS

1. **Install CSS modules**:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

2. **Generate Configuration Files**:
   ```bash
   npx tailwindcss init -p
   ```

3. **Configure Source Paths**:
   Update `tailwind.config.js` to parse your React elements:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

4. **Add Directives**:
   At the very top of `src/index.css`, append:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

---

## 3. Initializing shadcn UI

1. **Configure Import Paths**:
   Vite requires resolving `@/*` imports. Install paths support:
   ```bash
   npm install -D vite-tsconfig-paths (or configuration paths in vite.config.js)
   ```
   Add resolving aliases in `vite.config.js`:
   ```javascript
   import path from "path"
   import { defineConfig } from "vite"
   import react from "@vitejs/plugin-react"

   export default defineConfig({
     plugins: [react()],
     resolve: {
       alias: {
         "@": path.resolve(__dirname, "./src"),
       },
     },
   })
   ```

2. **Initialize shadcn CLI**:
   ```bash
   npx shadcn@latest init
   ```
   *Follow the interactive prompt to set paths. We recommend choosing `src/components` for components, and `src/index.css` for CSS styles.*

---

## Why is it important to create `/components/ui/` folder?

- **Standardization**: shadcn UI is built around copying component code directly into your repository. By placing sub-elements into `/components/ui/`, it designates clean separation between atomic wrapper components (like `Button`, `Dialog`, `Input`, `Tooltip`) and your page-specific content schemas.
- **CLI Targets**: When you execute `npx shadcn@latest add [component]`, it defaults to copy the generated template code into `/components/ui` directory, making updates and integrations fully automatic.
