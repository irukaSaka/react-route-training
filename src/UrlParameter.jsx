import { useLocation, useParams } from "react-router-dom";
export const UrlParameter = (props) => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameter page</h1>
      <p>IDは{id}です</p>
      <p>名前は{query.get("name")}です</p>
    </div>
  );
};
