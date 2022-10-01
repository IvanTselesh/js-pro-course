import {Container} from "../../Container/Container";
import {Link} from "react-router-dom";

export const ErrorPage = () => {
  return (
    <Container>
      <div id="notfound" className="text-center ">
        <h1>😮</h1>
        <h2>Oops! Page Not Be Found</h2>
        <p>Sorry but the page you are looking for does not exist.</p>
        <Link to="/">Back to homepage</Link>
      </div>
    </Container>
  )
}