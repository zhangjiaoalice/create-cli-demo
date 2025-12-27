// import { logger } from "../utils/logger";
// import { program } from "commander";
// import { Command } from "./index.data";
// import { registerCommand } from "./registerCommand";

// // 定义构建命令文件
// const build: Command = {
//     name: 'build',
//     description: '构建项目',
//     action: () => {
//         logger.log('构建项目');
//     }
// }

// // 定义启动项目命令文件
// const serve: Command = {
//     name: 'serve',
//     description: '启动项目',
//     action: () => {
//         logger.log('启动项目');
//     }
// }


// // 注册命令
// registerCommand(build);
// registerCommand(serve);

import { registerCommand } from "./registerCommand";
import { create } from './base/create';
import { build } from './base/build';
import { serve } from './base/serve';
import { greet } from "./base/greet";
import { info } from './base/info';
import { preview } from "./base/preview";

registerCommand(create);
registerCommand(build);
registerCommand(serve);
registerCommand(greet);
registerCommand(info);
registerCommand(preview);

