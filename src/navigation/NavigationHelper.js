import {
  HomeIcon,
  AddIcon,
  MaterialIcon,
  SearchIcon,
  ProfileIcon,
} from "../components/IconLibrary";
import ROUTES from "../constants/routes";

export function routeToIcon(route) {
  switch (route) {
    case ROUTES.FEED_ROUTE:
      return HomeIcon;
    case ROUTES.MATERIAL_ROUTE:
      return MaterialIcon;
    case ROUTES.ADD_ROUTE:
      return AddIcon;
    case ROUTES.SEARCH_ROUTE:
      return SearchIcon;
    case ROUTES.PROFILE_ROUTE:
      return ProfileIcon;
  }
}
