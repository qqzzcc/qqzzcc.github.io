var posts=["2023/11/29/0.我的博客/","2023/11/29/1-0博客搭建/","2023/11/30/1-1主题应用/","2023/11/30/1-2图床部署/","2023/11/30/2.永恒之黑漏洞的使用/","2023/12/01/3-0python环境配置与vscode使用/","2023/12/01/3-1python语法学习/","2023/12/02/4-1flash钓鱼与优化/","2023/12/02/5.大灰狼远程控制/","2023/12/02/4-0钓鱼网站/","2023/12/02/6-0CentOs的安装与SSH登入/","2023/12/02/6-1CentOs与Linux语法/","2023/12/03/7.Linux从入门到精通/","2023/12/04/8-反弹shell与正向Shell/","2023/12/04/9-java环境配置与安卓病毒监听/","2023/12/04/10-Ipv6-路由器/","2023/12/05/11-网络分析工具WireShark的使用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };