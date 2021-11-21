import getPageLink from "./packages/mars-theme/src/helper/getPageLink";

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
              getPageLink('today'),
            ],
            [
              "Tomorrow",
              getPageLink('yesterday'),
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
          "url": "https://matzelt.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
