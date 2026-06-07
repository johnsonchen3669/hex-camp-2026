// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://johnsonchen3669.github.io',
	base: '/hex-camp-2026',
	integrations: [react()],
	vite: {
		plugins: [tailwindcss()],
	},
});
