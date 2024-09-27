var posts=["2024/09/10/FreeModbus/","2024/09/22/freertos-1/","2024/09/13/STM32F407-modbus/","2024/09/25/freertos-4/","2024/09/23/freertos-2/","2024/09/01/ringfifo-0/","2024/09/23/freertos-3/","2024/09/06/miniroot/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };