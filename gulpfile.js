import gulp from 'gulp'
import {path} from './gulp/config/path.js'

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path:path,
  gulp:gulp,
  plugins:plugins,
}
//  Импорт задач
<<<<<<< HEAD
import {copy} from "./gulp/tasks/copy.js"
=======
>>>>>>> 05ace0d (initial commit)
import {reset} from "./gulp/tasks/reset.js"
import {html} from "./gulp/tasks/html.js"
import {server} from "./gulp/tasks/server.js"
import { scss } from './gulp/tasks/scss.js'
import { js } from './gulp/tasks/js.js'
import { images } from './gulp/tasks/images.js'
import { zip } from './gulp/tasks/zip.js'
import { ftp } from './gulp/tasks/ftp.js'
import { fonts } from './gulp/tasks/fonts.js'

// Импорт всех плагинов
import { plugins } from './gulp/config/plugins.js'

// Наблюдатель изменений 
function watcher() {
  // (Путь до файлов, действие при изменении) 
<<<<<<< HEAD
  gulp.watch(path.watch.files, copy) // gulp.series(copy, ftp) — для каждой задачи, чтобы изменения автоматически отправлялись на сервер 
=======
  // gulp.watch(path.watch.files, copy) // gulp.series(copy, ftp) — для каждой задачи, чтобы изменения автоматически отправлялись на сервер 
>>>>>>> 05ace0d (initial commit)
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.js, js)
  gulp.watch(path.watch.images, images)
} 

<<<<<<< HEAD
const mainTasks = gulp.parallel(copy, html, scss, js, images, fonts)
=======
const mainTasks = gulp.parallel(html, scss, js, images, fonts)
>>>>>>> 05ace0d (initial commit)
// Построение сценариев порядка выполения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)
const deployZIP = gulp.series(reset, mainTasks, zip)
const deployFTP = gulp.series(reset, mainTasks, ftp)

export {dev}
export {build}
export {deployZIP}
export {deployFTP}
export {fonts}


gulp.task('default', dev)


