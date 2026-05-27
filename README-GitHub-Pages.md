# GitHub Pages 发布说明

这个目录已经是可直接发布的静态站点目录。

## 推荐发布方式

1. 把当前仓库上传到 GitHub。
2. 打开仓库页面。
3. 进入 `Settings`。
4. 打开 `Pages`。
5. 在 `Build and deployment` 里选择：
   `Source` -> `Deploy from a branch`
6. 在分支里选择你的发布分支，通常是 `main`。
7. 在目录里选择 `/docs`。
8. 保存。

## 发布入口

发布后，GitHub Pages 会使用这个文件作为首页：

- `docs/index.html`

## 目录说明

- `docs/index.html`：主页
- `docs/heroes/`：角色页
- `docs/comparisons/`：对比页
- `docs/assets/`：图片资源
- `docs/styles.css`：样式
- `docs/theme-toggle.js`：昼夜主题切换脚本

## 备注

- `.nojekyll` 已添加，避免 GitHub Pages 对静态资源做不必要处理。
- 如果你后续继续改本地版本，记得把对应改动同步到 `docs/` 目录再发布。
