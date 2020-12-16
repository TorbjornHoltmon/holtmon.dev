/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    theme: {
        extend: {
            colors: {
                background: "#212121",
                sidebar: "#323232",
                accent: "#0d7377",
            },
        },
    },
    variants: {},
    plugins: [],
    purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        enabled: process.env.NODE_ENV === "production",
        mode: "layers",
        content: [
            "components/**/*.vue",
            "layouts/**/*.vue",
            "pages/**/*.vue",
            "plugins/**/*.js",
            "nuxt.config.js",
        ],
    },
};
