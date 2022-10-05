import {Container} from "../../Container/Container";
import {Header} from "../../Header/Header";
import {MyPostsList} from "../../MyPosts/MyPosts";

export const MyPosts = () => {
  return (
    <Container>
      <Header />
      <MyPostsList />
    </Container>
  )
};