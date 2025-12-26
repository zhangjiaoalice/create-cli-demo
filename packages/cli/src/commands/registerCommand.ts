/**
 * 基于插件化的实现
 */
// eg: Vue.use(VueRouter)

import { logger } from "../utils/logger";
import { program, Command } from "commander";

// 注册命令的函数
type Fn = (p: Command) => Command;

/**
 * 插件注册函数
 * @param ctx
 * @param command
 */
export function registerCommand(fn: Fn) {
  // 注册命令
  logger.log(`注册命令:`);
  // 先添加一个命令，但是这个命令暂时先不处理
  program.addCommand(fn(program));
  // 实际注册逻辑待补充
}


/***
 * 1. 先定义一个command 命令, program.createCommand() 创建一个实例
 * 2. 注册command，调用 program.addCommand() 方法
 */
