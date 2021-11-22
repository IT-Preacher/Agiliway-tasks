import { Link } from "react-router-dom";
import DropdownMenu from "./components/DropdownMenu";
import moment from "moment";

const ArticleItem = (props) => {
  const {
    article: { uuid, name, author, description, createDate },
  } = props;

  return (
    <div className="article-card">
      <DropdownMenu {...props} uuid={uuid} />

      <div className="aticle-card-info">
        <div className="article-card-info-header">
          <h2>{name}</h2>
        </div>
        <div className="article-card-info-main">
          <p>
            <span>{description.slice(0, 10)}</span>
            <Link to={`/articles/${uuid}`}> ...Read more</Link>
          </p>
          <div className="article-card-info-footer">
            <span>{author}</span>
            <br />
            <span>{moment(createDate).format("MMMM Do YYYY, h:mm a")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
