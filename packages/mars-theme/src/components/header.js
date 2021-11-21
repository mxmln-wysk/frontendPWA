import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <img src="https://matzelt.com/Media/Atidna.png" />
        <Title>{state.frontity.title}</Title>
        <img src="https://matzelt.com/Media/Mieke-Meier.png" />
      </Container>
      <Nav />
    </>
  );
};

export default connect(Header);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0.5em;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  img{
    height: 75px; 
    width: auto;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  text-align: center;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
