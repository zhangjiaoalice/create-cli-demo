import { Command } from "commander";
import { logger } from "../../utils/logger";

export function build(program: Command) {
    // logger.log("构建项目build====", args);
    // 创建一个build 的command 的实例
    return program.createCommand("build")
    .description("构建项目")
    .action(() => {
        logger.info("构建项目build====");
    })
}
