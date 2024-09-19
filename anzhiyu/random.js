var posts=["2024/09/10/FreeModbus/","2024/09/13/STM32F407-modbus/","2024/09/06/miniroot/","2024/09/01/ringfifo-0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };