import {Container} from "../../Container/Container";
import {Header} from "../../Header/Header";
import {PostItem} from "../../PostsList/PostItem/PostItem";
import {IPost} from "../../../types/post";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";



export const FullPost = () => {
  const param = useParams();
  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    const promise = fetch(`https://studapi.teachmeskills.by/blog/posts/${param.id}`);
    promise
      .then((response) => {
      return response.json()
    })
      .then((values) => {
        setPost(values)
      })
  }, [])

  return (
    <Container>
      <Header />
      <h2>Selected Post</h2>
      {post ? <PostItem {...post} /> : <p>Loading ...</p>}
    </Container>
  );
};

