export const swiggyLogo = 'https://storage.googleapis.com/kaggle-datasets-images/2387130/4028602/ac83e606d0a4a7c58ec315f604bc22d8/dataset-card.png?t=2022-08-04-12-55-10'

export function StarLogo(){
    return(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg>
    )
}
export function Loading(){
    return(
        <svg className="lg:h-20 sm:h-[54px] h-[48px] xs:h-[43px]" svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xmlSpace="preserve"><rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF" /><g><circle cx="16" cy="64" r="16" fill="#ff9c00"/><circle cx="16" cy="64" r="16" fill="#ffbd55" transform="rotate(45,64,64)"/><circle cx="16" cy="64" r="16" fill="#ffd594" transform="rotate(90,64,64)"/><circle cx="16" cy="64" r="16" fill="#ffebcc" transform="rotate(135,64,64)"/><animateTransform attributeName="transform" type="rotate" values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" calcMode="discrete" dur="560ms" repeatCount="indefinite"></animateTransform></g></svg>   
    )
}

export function SearchLoading(){
    return(
        <svg className="sm:h-20 h-[54px] xs:h-[47px]" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xmlSpace="preserve"><circle cx="64" cy="64" r="63.31" fill="#ffffff"/><g><path d="M3.13 44.22a64 64 0 1 0 80.65-41.1 64 64 0 0 0-80.65 41.1zm34.15-4.83a10.63 10.63 0 1 1-13.4 6.8 10.63 10.63 0 0 1 13.4-6.8zm7.85 82.66A61.06 61.06 0 0 1 5.7 45.86 30.53 30.53 0 0 0 64 64a30.53 30.53 0 0 1 58.3 18.12l.35-1.14-.58 1.9a61.06 61.06 0 0 1-76.94 39.2zM106.9 73.2A10.63 10.63 0 1 0 93.5 80a10.63 10.63 0 0 0 13.4-6.8z" fill="#ff5200"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="-360 64 64" dur="600ms" repeatCount="indefinite"></animateTransform></g></svg>
    )
}

export const swiggyDelhiApi = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

export const delhiLat = '28.7040592';

export const delhiLng = '77.10249019999999';

export const swiggyImageDataBase = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

export const blankWhiteImage = "https://avatars.mds.yandex.net/i?id=3c32a93a933db1d9788f791035702b060b341ec3-4299556-images-thumbs&n=13"

export const locationNotFound ='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_476,h_476/portal/m/location_unserviceable.png'

export const menuListImageDatabase = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"

export const menuDataBase = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId='

export const offerListApi = 'https://www.swiggy.com/api/seo/getListing?lat=28.7040592&lng=77.10249019999999&isDineoutCollection=false'

export const searchSuggetionImageDatabase = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/'