import { connect, styled } from "frontity";
import Link from "../link";


const Item = ({ item }) => {

  return (
    <article>
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>
    </article>
  );
};

export default connect(Item);

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;
