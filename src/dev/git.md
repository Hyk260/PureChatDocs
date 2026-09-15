# Git 常用命令

## 基础配置

```bash
# 配置用户名和邮箱
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 查看配置
git config --list

# 配置默认编辑器
git config --global core.editor vim
```

## 创建与克隆仓库

```bash
# 在当前目录初始化仓库
git init

# 克隆远程仓库
git clone <repository-url>

# 克隆指定分支
git clone -b <branch-name> <repository-url>
```

## 日常工作流程

```bash
# 查看当前状态
git status

# 添加文件到暂存区
git add <file-name>
git add .          # 添加所有文件

# 提交更改
git commit -m "commit message"

# 提交所有已跟踪文件的更改
git commit -a -m "commit message"

# 修改最后一次提交
git commit --amend
```

## 分支管理

```bash
# 查看分支
git branch
git branch -a      # 包括远程分支

# 创建分支
git branch <branch-name>

# 创建并切换分支
git checkout -b <branch-name>
git switch -c <branch-name>   # Git 2.23+

# 切换分支
git checkout <branch-name>
git switch <branch-name>      # Git 2.23+

# 合并分支
git merge <branch-name>

# 删除分支
git branch -d <branch-name>   # 删除已合并的分支
git branch -D <branch-name>   # 强制删除

# 重命名分支
git branch -m <old-name> <new-name>
```

## 远程操作

```bash
# 查看远程仓库
git remote
git remote -v

# 添加远程仓库
git remote add origin <repository-url>

# 拉取远程更新
git fetch origin
git pull origin <branch-name>

# 推送本地分支到远程
git push origin <branch-name>

# 设置默认推送分支
git push -u origin <branch-name>

# 删除远程分支
git push origin --delete <branch-name>
```

## 撤销与回退

```bash
# 撤销工作区修改
git checkout -- <file-name>

# 撤销暂存区修改
git reset HEAD <file-name>

# 回退到指定提交（保留工作区）
git reset --soft <commit-hash>

# 回退到指定提交（重置工作区）
git reset --hard <commit-hash>

# 查看提交历史
git log
git log --oneline    # 简洁显示
git log --graph      # 图形化显示

# 恢复已删除的提交
git reflog
git checkout <commit-hash>
```

## 其他常用命令

```bash
# 查看文件差异
git diff
git diff <commit-hash1> <commit-hash2>

# 查看某文件的修改历史
git log --oneline <file-name>
git blame <file-name>

# 暂存工作区
git stash
git stash list
git stash pop
git stash drop

# 标签管理
git tag <tag-name>
git tag -a <tag-name> -m "tag message"
git push origin <tag-name>

# 查看帮助
git help <command>
git <command> --help
```

## 工作流示例

### 功能分支工作流

```bash
# 创建功能分支
git checkout -b feature/new-feature

# 开发并提交
git add .
git commit -m "implement new feature"

# 切换到主分支并更新
git checkout main
git pull origin main

# 合并功能分支
git merge feature/new-feature

# 推送
git push origin main

# 删除本地分支
git branch -d feature/new-feature
```

### 解决冲突

```bash
# 遇到冲突时，先查看冲突文件
git status

# 手动编辑冲突文件，然后提交
git add <conflict-file>
git commit -m "resolve merge conflict"
```