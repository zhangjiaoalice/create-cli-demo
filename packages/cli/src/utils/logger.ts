import { createConsola } from 'consola';


// 单例模式： 只创建一次，避免重复创建，节省资源，提高性能，避免内存泄漏
export const logger = createConsola();
