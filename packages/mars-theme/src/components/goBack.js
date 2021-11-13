import { connect, styled } from "frontity";
import Link from "./link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const GoBack = ({ state }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
  console.log(post);
  return (
    <>
      <Container>
        <StyledLink link="/">
         <FontAwesomeIcon icon={faArrowLeft} color="#EF304D" size="2x" />
        </StyledLink>
        <Title>{post.title.rendered}</Title>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(GoBack);
const Title = styled.h2`
  color: #F1304D;
`;
const StyledLink = styled(Link)`
align-self: center;
`
const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
