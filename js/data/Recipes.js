/**
 * Created by nickaspinall on 13/02/15.
 */

var Recipes = {
  _clone:
  {
    "title": "",
    "summary": "",
    "description": "",
    "meta": {
      "skillLevel": 1, // Int 1 - 5
      "timePrep": null, // Time value is seconds, displayed in mins or hours
      "timeCooking": null // Time value is seconds, displayed in mins or hours
    },
    // The ordered process of creation
    "menuSteps": {
      // Preparation
      "prep": [
        // {name: 'Prepare vegetables', {text: 'Wash all veg thoroughly. Top & tail carrots the slice length ways', video: {url: '//youtube.com/gdhg7564'}}}
      ],
      // Cooking
      "cook": []
      // Post cook ?
    }
  },
  data: [
    {
      "title": "Cake",
      "summary": "This is the most awesome cake ever!",
      "description": "This is the most awesome cake ever!",
      "meta": {
        "skillLevel": 1, // Int 1 - 5
        "timePrep": 30, // Time value is mins, displayed in mins or hours
        "timeCooking": 90 // Time value is mins, displayed in mins or hours
      },
      // The ordered process of creation
      "menuSteps": {
        // Preparation
        "prep": [
          // {name: 'Prepare vegetables', {text: 'Wash all veg thoroughly. Top & tail carrots the slice length ways', video: {url: '//youtube.com/gdhg7564'}}}
        ],
        // Cooking
        "cook": []
        // Post cook ?
      }
    }
  ]
};

module.exports = Recipes;
