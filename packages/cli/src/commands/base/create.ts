import { Command } from "commander";
import { logger } from "../../utils/logger";
import pc from 'picocolors';
import { loadTemplate } from "../../utils/loadTemplate";

/***
 * 命令行创建命令，用于创建项目，这个命令是我们开发命令中最复杂的一个命令，涉及的内容：
 * 1. 解析参数
 * 2. 匹配技术栈， Vue/React
 * 3. 匹配模板，区分是本地模板（vue-ts、vue-js、react-ts、react-js）还是远程模板
 * 4. 对模板进行加工（例如修改 package.json name 等）
 * 5. 完成创建
 */

export function create(program: Command) {
    // 创建一个build 的command 的实例
    return program.createCommand("create")
    .description("创建项目")
    .action(() => {
        // 初始化项目
        // 拉取模板
        // 加载本地模板、远程模板
        logger.info(pc.bgRedBright('创建项目,拉取react-ts模板'));
        loadTemplate('react-ts');
    });
}
