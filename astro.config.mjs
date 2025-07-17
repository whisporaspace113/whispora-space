import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
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
    songs: {
      type: 'content',
      schema: {
        title: { type: 'string' },
        artist: { type: 'string', optional: true },
        audio: { type: 'string', optional: true },
        lyrics: { type: 'boolean', optional: true },
      },
    },
    // ADD THIS NEW COLLECTION BELOW
    learning_modules: {
      type: 'content',
      schema: {
        title: { type: 'string' },
        description: { type: 'string' },
        image: { type: 'string', optional: true }, // Optional image for the module card
        difficulty: { type: 'enum', values: ['easy', 'medium', 'hard'], optional: true }, // Example field
        // Add more fields relevant to your learning modules (e.g., 'quiz_link', 'activity_type')
      },
    },
  },
});
