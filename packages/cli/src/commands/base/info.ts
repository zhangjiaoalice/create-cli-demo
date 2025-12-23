import {logger} from '../../utils/logger';
import pc from 'picocolors';
import pkg from '../../../package.json';


export const info = async () => {
    // 打印日志
  logger.info("Use consola 3.0.0");
  logger.start("Building project...");
  logger.warn("A new version of consola is available: 3.0.1");
  logger.success("Build completed successfully!");
  logger.error(new Error("This is an example error. Everything is fine"));
  logger.box("I am a simple box");

  // 颜色控制
  logger.log(pc.red("This is a red text"));
  logger.log(pc.bgGreen(`Product: ${pkg.name} CLI Version: ${pkg.version}`));
  logger.log(pc.blue("This is a blue text"));
  logger.log(pc.underline("Website: https://github.com/nuxt/consola"));

  await logger.prompt("What is your name?", {
    type: "text",
  });
};
