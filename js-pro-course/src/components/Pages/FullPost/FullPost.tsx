import {Container} from "../../Container/Container";
import {Header} from "../../Header/Header";
import {PostItem} from "../../PostsList/PostItem/PostItem";
import {IPost} from "../../../types/post";
import {posts} from "../../../mocks";

interface IProps {
  posts: IPost[]
}

export const FullPost = (props: IProps) => {
  return (
    <Container>
      <Header />
      <h2>Selected Post</h2>
      {props.posts.map((item: IPost) => {
        return <PostItem
          id={item.id}
          text={item.text}
          date={item.date}
          lesson_num={item.lesson_num}
          title={item.title}
          author={item.author} image={item.image}
        />
      })
      }
    </Container>
  );
};

