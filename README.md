

pdMaas-CE
===

## 项目简介
PDMaas（Product Design as a Service）是一个产品设计即服务的解决方案，允许用户通过云端进行产品设计和协作。

## 开发环境要求
- Node.js v16.19.0
- npm v8.19.3

## 启动与构建
- **启动开发环境**: 使用命令 `npm run start`
- **打包构建安装包**: 使用命令 `npm run package-all`

## 功能组件
PDMaas 包含一系列功能组件，如设计工具、版本控制、协同编辑等，具体细节请参考源码中的实现。

## 资源文件
- 包含大量的图标资源，用于图形化界面设计。
- 使用了 draw.io 的相关资源和配置文件，支持图表和界面设计。

## 依赖库
- 使用了多个第三方库，包括但不限于：
  - `pako.min.js`：用于压缩和解压功能。
  - `aes.min.js`：用于加密功能。
  - `deflate`：用于数据压缩。
  - `mermaid.min.js`：用于绘制图表。
  - `jszip`：用于处理 ZIP 文件。
  - `cryptojs`：用于加密操作。
  - `orgchart.min.js`：用于组织结构图的绘制。

## 插件和扩展
- 支持插件扩展，具体可以参考 `public/asset/drawio/js/extensions.min.js`。

## 图表和设计工具
- 包含 draw.io 的设计工具，支持流程图、网络图、UML 图等的绘制。

## 许可证
本项目使用了多种第三方组件和库，请查看 LICENSE 文件了解具体的许可协议。

## 使用说明
请参考官方文档或联系项目维护者获取详细的使用说明和API文档。

## 贡献指南
我们欢迎社区贡献，具体贡献指南请查看 CONTRIBUTING.md 文件。

## 联系方式
- 那些对项目有疑问或需要帮助的用户可以通过 issues 功能在 Gitee 上提出。
- 项目维护者邮箱：yonsum@163.com

## 仓库地址
- Gitee: [https://gitee.com/yonsum/PDMaas](https://gitee.com/yonsum/PDMaas)

请注意，以上信息基于项目结构和依赖关系的推断，具体功能和实现请参考源码和官方文档。