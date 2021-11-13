const settings = {
  "name": "frontendpwa",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Youth Exchange Timetable",
      "description": "A simple timetable App for our Youth Exchange"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Today",
              "/07-11-2021/"
            ],
            [
              "Tomorrow",
              "/08-11-2021/"
            ],
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://matzelt.com/wordpress"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
