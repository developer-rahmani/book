import { translate } from "@/libs/config/translate/translate";

interface Props {
  label: string;
  to: string;
}

export const navigationRouteItems: Props[] = [
  {
    label: translate("shared.navigation.home"),
    to: "/",
  },
];
