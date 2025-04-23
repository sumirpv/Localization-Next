import { AbstractIntlMessages, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: AbstractIntlMessages = await getMessages({ locale });
  const title = messages.TabTitles?.home;
  return {
    title,
  };
}

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main className="flex flex-col gap-8 items-center">
      <Image
        className="dark:invert dark:text-white"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={38}
        priority
      />
      <ol className="list-inside list-decimal text-sm text-center sm:text-left">
        <li className="mb-2">
          {t("list1")}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded">
            app/page.tsx{" "}
          </code>
        </li>
        <li>{t("list2")} testing it here</li>
      </ol>
    </main>
  );
}
