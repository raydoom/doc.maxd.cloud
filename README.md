---
home: true
tagline:
title: 首页
footer: CC-BY-NC-SA-4.0 Licensed with Additional Terms
---

## 帮助文档的正确使用姿势

- 顶栏右侧有常用条目的链接，部分页面的左边栏会显示相关条目的链接
- 在顶部搜索框中输入关键字、报错信息等可进行全文搜索，请善用搜索功能

## 重要提示

所有命令建议复制使用，如果要自行输入，请注意区分 `0` (数字) 和 `O` (大写字母) 和 `o` (小写字母)。

本文档中所有 **必须参数** 使用 `<>` 标出，所有 **可选参数** 使用 `[]` 标出，多个可选项使用 `|` 分开。

在实际操作时 **不需要** 输入 `<>` 和 `[]`，当碰到 `|` 分开的选项时只能选择其中 **任意一个** 输入。

1. 例如文档中写道:

   ```ini
   force_https = <Int>
   ```

   您准备将 `force_https` 选项设置为 `302`，则 **应该** 输入:

   ```ini
   force_https = 302
   ```

   而 **不应该** 输入:

   ```ini
   force_https = <302>
   ```

2. 例如文档中写道:

   ```bash
   # 执行
   service frpc <restart|start>
   ```

   您准备执行该命令，则 **应该** 使用:

   ```bash
   service frpc restart
   # 或
   service frpc start
   ```

   而 **不应该** 使用:

   ```bash
   service frpc restart|start
   ```
