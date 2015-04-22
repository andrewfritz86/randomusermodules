var request = require('request');
var mustache = require('mustache');
var fs = require('fs');

//create an object to store our humanBehavior (functions)
var humanBehavior = {}


//create functions to export to our main program
humanBehavior.MakeHuman = function(name, gender, nationality, picture){
    this.name = name,
    this.gender = gender,
    this.nationality = nationality,
    this.picture = picture,
    this.render = function(){
        console.log("behavior time")
        var template = fs.readFileSync('./show.html', 'utf8');
        var html = mustache.render(template, {name: this.name, gender: this.gender, picture: this.picture, nationality: this.nationality});
        return html;
    }
}

humanBehavior.ShowHuman = function(req,res){
    request('http://api.randomuser.me/', function(err, response, body){
        var parsed = JSON.parse(body);
        var gender = parsed.results[0].user.gender;
        var name = parsed.results[0].user.name.title + " " + parsed.results[0].user.name.first + " " + parsed.results[0].user.name.last;
        var nationality = parsed.results[0].user.nationality;
        var picture = parsed.results[0].user.picture.medium;
        var newHuman = new humanBehavior.MakeHuman(name, gender, nationality, picture);
        res.send(newHuman.render());
    })
}


//we can 'export' behavior and data from this namespace as an object. It can then be required
//in other files and referenced as a module, thus keeping the global namespace clean
module.exports = humanBehavior;
