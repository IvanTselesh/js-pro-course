import React, {useEffect, useState} from "react";
import {IPost} from "../../types/post";
import {PostList} from "../PostsList/List/PostList";

export const AllPosts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        const promise = fetch("https://studapi.teachmeskills.by/blog/posts/");
        promise
            .then((response) => {
                return response.json();
            })
            .then((values) => {
                setPosts(values.results);
            });
    }, []);

    return <PostList posts={posts} />

}