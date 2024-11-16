import RestaurentCategoryList from "./RestaurentCategoryList";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

function RestaurentCategory({
  categoryData,
  showItem,
  clickShow,
  currentIndex,
  restaurantInfo,
  restartRestaurantList,
}) {
  const restaurantFoodList = categoryData.card.card.itemCards;
  function openMe() {
    if (showItem == false) {
      clickShow(currentIndex);
    } else {
      clickShow(-1);
    }
  }

  return (
    <>
      <div
        className="cursor-pointer border-b-[20px] shadow-sm border-[#F2F2F3] px-2"
        onClick={openMe}
      >
        <div className="flex justify-between items-center font-extrabold sm:text-lg text-base">
          <h1 className="xs:py-3 py-5">
            {categoryData?.card?.card?.title} (
            {categoryData?.card?.card?.itemCards?.length})
          </h1>
          <span>
            {showItem == true ? (
              <RiArrowDropUpLine size={40} />
            ) : (
              <RiArrowDropDownLine size={40} />
            )}{" "}
          </span>
        </div>
      </div>
      
      {showItem &&
        restaurantFoodList.map((item, index) => {
          const foodItem = {
            foodId: item?.card?.info?.id,
            foodName: item?.card?.info?.name,
            foodPrice: item?.card?.info?.price ? item?.card?.info?.price / 100?.toFixed(2) : item?.card?.info?.defaultPrice / 100?.toFixed(2),
            foodDescription: item?.card?.info?.description,
            foodImage: item?.card?.info?.imageId, 
          }
          return (
            <RestaurentCategoryList
              key={index}
              {...foodItem}
              restaurantInfo={restaurantInfo}
              restartRestaurantList={restartRestaurantList}
            />
          );
        })}
    </>
  );
}

export default RestaurentCategory;
