import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://whispora.space',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'], // Add other languages you plan to support
    routing: {
      prefixDefaultLocale: true,
    },
  },
  // REMOVED: experimental block, as 'assets' is no longer experimental or is handled differently.
  // If you later want advanced image optimization, you'll install @astrojs/image
  // and configure it under 'integrations' instead of 'experimental'.
  
  collections: {
    stories: {
      type: 'content',
      schema: ({ image }) => ({
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        image: image().optional(), // Using Astro's image schema
        author: { type: 'string', required: true },
        date: { type: 'date', required: true },
      }),
    },
    songs: {
      type: 'content',
      schema: ({ image }) => ({
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        audio: { type: 'string', required: true }, // Path to audio file in public/
        image: image().optional(), // Optional cover image for the song
        artist: { type: 'string', required: false },
        lyrics: { type: 'boolean', default: true }, // Whether lyrics are provided in the MD file
      }),
    },
    // New: Learning Modules Collection
    learning_modules: {
      type: 'content',
      schema: ({ image }) => ({
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        image: image().optional(), // Optional cover image for the module
        category: { type: 'string', required: false }, // e.g., 'Numbers', 'Colors'
        level: { type: 'string', required: false }, // e.g., 'Beginner', 'Intermediate'
        date: { type: 'date', required: true },
      }),
    },
  },
});
