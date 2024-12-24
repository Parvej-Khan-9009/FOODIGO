import { useSelector } from "react-redux";
import SearchedSuggestResList from "./SearchedSuggestResList";

function Search() {
  const cartData = useSelector((store) => store.cart.items);

  window.addEventListener("beforeunload", () => {
    localStorage.setItem("localCartData", JSON.stringify(cartData));
  });

  return (
    <>
      <SearchedSuggestResList/>
    </>
  );
}

export default Search;