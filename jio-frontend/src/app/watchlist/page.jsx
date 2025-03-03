"use client";

import CategoryList, {
  CategoryListFallback,
} from "../../components/sections/CategoryList";
import { buttonVariants } from "../../components/ui/button";
import { api, ENDPOINT } from "../../lib/api";
import { cn } from "../../lib/utils";
import { FolderLockIcon } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const WatchListPage = (props) => {
  const userData = useSelector((state) => state.user);
  console.log("userData from Watchlist page", userData);
  const userID = userData.user.__id;
  return (
    <div className="mt-[80px] p-4">
      <h1 className="text-2xl font-medium mb-6">Watchlist</h1>
      {userData.isLoggedIn ? (
        <Suspense fallback={<CategoryListFallback />}>
          <CategoryList
            fetcher={async () => {
              const res = await axios.get(
                `https://4yffsl-4001.csb.app/api/user/wishlist/${userID}`
              );
              return res.data.data;
            }}
            className="flex-wrap"
          />
        </Suspense>
      ) : (
        <div className="flex flex-col items-center justify-center h-[80vh] w-full gap-4">
          <FolderLockIcon
            className="w-32 h-32 text-slate-400"
            strokeWidth={1.2}
          />
          <p className="text-base text-slate-400">
            Login to see your watchlist
          </p>
          <Link
            href={"/login"}
            className={cn(buttonVariants(), "rounded-full px-6 mt-4")}
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default WatchListPage;
