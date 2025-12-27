import { logger } from './logger';
import { copy } from 'fs-extra'
import { join } from 'node:path';
import { downloadTemplate } from 'giget';

// import.meta.dirname 是 vite 的一个特性，可以获取当前文件的目录
// readFile(join(__dirname, '../package.json'), 'utf-8', (err, data) => {
//   if (err) {
//     logger.log(err)
//     return
//   }
//   logger.log(data)
// })

// __dirname 是 node 的一个全局变量，可以获取当前文件的目录


interface LoadTemplateParams {
    projectName: string;
    templateName: string;
    local?: boolean;
}
// Omit 是 typescript 的一个类型，可以排除某个类型的某个属性
// 拉取本地模板
export const loadLocalTemplate = async (params: Omit<LoadTemplateParams, 'local'>) => {
    const { projectName, templateName } = params;
    // 将本地模板文件拷贝到当前目录下
    const templatePath = join(process.cwd(), 'src', 'templates', `template-${templateName}`);
    await copy(templatePath, `${process.cwd()}/${projectName}`);
}

// 拉取远程模板

// fetch remote template
// 1. use github api
// This solution has API request limits
// const { source, dir } = await downloadTemplate('https://api.github.com/repos/mantinedev/vite-template/tarball')
// 2. use github shorthand
// const { source, dir } = await downloadTemplate('github:unjs/template')
// 3. custom provider
// https://github.com/unjs/giget/tree/main/templates
// 4. use code load
// github: https://github.com/design-sparx/antd-multipurpose-dashboard
export const loadRemoteTemplate = async (params: Omit<LoadTemplateParams, 'local' | 'template'>) => {
    const { projectName } = params;
    const {dir} = await downloadTemplate(`https://codeload.github.com/design-sparx/antd-multipurpose-dashboard/tar.gz/refs/heads/main`, {
        dir: `${process.cwd()}/.temp`,
    });
    logger.log('远程模板：', dir);
    await copy(dir, `${process.cwd()}/${projectName}`);
}

export const loadTemplate = async (params: LoadTemplateParams) => {
    const { local, ...restParams } = params;
    if (local) {
        // 将本地模板文件拷贝到当前目录下
        await loadLocalTemplate(restParams);
        return;
    } else {
        // 远程模板
        await loadRemoteTemplate(restParams);
    }
}
