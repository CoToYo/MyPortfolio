// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    // Tell Nuxt how to properly find and build Vuetify's sass and mdi(material-design-icons)
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
    ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        }
    }
})
