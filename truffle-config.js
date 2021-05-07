module.exports = {
    
    //specify diff networks
  networks: {
      
      //connects 2 ganache
    development: {
      host: "127.0.0.1",
        
        //Ganache is running on this port
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}