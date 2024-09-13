var posts=["2024/09/13/test-md/","2024/09/04/FreeModbus/","2024/09/13/test2/","2024/09/13/hello-world/","2024/09/13/mytxt/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };