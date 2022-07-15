import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        files: `${buildFolder}/files/`,
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`
    },
    src: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.scss`,
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        svgicons: `${srcFolder}/svgicons/*.svg`
    },
    watch: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,svg,ico,webp}`,
    },
    

    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
}




// import * as nodePath from 'path';
// const rootFolder = nodePath.basename(nodePath.resolve());

// const buildFolder = './dist';
// const srcFolder = `./src`;

// export const path = {
//     build: {
//         css: `${buildFolder}/css/`,
//         html: `${buildFolder}/`,
//         files: `${buildFolder}/files/`,
//         js: `${buildFolder}/js/`,
//         fonts: `${buildFolder}/fonts/`,
//         images: `${buildFolder}/img/`
//     },
//     src: {
//         scss: `${srcFolder}/scss/style.scss`,
//         html: `${srcFolder}/*.html`,
//         files: `${srcFolder}/files/**/*.*`,
//         js: `${srcFolder}/js/app.js`,
//         images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
//         svg: `${srcFolder}/img/**/*.svg`,
//         svgicons: `${srcFolder}/svgicons/*.svg`
//     },
//     watch: {
//         scss: `${srcFolder}/scss/**/*.scss`,
//         html: `${srcFolder}/**/*.html`,
//         files: `${srcFolder}/files/**/*.*`,
//         js: `${srcFolder}/js/**/*.js`,
//         images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,svg,ico,webp}`
//     },
//     clean: buildFolder,
//     buildFolder: buildFolder,
//     srcFolder: srcFolder,
//     rootFolder: rootFolder,
//     ftp: ''
// }