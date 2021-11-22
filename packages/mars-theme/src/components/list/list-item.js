import { connect, styled } from "frontity";
import Link from "../link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import colors from "../../helper/colors";


const Item = ({ item }) => {

  return (
    <article>
      <Link link={item.link}>
          <Title>
              {item.title.rendered+" "}
              <FontAwesomeIcon icon={faArrowRight} color={colors.font} size="xs" />
          </Title>

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
