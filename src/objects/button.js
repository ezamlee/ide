  button = {
      "desc":{
        "id"    : "1",
        "type" : "button",
        "desc"  : "This is simple button",
        "lic"   : "Apache 2"
      }
      ,"ui":{
              "skeleton" : function(obj){
                return  `<button>${obj.data.static.title}</button>`;
              },
              "css":{
                "button":{
                  "class"  :["btn","btn-default"],
                  "color"  :["blue"]
                }
              }
      }
      ,"data" :{
        "static":{
          "title":"select button"
        },
        "provided":{
          "username":{
            "func" : "getUserName",
            "parameters" : ["Heba Bahaa"]
          }
        }
      }
      ,"provider":{
        "functions":{
          "sayHi":function(name){
            return `Hi, ${name}`
          },
          "getUserName":function(username){
            return username;
          }
        }
        ,"events":{
          "click":[{"sayHi":["ahmed"]}]
        }
      }
  }
