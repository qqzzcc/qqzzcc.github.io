var posts=["2023/11/30/hello-world/","2023/11/30/test-my-site/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };