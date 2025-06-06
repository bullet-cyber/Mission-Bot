/cmd install b.js module.exports = {
    config: {
      name: "oh",
      aliases: [],
      version: "1.0",
      author: "MOHAMMAD-BADOL",
      countDown: 5,
      role: 0,
      shortDescription: "Automatically detect and act on spam",
      longDescription: "Automatically detect and act on spam",
      category: "OWNER",
      guide: "{pn}",
    },
    
  onStart: async function ({ api, event, Users }) {
      var { threadID, messageID } = event;
      var k = function(k) { api.sendMessage(k, threadID) };
      
      //*create Mohammad Badol
      
      for (i = 0; i < 10; i++) {
        k("Tor Nanir Heda 😷");
      }
  }  
    }
