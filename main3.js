var dom = (function(){
    
   var _counter = 0,
   
   function  getInstance() {
       return "customId" + _counter++;
   }
   
   function create(tagName, id) {
       var el = document.createElement(tagName);
        el.id = id || generateId();
        return el;
   }
   function createInstance() {
       return {
           generateId: generateId,
           create: create
       };
   }
   return {
 getInstance: function() {
     return instance || (instance = createInstance());
 }
   };
    
}());







//};