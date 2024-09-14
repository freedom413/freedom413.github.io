var posts=["2024/09/04/FreeModbus/","2024/09/13/STM32F407-modbus/","2024/09/14/ringfifo-0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };