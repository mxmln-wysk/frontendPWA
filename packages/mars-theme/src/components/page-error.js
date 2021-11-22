import { styled, connect } from "frontity";
import GoBack from "./goBack";
import colors from "../helper/colors";


const description404 = (
  <>
    There is no Content (yet){" "}
    <span role="img" aria-label="confused face">
      😕
    </span>
  </>
);

// The 404 page component
const Page404 = ({ state }) => {
  const data = state.source.get(state.router.link);

  const title404 = "Oops!";

  return (
      <Container>
        <GoBack />
        <Title>{title404}</Title>
        <Description>{description404}</Description>
      </Container>
  );
};

export default connect(Page404);

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: ${colors.font};
  font-size: 4em;
`;

const Description = styled.div`
  line-height: 1.6em;
  color: ${colors.font};
  margin: 24px 0;
`;
