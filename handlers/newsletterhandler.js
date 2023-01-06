const request = require("request");
const cheerio = require("cheerio");
const { head } = require("request");

// Website URLs
const CNN = `https://www.cnn.com/politics`;

// Send HTTP Request to Website
request(CNN, (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const headlines = $(`.cd_headline`);

        headlines.each((i, headline) => {
            console.log($(headline).text());
        })
    }
})
