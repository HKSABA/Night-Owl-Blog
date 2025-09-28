/*
  Get the data fetched from the API endpoint "/api/blogs"
*/

export async function fetchDataFromApi() {
  try {
    const response = await fetch("http://localhost:3000/api/blogs", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.log(error);
  }
}

/*
  Get the Blog data fetched from the API endpoint "/api/blogs/[blogId]"
*/

export async function fetchBlogFromApiById(blogId: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/blogs/${blogId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.log(error);
  }
}
