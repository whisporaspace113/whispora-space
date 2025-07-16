import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // Configure content collections for stories
  // Learn more: https://docs.astro.build/en/guides/content-collections/
  collections: {
    stories: {
      type: 'content',
      schema: {
        // Define the schema for your story frontmatter
        title: { type: 'string' },
        description: { type: 'string' },
        image: { type: 'string', optional: true }, // Path to story cover image
        author: { type: 'string', optional: true },
        // Add more fields as needed (e.g., tags, readingTime)
      },
    },
    // You can add more collections here for songs, learning_hub, etc.
    // songs: { type: 'content' },
    // learning_hub: { type: 'content' },
  },
  // Base URL for your site (useful if deployed to a subdirectory)
  // base: '/',
});
