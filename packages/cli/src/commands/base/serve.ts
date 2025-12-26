import { program } from "commander";
import { logger } from "../../utils/logger";

export function serve() {
    // logger.log("开发环境serve====", args);
    return program.createCommand("serve")
    .description("启动项目")
    .action(() => {
        logger.info("启动项目serve====");
    })

}
