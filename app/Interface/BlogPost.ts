interface BlogPreview {
  key: string;
  title: string;
  description: string;
  date: string;
  image: string;

  // Blog Category
  featured?: boolean;
}

interface BlogContent {
  subtitle: string;
  paragraph: ContentSection[];

  // Code Snippets
  code?: string;
}

interface ContentSection {
  heading?: string;
  content: string;
}

export default interface BlogPost {
  _id: string;

  // Base Information from Blog Preview
  basic: BlogPreview;

  // All Blog Content
  main: BlogContent[];

  // Video Content
  video?: string;

  // Resources
  link?: string;

  // Additional Image
  postImage?: string;
}

/*
Schema
{
  "title": "BlogPost",
  "properties": {
    "_id": {
      "bsonType": "objectId"
    },
    "basic": {
      "bsonType": "object",
      "properties": {
        "date": {
          "bsonType": "string"
        },
        "description": {
          "bsonType": "string"
        },
        "featured": {
          "bsonType": "bool"
        },
        "image": {
          "bsonType": "string"
        },
        "key": {
          "bsonType": "string"
        },
        "title": {
          "bsonType": "string"
        }
      },
      "required": [
        "date",
        "description",
        "image",
        "key",
        "title"
      ]
    },
    "main": {
      "bsonType": "array",
      "items": {
        "bsonType": "object",
        "properties": {
          "paragraph": {
            "bsonType": "array",
            "items": {
              "bsonType": "object",
              "properties": {
                "content": {
                  "bsonType": "string"
                },
                "heading": {
                  "bsonType": "string"
                }
              },
              "required": [
                "content"
              ]
            }
          },
          "subtitle": {
            "bsonType": "string"
          }
        },
        "required": [
          "subtitle"
        ]
      }
    },
    "postImage": {
      "bsonType": "string"
    }
  },
  "required": [
    "_id",
    "postImage"
  ]
}
*/

// "service_name": "blogs0",
// "database_name": "BlogData",
