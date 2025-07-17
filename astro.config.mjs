import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
// Import defineCollection if you're defining schemas directly in the config
// If you move schemas to a dedicated `src/content/config.ts` later, this import won't be needed here.
// For now, let's assume it's part of the config based on your previous pattern.
// However, defineCollection is typically imported in src/content/config.ts, not astro.config.mjs.
// For simpler setup here, we'll define the collection object directly.

export default defineConfig({
  integrations: [tailwind()],
  // Make sure this matches your project's collections setup.
  // If you later use a dedicated src/content/config.ts, this part will look different.
  // For now, we're assuming direct definition for simplicity and to match your implied setup.
  // If you encounter an error, it might be due to Astro's content collection schema definition moving to src/content/config.ts
  // If so, let me know, and I'll provide that file instead.
  // For now, let's define it here.
  collections: {
    stories: {
      type: 'content',
      schema: {
        title: { type: 'string' },
        description: { type: 'string' },
        image: { type: 'string', optional: true },
        author: { type: 'string', optional: true },
      },
    },
    // ADD THIS NEW COLLECTION BELOW
    songs: {
      type: 'content',
      schema: {
        title: { type: 'string' },
        artist: { type: 'string', optional: true },
        audio: { type: 'string', optional: true }, // Path to audio file in public/
        lyrics: { type: 'boolean', optional: true }, // Set to true if Markdown body contains lyrics
      },
    },
  },
});
