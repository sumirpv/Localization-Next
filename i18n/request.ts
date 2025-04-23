import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const localCookies =
    (await cookies()).get("MY_LOCALIZATION_NEXTAPP_LOCALE")?.value || "en";

  const locale = localCookies;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
