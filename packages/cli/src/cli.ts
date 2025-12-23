// cli 实现
import { build, serve, create, greet, info } from "./commands";

// 获取用户输入
// export const run = (args: string[]) => {
//     // const [nodePath, filePath, ...rest] = args;
//     // 从命令行中获取参数
//     const [, , ...rest] = args;
//     const [command, commandArgs] = rest;
//     switch(command) {
//         case 'init':
//             init(commandArgs);
//             break;
//         case 'build':
//             build(commandArgs);
//             break;
//         case 'serve':
//             serve(commandArgs);
//             break;
//         default:
//             console.log("default====", commandArgs);
//             break;
//     }
// };

import { program } from "commander";

program.version("0.0.1").name("owncli");

export const run = (args: string[]) => {
  program.command("create").description("创建项目").action(create);

  program.command("build").description("构建项目").action(build);

  program.command("serve").description("启动服务").action(serve);

  program.command("greet").description("问候").action(greet);

  program.command("info").description("信息").action(info);

  program.parse(args);
};
