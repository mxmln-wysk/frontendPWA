import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import GoBack from "./goBack";
import colors from "../helper/colors";
import Oxanium from "../font/Oxanium-VariableFont_wght.ttf";
const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);
  console.log(data);
  console.log(data.isHome);

  return (
    <>
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link rel="manifest" href={`${state.source.api}wp/v2/web-app-manifest`} />
      </Head>

      <Global styles={globalStyles} />

      <Switch>
        <HeadContainer when={data.isHome} >
          <Header />
        </HeadContainer>
        <GoBack when={data.isPostType}/>
      </Switch>
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    font-family = Oxanium;
    color: ${colors.font};
    margin: 0;
    font-family:Oxanium;
    background-color: ${colors.background};
  }
  
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  @font-face {
    font-family: "Oxanium";
    font-style: normal;
    font-weight: normal;
    font-display: fallback;
    src: url("${Oxanium}") format("truetype");
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.primary};
  box-shadow: black 0px 5px 10px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;
