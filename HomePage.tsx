@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply antialiased;
  }
}

@layer components {
  .btn {
    @apply px-4 py-2 rounded-full transition-colors duration-200;
  }
  
  .btn-primary {
    @apply bg-orange-500 text-white hover:bg-orange-600;
  }
}