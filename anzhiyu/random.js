var posts=["2023/12/02/0.我的博客/","2023/12/02/1.hello-world/","2023/11/30/2.起始/","2023/12/02/3.python环境配置与vscode使用/","2023/12/02/4.0钓鱼网站/","2023/12/02/4.1flash钓鱼/","2023/12/02/5.远程控制/","2023/12/02/4.2flash钓鱼优化/","2023/12/01/6.0 CentOS的安装/","2023/12/01/6.2 SSH/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };