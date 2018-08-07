
var Crawler = require("crawler");
var jsdom = require('jsdom');

var c = new Crawler({
    maxConnections : 10,
    jQuery: jsdom,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;

            var html = res.body;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($('.bp')[0].innerHTML);
            var parentContainer = $('.bp').parent()
            var parentClass = parentContainer[0].className
            var bparr = $('.bp');
            $('.bp').remove()
            var body = $('body').html()
            var placeHolders = []

            $.each(bparr, function (i, v) {
              let name = v.className.split(' ')[0];
              placeHolders.push(name)
            })
            console.log(placeHolders)
            var str = ''
            for(var i in placeHolders){
              str +=  '<div class='+placeHolders[i]+'></div>'
            }
            $('.'+parentClass).html(str)

            
            console.log($(parentClass).html())



        }
        done();
    }
});

// Queue just one URL, with default callback
c.queue('http://127.0.0.1:8080/demo.html');