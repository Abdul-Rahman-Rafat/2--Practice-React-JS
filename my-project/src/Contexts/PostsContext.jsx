import { createContext } from "react";

// PostsContext variable creates a shared place to store and read posts data.
export const PostsContext = createContext([]);

// This context will be used to provide posts data to components that need it.
//we add the default value as an empty array, we will add the actual posts data in the provider  component in value attribute.
