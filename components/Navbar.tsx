"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [locale, setLocale] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("MY_LOCALIZATION_NEXTAPP_LOCALE="))
      ?.split("=")[1];

    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `MY_LOCALIZATION_NEXTAPP_LOCALE=${browserLocale}`;
      router.refresh();
    }
  }, [router]);

  const changeLocale = (newLocale: string) => {
    document.cookie = `MY_LOCALIZATION_NEXTAPP_LOCALE=${newLocale}`;
    setLocale(newLocale);
    router.refresh();
  };

  return (
    <div className="py-3 flex items-center justify-between border-b ">
      <h1 className="text-lg font-bold">LOGO</h1>
      <div className="flex items-center gap-3">
        <button
          onClick={() => changeLocale("en")}
          className={`border p-2 font-bold rounded-md text-sm ${
            locale === "en" && "bg-amber-700 text-black"
          }`}
        >
          En
        </button>
        <button
          onClick={() => changeLocale("ja")}
          className={`border p-2 font-bold rounded-md text-sm ${
            locale === "ja" && "bg-amber-700 text-black"
          }`}
        >
          JA
        </button>
      </div>
    </div>
  );
};

export default Navbar;
