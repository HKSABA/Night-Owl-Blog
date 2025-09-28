import {
  Collection,
  Db,
  Document,
  MongoClient,
  ObjectId,
  WithId,
} from "mongodb";
import { connectToDB } from ".";
import BlogPost from "@/app/Interface/BlogPost";

let client: MongoClient, database: Db, result: Collection;

async function init() {
  if (database) {
    return;
  }
  try {
    // Initialise the connection
    client = await connectToDB();

    // Initialise the database
    database = await client.db(process.env.DB_NAME);

    // Connect to the specified collection inside the database
    result = await database.collection("Blogs");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to connect to the Database!");
  }
}

/*  
  Function to Get all blogs from the collection 
*/

export const getBlogs = async () => {
  try {
    if (!result) {
      await init();
    }

    const fetchedBlogs: WithId<Document>[] = await result
      .find({})
      .limit(20)
      .toArray();

    const blogs: BlogPost[] = fetchedBlogs.map((blog: WithId<Document>) => {
      //  Map all properties according to their expected types in 'BlogPost' interface
      const transformedBlog: BlogPost = {
        _id: blog._id.toString(),
        basic: blog.basic,
        main: blog.main,
        video: blog.video,
        link: blog.link,
        postImage: blog.postImage,
      };
      return transformedBlog;
    });

    // OUTPUT --> Return the array of transformed blogs
    return blogs;
  } catch (error) {
    return { error: "Failed to fetch blogs." };
  }
};

/* 
  -------- Function to Get a blog by its _id -------- 
*/

export const getBlogById = async (blogID: string) => {
  try {
    if (!result) {
      await init();
    }

    const fetchedBlog = await result.findOne({
      _id: new ObjectId(blogID),
    });

    const blog = fetchedBlog && {
      //  Map all properties according to their expected types in 'BlogPost' interface
      _id: fetchedBlog._id.toString(),
      basic: fetchedBlog.basic,
      main: fetchedBlog.main,
      video: fetchedBlog.video,
      link: fetchedBlog.link,
      postImage: fetchedBlog.postImage,
    };

    // OUTPUT --> Return the array of transformed blogs
    if (blog) {
      // Return the blog as props
      return blog;
    } else {
      // Or handle the case where the blog is not found
      return { message: "Not Found" };
    }
  } catch (error) {
    return { error: "Failed to fetch blog." };
  }
};
