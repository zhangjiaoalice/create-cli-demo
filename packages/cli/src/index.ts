// 入口文件，需要保持足够的简洁
import {run} from './cli';
export const defaultConfig = () => {
    return {
        name: 'default',
        age: 18,
    }
}

export const runCLI = () => {
    run(process.argv);
}
