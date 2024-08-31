/* eslint-disable react/prop-types */
import { Highlight } from "react-instantsearch";

export const Hit = ({ hit }) => {
  return (
    <article>
      <div style={{display:"flex",alignItems:"center"}}>
        <div>
          <img src={hit.backdrop_path} />
        </div>
        <div>
          <div className="hit-original_title">
            <Highlight attribute="original_title" hit={hit} className="original_title"/>
          </div>
          <div className="hit-overview">
            <Highlight attribute="overview" hit={hit} />
          </div>
        </div>
      </div>
    </article>
  );
};
