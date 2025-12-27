import { Command } from "commander";
import { logger } from "../../utils/logger";
import { spawn } from "node:child_process";

export function preview(program: Command) {
    // logger.log("构建项目build====", args);
    // 创建一个build 的command 的实例
    return program.createCommand("preview")
    .description("构建项目")
    .action(() => {
        // 执行项目的打包命令， npm run build
        logger.info("构建项目build====");
        const command = 'npm';
        const params = ['run','preview'];
        const child = spawn(command, params, { stdio: 'inherit' });
        child.on('close', (code) => {
            logger.info(`子进程退出，退出码 ${code}`);
        });
    })
}
