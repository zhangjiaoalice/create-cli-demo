// 针对本地的模板就是简单的fs操作
import { copy } from 'fs-extra'
import { join } from 'node:path';

// import.meta.dirname 是 vite 的一个特性，可以获取当前文件的目录
// readFile(join(__dirname, '../package.json'), 'utf-8', (err, data) => {
//   if (err) {
//     logger.log(err)
//     return
//   }
//   logger.log(data)
// })

export const loadTemplate = async (templateName: string) => {
    // 将模板文件拷贝到当前目录下
    const templatePath = join(__dirname, '..', '..', 'src', 'templates', `template-${templateName}`);
    await copy(templatePath, `${process.cwd()}/owncli-demo`);
}
