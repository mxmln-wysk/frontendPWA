import { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";

const Pagination = ({ state, actions }) => {
  const { next, previous } = state.source.get(state.router.link);

  useEffect(() => {
    if (next) actions.source.fetch(next);
  }, []);

  return (
    <div>
      {next && (
        <Link link={next}>
          <Text>← Older posts</Text>
        </Link>
      )}

      {previous && next && " - "}

      {previous && (
        <Link link={previous}>
          <Text>Newer posts →</Text>
        </Link>
      )}
    </div>
  );
};

export default connect(Pagination);

const Text = styled.em`
  display: inline-block;
  margin-top: 16px;
`;
