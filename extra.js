var cheerio = require ("cheerio");
var axios = require ("axios");

axios.get ("https://dogtime.com/dog-breeds/affenpinscher#/slide/1").then(function(response){
    var $ = cheerio.load(response.data);

    var results =[];

    $("header").each(function(i, element){
        var summary = $(element).children("h2").children("p").text();

        results.push(
            summary
        )
        // fs.writeFile ("images.json", JSON.stringify(results), function(err) {
        //     if (err) throw err;
        //     console.log('complete');
        //     })
        
    })

    console.log(results)
})