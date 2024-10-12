# derp中继配置指南
进入tailscale官网注册账号，下载软件并登录账号，官网地址如下
```
https://login.tailscale.com
```
进入Tailscale 管理页面 – Access controls 标签页，地址如下
```
https://login.tailscale.com/admin/acls/file
```
清空删除原来的所有内容，将配置修改为以下内容（修改前建议备份原来的内容）
```
{
	"derpMap": {
        // OmitDefaultRegions 用来忽略官方的中继节点
		"OmitDefaultRegions": true,
		"Regions": {
			"900": {
				"RegionID":   900,
				"RegionCode": "sdu",
				"RegionName": "ShandongUnicom",
				"Nodes": [
					{
						"Name":     "900a",
						"RegionID": 900,
						"HostName": "xxxxx",
						"DERPPort": yyyyy,
						"STUNPort": zzzzz,
					},
				],
			},
		},
	},
}
```
其中以下三个参数需要修改为我指定的值：

> - "HostName": "xxxxx",
> - "DERPPort": yyyyy,
> - "STUNPort": zzzzz,

点击 Save 保存配置，重启tailscale客户端（所有的）后生效，可能需要稍等一会儿，如果重启5分钟后还未生效，请联系技术支持。
# 判断是否p2p直连成功（可选操作）
在其中一台终端，执行tailscale ping 命令，来ping 另外一个客户端的地址（通常为100.xxx.xxx.xxx 形式)
> 可以使用 tailscale status命令看到每个客户端的地址，也可以在tailscale官网的管理后台查看）。
```
tailscale ping 100.xxx.xxx.xxx
```
如果返回的信息中包含 `via DERP(sdu)` ，则表示直连失败，正在使用中继服务器；

否则，表示直连成功。