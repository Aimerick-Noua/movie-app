import {algoliasearch} from "algoliasearch";
import "instantsearch.css/themes/satellite.css";
import { Hits, InstantSearch, SearchBox, Configure } from "react-instantsearch";

import { Hit } from "./Hit";

const searchClient = algoliasearch("E3HVFDIDUR", "d70e02fed7b26bb87391f58d1e108c41");

export const Search = () => {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="index"
    >
      <Configure hitsPerPage={5} />
      <div className="ais-InstantSearch text-slate-900">
        <SearchBox />
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearch>
  );
};