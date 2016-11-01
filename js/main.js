/**
 * Created by html on 31.10.2016.

var Person = function(config){
    this.name = config.name;
    this.age = config.age;
    this.job = config.job;
};

Person.prototype.walk = function(){
  return this.name + ' is walking';
};

var nick = new Person({name: 'Nick', age:'24',job:'Front-end-developer'});
 */
var Person = Backbone.Model.extend({// на жаргоне это класс
    defaults: {
        name: 'Dima',
        age: 23,
        job: 'web-developer'
    },

    validate: function(attrs) {
        console.log(attrs);

        //if (!attrs.name){
           // return "Имя не должно быть пустым";
        //}



        if ( attrs.age <= 0 ) {
          return 'Возраст должен быть положительным !';
        }
    }

   // walk:function(){
   //     return this.get('name')+ ' is walking'
   // }

});

//CONSOLE COMMANDS
//var person = new Person;
//person;
//person.on('error', function(model, error) {console.log(error)});
//person.set("age","-25",{validate:true});
//person;