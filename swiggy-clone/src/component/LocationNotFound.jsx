import { locationNotFound } from "../utils/Constant";

function LocationNotFound() {
  return (
    <div className="w-full sm:pt-[200px] pt-[150px] h-[75vh] flex items-center justify-center">
      <div className="lg:w-[20%] md:w-[25%] sm:w-[40%] w-[45%] text-center">
        <img src={locationNotFound} alt="Not Found" />
        <h1 className="md:text-xl text-lg font-extrabold md:pt-5 pt-3 md:pb-3 pb-2 leading-5">
          Location Unserviceable
        </h1>
        <p className="md:text-base text-sm">
          We don’t have any services here till now. Try changing location.
        </p>
      </div>
    </div>
  );
}

export default LocationNotFound;
