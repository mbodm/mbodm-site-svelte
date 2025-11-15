import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	// The "server" and "preview" settings fix a Firefox startup delay issue
	server: {
		host: '0.0.0.0'
	},
	preview: {
		host: '0.0.0.0'
	}
});
