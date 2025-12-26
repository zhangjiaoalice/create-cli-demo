### bin
可执行文件，一般放置一些二进制文件


### #!/usr/bin/env node 
用于命令行工具入口，作用是指定脚本使用 node 解释器运行。


# package.json 文件中配置项的作用
### 1. bin：定义命令行工具入口
作用：定义命令行工具的入口文件或命令别名。


### 2. main：定义模块的主入口
作用：定义模块的主入口文件.


### 3. module：指定 ESM 模块入口
作用：指定 ESM 模块的入口文件。

### 4. types：指定类型声明文件
作用：指定类型声明文件。

### 5. files：控制发布文件范围
作用：控制发布时包含的文件范围。

### 6. exports：高级模块导出控制
作用：精确控制包的导出路径，支持条件导出（按环境、模块类型等）。

### 7. scripts：定义构建脚本
作用：定义项目构建、测试、启动等脚本命令。

### 8. dependencies：依赖包
作用：定义项目运行时依赖的包。

### 9. devDependencies：开发依赖
作用：定义项目开发时依赖的包。

### 10. peerDependencies：peer 依赖
作用：定义与宿主环境共享的依赖包。

### 11. optionalDependencies：可选依赖
作用：定义可选安装的依赖包。

### 12. workspaces：工作区
作用：定义 monorepo 工作区。

### 13. publishConfig：发布配置
作用：定义发布时的配置项。

### 14. engines：引擎要求
作用：定义项目运行所需的引擎版本。


# tsup
tsup 是一个 TypeScript 编译器和打包工具，用于编译和快速 TypeScript 项目。基于 esbuild, 以极快的速度和低配置实现对 TypeScript 文件的打包


# cli工具开发常用依赖
1. @types/node - Node.js 类型声明
2. commander - 解析命令行参数的工具
3. consola - 命令行工具输出
4. picocolors - 命令行工具颜色
5. prompts - 命令行工具交互
