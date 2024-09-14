var posts=["2024/09/04/FreeModbus/","2024/09/14/RingFifo/","2024/09/13/STM32F407-modbus/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };