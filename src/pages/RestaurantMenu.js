import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "../components/RestaurantMenu/RestaurantCategory";
import RestaurantDetailsHeader from "../components/RestaurantMenu/RestaurantDetailsHeader";
import InfiniteScroll from "react-infinite-scroll-component";
import { BeatLoader } from "react-spinners";
import RestaurantMenuShimmerUI from "../components/RestaurantMenu/RestaurantMenuShimmerUI";
import useResMenuListPage from "../hooks/useResMenuListPage";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const { openCategories, categories, hasMore, handleToggle, fetchMoreData } =
    useResMenuListPage({ resId, resInfo });

  if (resInfo === null) {
    return <RestaurantMenuShimmerUI />;
  }

  return (
    <div className="w-12/12 lg:w-6/12 sm:w-10/12  m-auto flex flex-col items-center p-4 min-h-screen mt-24">
      <RestaurantDetailsHeader
        restaurantInfo={resInfo?.cards[2]?.card?.card?.info}
      />
      <div className="w-full">
        <InfiniteScroll
          dataLength={categories.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div className="flex items-center justify-center mt-2">
              <BeatLoader color="#EA580C" />
            </div>
          }
          endMessage={<></>}
        >
          {categories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card?.title}
              category={category?.card?.card}
              showMenuItems={openCategories[index]}
              handleToggle={() => handleToggle(index)}
            />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default RestaurantMenu;
