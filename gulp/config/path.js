import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
<<<<<<< HEAD
    files: `${buildFolder}/files/`,
=======
>>>>>>> 05ace0d (initial commit)
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,ico}`,
    svg: `${srcFolder}/img/**/*.svg`,
<<<<<<< HEAD
    files: `${srcFolder}/files/**/*.*`,

=======
>>>>>>> 05ace0d (initial commit)
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/**/**/*.scss`,
<<<<<<< HEAD
    js: `${srcFolder}/js/**/*.js`,
=======
    js: `${srcFolder}/**/*.js`,
>>>>>>> 05ace0d (initial commit)
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,ico,svg}`,
    files: `${srcFolder}/files/**/*.*`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  // Название папки на удаленном сервере, куда будет выгружен проект
  ftp: `test`,
}