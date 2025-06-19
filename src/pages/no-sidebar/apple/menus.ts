import AppleIcon from "./components/icons/AppleIcon";
import CartIcon from "./components/icons/CartIcon";
import SearchIcon from "./components/icons/SearchIcon";

interface IIPhoneMenus {
  id: string;
  text: string;
  src: string;
}

interface IGnbMenus extends Omit<IIPhoneMenus, "src"> {
  icon?: React.FC;
}

export const gnbMenus: IGnbMenus[] = [
  { id: "gnb-애플 홈", text: "애플 홈", icon: AppleIcon },
  { id: "gnb-스토어", text: "스토어" },
  { id: "gnb-Mac", text: "Mac" },
  { id: "gnb-iPad", text: "iPad" },
  { id: "gnb-iPhone", text: "iPhone" },
  { id: "gnb-Watch", text: "Watch" },
  { id: "gnb-Vision", text: "Vision" },
  { id: "gnb-AirPods", text: "AirPods" },
  { id: "gnb-TV", text: "TV 및 홈" },
  { id: "gnb-엔터테인먼트", text: "엔터테인먼트" },
  { id: "gnb-액세서리", text: "액세서리" },
  { id: "gnb-고객지원", text: "고객지원" },
  { id: "gnb-검색", text: "검색", icon: SearchIcon },
  { id: "gnb-장바구니", text: "장바구니", icon: CartIcon },
];

export const iPhoneMenus: IIPhoneMenus[] = [
  {
    id: "iPhone 16 Pro",
    text: "iPhone 16 Pro",
    src: "https://www.apple.com/v/iphone/home/cb/images/chapternav/iphone_16_pro_light__sh8e76empwyq_large.svg",
  },
  {
    id: "iPhone 16",
    text: "iPhone 16",
    src: "https://www.apple.com/v/iphone/home/cb/images/chapternav/iphone_16_pro_light__sh8e76empwyq_large.svg",
  },
  {
    id: "iPhone 16e",
    text: "iPhone 16e",
    src: "https://www.apple.com/v/iphone/home/cb/images/chapternav/iphone_16e_light__dcdfirk5ikk2_large.svg",
  },
  {
    id: "iPhone 15",
    text: "iPhone 15",
    src: "https://www.apple.com/v/iphone/home/cb/images/chapternav/iphone_16_pro_light__sh8e76empwyq_large.svg",
  },
  {
    id: "비교하기",
    text: "비교하기",
    src: "https://www.apple.com/v/iphone/home/cb/images/chapternav/iphone_compare_light__f01dnbvbb62y_large.svg",
  },
  {
    id: "AirPods",
    text: "AirPods",
    src: "https://www.apple.com/v/iphone/home/cb/images/chapternav/airpods_light__cd9exnztczjm_large.svg",
  },
  {
    id: "AirTag",
    text: "AirTag",
    src: "https://www.apple.com/v/iphone/home/cb/images/chapternav/airtag_light__c19z9f5le0ia_large.svg",
  },
  {
    id: "액세서리",
    text: "액세서리",
    src: "https://www.apple.com/v/iphone/home/cb/images/chapternav/accessories_light__e917u1i857e6_large.svg",
  },
  {
    id: "iOS 18",
    text: "iOS 18",
    src: "https://www.apple.com/v/iphone/home/cb/images/chapternav/iphone_ios_light__b0jhieo01t0i_large.svg",
  },
  {
    id: "iPhone 쇼핑하기",
    text: "iPhone 쇼핑하기",
    src: "https://www.apple.com/v/iphone/home/cb/images/chapternav/shop_iphone_light__e4dlk2n6h26a_large.svg",
  },
];
