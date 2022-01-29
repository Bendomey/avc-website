import { Blog } from "../../modules/blog";
import { withApollo } from "../../services/apollo";

export default withApollo({ ssr: true })(Blog);
