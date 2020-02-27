const sourceBase = 'src';
const buildBase = 'www';

module.exports = {
    server: {
        watch: `${buildBase}`
    },
    scripts: {
        watch: `${sourceBase}/js/**/*.js`,
        input: `${sourceBase}/js/*.js`,
        output: `${buildBase}/js`
    },
    styles: {
        input: `${sourceBase}/css/*.less`,
        watch: `${sourceBase}/css/**/*.less`,
        output: `${buildBase}/css`
    },
    plugins: {
        inputJs: `${sourceBase}/plugins/**/*.js`,
        inputCss: `${sourceBase}/plugins/**/*.css`,
        outputJs: `${buildBase}/js`,
        outputCss: `${buildBase}/css`
    },
    pages: {
        input: `${sourceBase}/html/*.html`,
        watch: `${sourceBase}/html/**/*.html`,
        output: `${buildBase}`
    },
    fonts: {
        input: `${sourceBase}/fonts/**/*.{ttf,otf,woff,woff2}`,
        watch: `${sourceBase}/fonts/**/*.{ttf,otf,woff,woff2}`,
        output: `${buildBase}/fonts`
    },
    images: {
        input: `${sourceBase}/images/**/*.{jpg,png,jpeg,webp}`,
        watch: `${sourceBase}/images/**/*.{jpg,png,jpeg,webp}`,
        output: `${buildBase}/images`
    },
    svg: {
        input: `${sourceBase}/svg/**/*.svg`,
        watch: `${sourceBase}/svg/**/*.svg`,
        output: `${buildBase}/svg`
    },
    favicons: {
        input: `${sourceBase}/favicons/*.{ico,png}`,
        output: `${buildBase}/favicons`
    }
};