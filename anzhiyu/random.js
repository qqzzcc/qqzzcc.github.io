var posts=["2023/11/30/0.我的博客/","2023/11/30/1.hello-world/","2023/11/30/2.起始/","2023/11/30/3.python环境配置与vscode使用/","2023/11/30/4.0钓鱼网站/","2023/11/30/4.1flash钓鱼/","2023/11/30/5.远程控制/","2023/11/30/4.2flash钓鱼优化/","2023/12/01/6.0 CentOS的安装/","2023/12/01/6.2 SSH/","2023/12/01/7-冬季/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };