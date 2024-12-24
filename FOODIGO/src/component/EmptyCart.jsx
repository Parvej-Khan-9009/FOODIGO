import { IoFastFood } from "react-icons/io5";

function EmptyCart() {
    return (
        <div className="h-screen flex justify-center pt-14 bg-[#EEEEEE]">
          <div className="pt-24">
            <div className="py-12 px-28 bg-white flex flex-col items-center">
              <IoFastFood size={200} />
              <h1 className="text-2xl font-semibold pt-5">
                Your Cart Is Empty !
              </h1>
              <span className="text-lg pt-5">
                You can go to home page to view more restaurants
              </span>
            </div>
          </div>
        </div>
      );                         
}

export default EmptyCart