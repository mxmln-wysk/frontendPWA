import { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import FeaturedMedia from "./featured-media";
import colors from "../helper/colors";

const Post = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, [actions.source]);

  return data.isReady ? (
    <Container>
      {/* Look at the settings to see if we should include the featured image */}
      {state.theme.featured.showOnPost && (
        <FeaturedMedia id={post.featured_media} />
      )}

      {data.isAttachment ? (
        <div dangerouslySetInnerHTML={{ __html: post.description.rendered }} />
      ) : (
        <Content>
          <Html2React html={post.content.rendered} />
        </Content>
      )}
    </Container>
  ) : null;
};

export default connect(Post);

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
`;

const Content = styled.div`
  word-break: break-word;

  * {
    max-width: 100%;
  }
  
  summary{
    background-color: ${colors.overlay2};
    border-radius: 0.5rem;
    padding: 0.5rem;
    box-shadow: black 5px 5px 10px;
    z-index: 200;
  }
  
  details[open] summary ~ * {
  animation: sweep 0.5s ease-in-out;
  }
  
  @keyframes sweep {
    0%    {opacity: 0; margin-top: -100px}
    45%   {opacity: 0;}
    100%  {opacity: 1; margin-top: 0px}
  }
  
  details{
    background-color:${colors.overlay};
    border-radius: 10px ;
    margin: 0.5rem;
    box-shadow: black 5px 5px 10px;
    transition: all 1s ease-out;
    div{
      padding: 0.5rem;
    }
  }
  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    width: 100%;

    figcaption {
      font-size: 0.7em;
    }
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: ${colors.font};
    text-decoration: underline;
  }
`;
