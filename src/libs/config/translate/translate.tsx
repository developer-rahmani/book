import messages from "@messages/fa.json";
import { createTranslator } from "next-intl";

export const translate = createTranslator({ locale: "fa", messages });
