import { Post } from "../../modules/blog/post";
import { withApollo } from "../../services/apollo";

export default withApollo({ ssr: true })(Post);
