import { program } from "commander";
import { logger } from "../../utils/logger";
import { spawn } from "node:child_process";

export function serve() {
    // logger.log("开发环境serve====", args);
    return program.createCommand("serve")
    .description("启动项目")
    .action(() => {
        // 执行项目的打包命令， npm run serve, npm run dev
        // node 中如何执行命令, spawn 是一个子进程，用于执行命令
        logger.info("开发环境serve====");
        const command = 'npm';
        const params = ['run','dev'];
        const child = spawn(command, params, { stdio: 'inherit' });
        child.on('close', (code) => {
            logger.info(`子进程退出，退出码 ${code}`);
        });
    })

}
