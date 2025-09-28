import React, { createContext, useContext } from "react";

const BlogContext = createContext("");

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <BlogContext.Provider value={""}>{children}</BlogContext.Provider>;
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);

  if (!context) {
    throw new Error("useBlogContext must be used within a BlogProvider");
  }

  return context;
};

export default BlogContext;
