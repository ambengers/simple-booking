const mix = require("laravel-mix");

const tailwindcss = require("tailwindcss");

const path = require("path");

const config = {
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, "resources/js/components"),
            "@mixins": path.resolve(__dirname, "resources/js/mixins"),
            "@pages": path.resolve(__dirname, "resources/js/pages"),
            "@": path.resolve(__dirname, "resources/js"),
        },
    },
    output: { chunkFilename: "js/chunks/[name].js" },
};

mix.js("resources/js/app.js", "public/js")
    .postCss("resources/sass/app.css", "public/css", [tailwindcss])
    .vue()
    .webpackConfig(config)
    .version();
