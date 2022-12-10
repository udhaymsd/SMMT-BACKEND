require('dotenv').config();

const express = require('express');
const db = require('./db/connect');


const app = express();
db();

app.get('/',(req, res) => {
    res.send('Welcome to my APP');
});

const tool = [
    {
        "services": {
          "twitter": {
            "types": {
              "profile": {
                "name": "Twitter",
                "character_limit": 140,
                "schedule_limit": 730,
                "characters_per_media": 24,
                "short_url_length": 23,
                "short_url_length_https": 23,
                "icons": {
                  "16": "http:\/\/static.bufferapp.com\/images\/services\/twitter-16x16
                        .png",
                  "32": "http:\/\/static.bufferapp.com\/images\/services\/twitter-32x32
                        .png",
                  "64": "http:\/\/static.bufferapp.com\/images\/services\/twitter-64x64
                        .png"
                },
                "supported_interactions": [
                  "mentions",
                  "mention",
                  "retweets",
                  "retweet"
                ],
                "link_attachments": false
              }
            },
            "urls": {
              "user": "https:\/\/twitter.com\/",
              "hashtag": "https:\/\/twitter.com\/#!\/search?q=%23",
              "cashtag": "https:\/\/twitter.com\/#!\/search?q=%24"
            },
            "analytics_filters": [
              "retweets",
              "favorites",
              "replies",
              "clicks",
              "reach"
            ]
          },
          "facebook": {
            "types": {
              "profile": {
                "name": "Facebook",
                "character_limit": 5000,
                "schedule_limit": 25,
                "icons": {
                  "16": "http:\/\/static.bufferapp.com\/images\/services\/facebook-
                        16x16.png",
                  "32": "http:\/\/static.bufferapp.com\/images\/services\/facebook-
                        32x32.png",
                  "64": "http:\/\/static.bufferapp.com\/images\/services\/facebook-
                        64x64.png"
                },
                "supported_interactions": [
                  "likes",
                  "like",
                  "comments",
                  "comment"
                ],
                "link_attachments": true
              },
              "page": {
                "name": "Facebook Page",
                "character_limit": 5000,
                "schedule_limit": 25,
                "icons": {
                  "16": "http:\/\/static.bufferapp.com\/images\/services\/facebook-
                        16x16.png",
                  "32": "http:\/\/static.bufferapp.com\/images\/services\/facebook-
                        32x32.png",
                  "64": "http:\/\/static.bufferapp.com\/images\/services\/facebook-
                        64x64.png"
                },
                "supported_interactions": [
                  "likes",
                  "like",
                  "comments",
                  "comment"
                ],
                "link_attachments": true
              },
              "group": {
                "name": "Facebook Group",
                "character_limit": 5000,
                "schedule_limit": 25,
                "icons": {
                  "16":"http:\/\/static.bufferapp.com\/images\/services\/fb-group-16x16
                        .png",
                  "32":"http:\/\/static.bufferapp.com\/images\/services\/fb-group-32x32
                        .png",
                  "64":"http:\/\/static.bufferapp.com\/images\/services\/fb-group-64x64
                        .png"
                },
                "supported_interactions": [
                  "likes",
                  "like",
                  "comments",
                  "comment"
                ],
                "link_attachments": true
              }
            },
            "urls": {
              "user": "https:\/\/www.facebook.com\/"
            },
            "analytics_filters": [
              "likes",
              "comments",
              "clicks",
              "shares",
              "reach"
            ]
          },
          "linkedin": {
            "types": {
              "profile": {
                "name": "LinkedIn",
                "character_limit": 3000,
                "schedule_limit": 100,
                "icons": {
                  "16": "http:\/\/static.bufferapp.com\/images\/services\/linkedin-
                        16x16.png",
                  "32": "http:\/\/static.bufferapp.com\/images\/services\/linkedin-
                        32x32.png",
                  "64": "http:\/\/static.bufferapp.com\/images\/services\/linkedin-
                        64x64.png"
                },
                "supported_interactions": [
                  "comments",
                  "comment",
                  "likes",
                  "like"
                ],
                "link_attachments": true
              },
              "group": {
                "name": "LinkedIn Group",
                "character_limit": 200,
                "schedule_limit": 100,
                "icons": {
                  "16": "http:\/\/static.bufferapp.com\/images\/services\/linkedin-
                        16x16.png",
                  "32": "http:\/\/static.bufferapp.com\/images\/services\/linkedin-
                        32x32.png",
                  "64": "http:\/\/static.bufferapp.com\/images\/services\/linkedin-
                        64x64.png"
                },
                "supported_interactions": [
                  "comments",
                  "comment",
                  "likes",
                  "like"
                ],
                "link_attachments":true
              },
              "page": {
                "name": "LinkedIn Page",
                "character_limit": 3000,
                "schedule_limit": 100,
                "icons": {
                  "16": "http:\/\/static.bufferapp.com\/images\/services\/linkedin-
                        16x16.png",
                  "32": "http:\/\/static.bufferapp.com\/images\/services\/linkedin-
                        32x32.png",
                  "64": "http:\/\/static.bufferapp.com\/images\/services\/linkedin-
                        64x64.png"
                },
                "supported_interactions": [
                  "comments",
                  "comment",
                  "likes",
                  "like"
                ],
                "link_attachments": true
              )
            },
            "urls": {
              "user": "http:\/\/www.linkedin.com\/search\/fpsearch?type=people&
                      keywords="
            },
            "analytics_filters": [
              "comments",
              "likes",
              "clicks",
              "reshares",
              "connections"
            ]
          },
          "google": {
            "types": {
              "profile": {
                "name": "Google+",
                "character_limit": 5000,
                "schedule_limit": 100,
                "icons": {
                  "16": "http:\/\/static.bufferapp.com\/images\/services\/google-16x16
                        .png",
                  "32": "http:\/\/static.bufferapp.com\/images\/services\/google-32x32
                        .png",
                  "64": "http:\/\/static.bufferapp.com\/images\/services\/google-64x64
                        .png"
                },
                "supported_interactions": [
                  "plusOnes",
                  "plusOne",
                  "comments",
                  "comment",
                  "reshares",
                  "reshare"
                ],
                "link_attachments": true
              },
              "page": {
                "name": "Google+ Page",
                "character_limit": 5000,
                "schedule_limit": 100,
                "icons": {
                  "16": "http:\/\/static.bufferapp.com\/images\/services\/google-16x16
                        .png",
                  "32": "http:\/\/static.bufferapp.com\/images\/services\/google-32x32
                        .png",
                  "64": "http:\/\/static.bufferapp.com\/images\/services\/google-64x64
                        .png"
                },
                "supported_interactions": [
                  "plusOnes",
                  "plusOne",
                  "comments",
                  "comment",
                  "reshares",
                  "reshare"
                ],
                "link_attachments": true
              }
            },
            "urls": {
              "user": "http:\/\/plus.google.com\/"
            },
            "analytics_filters": [
              "comments",
              "clicks",
              "reshares",
              "+1s"
            ]
          }
        },
        "media": {
          "picture_size_min": 0,
          "picture_size_max": 3415728,
          "picture_filetypes": [
            "jpeg",
            "jpg",
            "gif",
            "png"
          ]
        }
      }
];

app.get('/tool',(req, res) => {
    res.send('tool');
});



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('App is running on PORT ${PORT}');
})