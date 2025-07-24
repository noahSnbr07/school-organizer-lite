import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'School Organizer Lite',
        short_name: 'School Organizer',
        description: 'Organize school',
        launch_handler: { client_mode: "focus-existing" },
        start_url: '/',
        display_override: ["fullscreen", "minimal-ui", "standalone"],
        display: 'fullscreen',
        categories: ["productivity"],
        lang: "EN-en",
        orientation: "landscape-primary",
        dir: "ltr",
        background_color: '#151515',
        theme_color: '#151515',
        icons: [
            {
                src: './icon64.png',
                sizes: '64x64',
                type: 'image/x-icon',
            },
            {
                src: './icon128.png',
                sizes: '128x128',
                type: 'image/png',
            },
            {
                src: './icon256.png',
                sizes: '256x256',
                type: 'image/png',
            },
            {
                src: './icon1024.png',
                sizes: '1024x1024',
                type: 'image/png',
            },
        ],
    }
}