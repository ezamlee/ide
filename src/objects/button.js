  button = {
      "desc":{
        "id"    : "1",
        "class" : "button",
        "desc"  : "This is simple button"
      }
      ,"ui":{
        "skeleton" : ``,
        "css"      :{
          "button":{
            "class"  :["btn","btn-default"],
            "color"  :"blue"
          }
        }
      }
      ,"data" :{
        "static":{
          "title":"select button"
        }
      }
      ,"provider":{
        "functions":{
          "sayHi":function(name){
            return `Hi, ${name}`
          },
          "init":function(obj){
            console.log(this)
            obj.ui.skeleton = `<button>${obj.data.static.title}</button>`
          }
        }
        ,"events":{
          "click":["sayHi","ahmed"]
        }
      }
  }
