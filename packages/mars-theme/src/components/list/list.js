import { connect, styled } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";

const List = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <Container>
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];
        return <Item key={item.id} item={item} />;
      })}
      <Pagination />
    </Container>
  );
};

export default connect(List);

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  list-style: none;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: #1E1E1E;
`;
