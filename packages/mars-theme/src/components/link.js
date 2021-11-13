import { connect } from "frontity";
import Link from "@frontity/components/link";

const MarsLink = ({ children, ...props }) => {
  return (
    <Link {...props}>
      {children}
    </Link>
  );
};

export default connect(MarsLink, { injectProps: false });
