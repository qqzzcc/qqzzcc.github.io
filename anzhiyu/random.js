var posts=["2023/11/29/1-0博客搭建/","2023/11/30/1-1主题应用/","2023/11/30/1-2图床部署/","2023/12/05/11-网络分析工具WireShark的使用/","2023/12/06/12-1制作HTML/","2023/12/01/3-0python环境配置与vscode使用/","2023/12/02/4-0钓鱼网站/","2023/12/02/4-1flash钓鱼与优化/","2023/12/02/6-0CentOs的安装与SSH登入/","2023/12/02/6-1CentOs使用与bosh脚本/","2023/12/03/7-1Linux学习资料/","2023/12/04/9-java环境配置与安卓病毒监听/","2023/12/08/13-0 Vue与postman与navicat安装/","2023/12/15/13-2 html导入vue/","2023/12/16/13-3 vue数据绑定与交互/","2023/12/17/13-4 文件上传与评论功能/","2023/12/20/14-1 漏洞/","2023/12/20/14-2 SQL-Injections/","2023/12/06/12-0 HTML5从入门到入坟/","2023/11/30/1-3 Typora从入门到入坟/","2023/12/20/13-5 yakit安装使用与postman的使用/","2023/12/12/13-1 php从入门到入坟/","2023/12/20/13-6 mysql语法学习/","2023/12/21/14-3 sqlmap使用/","2023/12/22/14-4sqli-labs学习/","2023/12/03/7-0Linux从入门到入坟/","2023/12/01/3-1python从入门到入坟/","2023/11/29/0-0我的GitHub/","2023/11/29/0-2代理猫猫/","2023/12/04/10-0网络学习/","2023/12/04/10-1 OSI 7层模型学习/","2023/12/28/14-5安全狗与burpsuitepro/","2023/12/29/15-基础的数据交互/","2024/01/02/16-0 portswigger-labs/","2024/01/02/16-1 Oracle SQL注入学习/","2024/01/02/17-0信息收集/","2024/01/02/17-1kali msfconsole/","2024/01/02/17-2谷歌语法/","2024/01/02/17-3 nmap/","2024/01/02/17-4靶机test/","2024/01/02/17-5网络空间搜索引擎平台/","2024/01/02/18-支付逻辑漏洞/","2024/01/04/19-pikachu/","2023/11/30/2-0永恒之黑漏洞的使用/","2023/11/30/2-1vmware/","2024/01/04/20-oracle mv virtualbox/","2024/01/04/21-MONEYBOX学习/","2024/01/05/22-alist/","2024/01/07/23-windows常见命令/","2023/12/01/3-2JavaScript从入门到入坟/","2023/12/04/8-0反弹shell与正向Shell/","2023/12/04/8-1三次握手和四次挥手/","2023/12/02/5.大灰狼远控与Quasar远控/","2024/01/09/24-文件上传漏洞/","2024/01/10/26-靶机/","2024/01/11/27-wiershark学习/","2024/01/12/28-靶机hackadenic/","2024/01/14/29-轻量云服务器/","2024/01/14/30-web安全技术漏洞靶场/","2024/01/15/31-1 xss漏洞/","2024/01/19/31-2 xss的beef工具/","2024/01/20/32-1命令执行漏洞/","2024/01/22/32-3密码学/","2024/01/22/33-信息泄露点/","2024/01/21/32-2代码执行漏洞/","2024/01/23/34-权限维持/","2024/01/24/35-靶机Medium_socialnetwork/","2024/01/24/36-靶机easy_cloudantivirus/","2024/01/01/999模板文件/","2024/01/10/25-爆破木马路径/","2023/11/29/0-1社会工程学/","2024/01/25/37-文件包含/","2024/01/27/38-靶机MORIARTY CORP/","2024/02/20/39-CSRF与SSRF/","2024/02/21/41-序列与反序列化/","2024/02/21/40-面向对象/","2024/02/22/42-xxe/","2024/02/23/43-redis/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };