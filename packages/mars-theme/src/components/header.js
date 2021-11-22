import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <img src="https://dormapfad.de/Media/Atidna.png"  alt={'Atidna Logo'}/>
        <Title>{state.frontity.title}</Title>
        <img src="https://dormapfad.de/Media/Mieke-Meier.png"  alt={'Mieke Meier Logo'}/>
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
  color: #f0f8ff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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
