module.exports = (io) => {
  io.on('connection', async (socket) => {

    socket.broadcast.on('addNewBrand', (isSuccess) => {
      if(isSuccess){
          socket.broadcast.emit('getBrand', true);
      }      
    });

     socket.broadcast.on('updateBrand', (isSuccess) => {
      if(isSuccess){
          socket.broadcast.emit('getBrand', true);
      }      
    });

     socket.broadcast.on('deleteBrand', (isSuccess) => {
      if(isSuccess){
          socket.broadcast.emit('getBrand', true);
      }      
    });
  });
};
