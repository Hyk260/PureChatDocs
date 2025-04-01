# 项目配置

## 环境变量

```
├── .env                   # 基础环境变量配置文件（优先级最低）
├── .env.local             # 本地环境变量配置文件（优先级最高 会被git忽略）
├── .env.development.local # 本地开发环境变量配置文件（会被git忽略）
├── .env.development       # 开发环境变量配置文件
├── .env.production        # 生产环境变量配置文件
├── .env.vercel            # 一件部署到vercel的配置文件 Import.env
```

## 具体配置

- [.env](https://github.com/Hyk260/PureChat/blob/main/.env#L1)
- [npmrc](https://github.com/Hyk260/PureChat/blob/main/.npmrc#L1)

## package.json

```json [package.json]
{
  "scripts": {
    // web 启动
    "dev": "vite",
    // web 打包（生产环境）
    "build": "vite build",
    // web 打包（测试环境）
    "build:dev": "vite build --mode development",
    // web 本地环境预览构建后的dist
    "preview": "vite preview",
    // electron 启动
    "app:dev": "electron-vite dev --watch",
    // electron（打包window）
    "app:builder:win": "electron-vite build && electron-builder --win",
    // electron（打包mac）
    "app:builder:mac": "electron-vite build && electron-builder --mac",
  }
}
```
