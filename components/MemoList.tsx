/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useMemoStore } from "@/store/module";
import { useEffect } from "react";
import Memo from "./Memo";
import { Spinner } from "@nextui-org/react";
const MemoList = () => {
  const memoStore = useMemoStore();
  const { memos, isFetching } = memoStore.state;

  console.log(memos, isFetching, "memos, isFetching");
  useEffect(() => {
    memoStore.fetchMemos();
  }, []);

  return (
    <div className="h-full py-4">
      {memos.map((memo) => (
        <Memo memo={memo} key={memo.id} />
      ))}
      {isFetching ? (
        <div className="flex justify-center w-full mt-4">
          <Spinner />
        </div>
      ) : (
        <span>{memos.length === 0 ? "没有更多笔记啦 ~" : ""}</span>
      )}
    </div>
  );
};

export default MemoList;
