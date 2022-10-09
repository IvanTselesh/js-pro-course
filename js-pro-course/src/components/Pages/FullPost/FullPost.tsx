import {Container} from "../../Container/Container";
import {Header} from "../../Header/Header";
import {PostItem} from "../../PostsList/PostItem/PostItem";
import {IPost} from "../../../types/post";
import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {Context} from "../../../App";
import {Button} from "../../Button/Button";
import { NotificationManager } from 'react-notifications';
import {removePost} from "../../../api/posts";


export const FullPost = () => {
  const param = useParams();
  const [post, setPost] = useState<IPost | null>(null);
  const { user } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const promise = fetch(`https://studapi.teachmeskills.by/blog/posts/${param.id}`);
    promise
      .then((response) => {
      return response.json()
    })
      .then((values) => {
        setPost(values)
      })
  }, []);

  const handleRemovePost = () => {
    if(post?.id) {
      removePost(post.id).then((response) => {
        if(response.ok) {
          NotificationManager.success('Post removal', 'Post has been removed');
          navigate(-1);
        } else {
          NotificationManager.error('Post removal', 'Post hasn`t been removed');
        };
      });
    };
  };

  return (
    <Container>
      <Header />
      <h2>Selected Post</h2>
      {post ? <PostItem {...post} /> : <p>Loading ...</p>}
      {user?.id === post?.author ? <Button text='Remove' onClick={handleRemovePost} disabled={false} styleBtn='button' /> : null}
    </Container>
  );
};

