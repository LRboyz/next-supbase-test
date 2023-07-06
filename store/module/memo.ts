import { omit } from "lodash-es";
import * as api from "@/helpers/api";

// import { useUserStore } from "./";
import store, { useAppSelector } from "../";
import { deleteMemo, patchMemo, setIsFetching, upsertMemos } from "../reducer/memo";
import { useMemoCacheStore } from "../zustand/memo";
import { DEFAULT_MEMO_LIMIT } from "@/config/consts";
import { createSupabaseClient } from "@/services/supabase-client";
import { toast } from "react-hot-toast";

export const convertResponseModelMemo = (memo: Memo): Memo => {
  return {
    ...memo,
    // createdTs: memo.createdTs * 1000,
    // updatedTs: memo.updatedTs * 1000,
    // displayTs: memo.displayTs * 1000,
  };
};

export const useMemoStore = () => {
  const supabase = createSupabaseClient();
  const state = useAppSelector((state) => state.memo);
  // const userStore = useUserStore();
  const memoCacheStore = useMemoCacheStore();

  const fetchMemoById = async (memoId: MemoId) => {
    const { data } = (await api.getMemoById(memoId)).data;
    const memo = convertResponseModelMemo(data);

    return memo;
  };
  const fetchMemos = async (limit = DEFAULT_MEMO_LIMIT, offset = 0) => {
    store.dispatch(setIsFetching(true));
    // const memoFind: MemoFind = {
    // rowStatus: "NORMAL",
    //   limit,
    //   offset,
    // };
    const { data, error } = await supabase.from("memo").select("*").limit(limit).order("id", { ascending: false });
    if (error) {
      toast.error(error.message);
      throw error;
    }
    // if (userStore.isVisitorMode()) {
    //   memoFind.creatorId = userStore.getUserIdFromPath();
    // }
    // const { data } = (await api.getMemoList(memoFind)).data;
    // const fetchedMemos = data.map((m) => convertResponseModelMemo(m));
    store.dispatch(upsertMemos(data as Memo[]));
    store.dispatch(setIsFetching(false));

    // for (const m of fetchedMemos) {
    //   memoCacheStore.setMemoCache(m);
    // }

    return data;
  };
  return {
    state,
    getState: () => {
      return store.getState().memo;
    },
    fetchMemos,
    fetchAllMemos: async (limit = DEFAULT_MEMO_LIMIT, offset?: number) => {
      const memoFind: MemoFind = {
        limit,
        offset,
      };

      const { data } = (await api.getAllMemos(memoFind)).data;
      const fetchedMemos = data.map((m) => convertResponseModelMemo(m));

      for (const m of fetchedMemos) {
        memoCacheStore.setMemoCache(m);
      }

      return fetchedMemos;
    },
    // fetchArchivedMemos: async () => {
    //   const memoFind: MemoFind = {
    //     // rowStatus: "ARCHIVED",
    //   };
    //   // if (userStore.isVisitorMode()) {
    //   //   memoFind.creatorId = userStore.getUserIdFromPath();
    //   // }
    //   const { data } = (await api.getMemoList(memoFind)).data;
    //   const archivedMemos = data.map((m) => {
    //     return convertResponseModelMemo(m);
    //   });
    //   return archivedMemos;
    // },
    fetchMemoById,
    getMemoById: async (memoId: MemoId) => {
      for (const m of state.memos) {
        if (m.id === memoId) {
          return m;
        }
      }

      return await fetchMemoById(memoId);
    },
    getLinkedMemos: async (memoId: MemoId): Promise<Memo[]> => {
      const regex = new RegExp(`[@(.+?)](${memoId})`);
      return state.memos.filter((m) => m.content.match(regex));
    },
    createMemo: async (memoCreate: MemoCreate) => {
      const { error } = await supabase.from("memo").insert({ ...memoCreate });
      if (error) {
        toast.error(error.message);
        throw error;
      }
      await fetchMemos();
      return toast.success("笔记创建成功!");
    },
    patchMemo: async (memoPatch: MemoPatch): Promise<Memo> => {
      const { data } = (await api.patchMemo(memoPatch)).data;
      const memo = convertResponseModelMemo(data);
      store.dispatch(patchMemo(omit(memo, "pinned")));
      memoCacheStore.setMemoCache(memo);
      return memo;
    },
    pinMemo: async (memoId: MemoId) => {
      await api.pinMemo(memoId);
      store.dispatch(
        patchMemo({
          id: memoId,
          pinned: true,
        })
      );
    },
    unpinMemo: async (memoId: MemoId) => {
      await api.unpinMemo(memoId);
      store.dispatch(
        patchMemo({
          id: memoId,
          pinned: false,
        })
      );
    },
    deleteMemoById: async (memoId: MemoId) => {
      await api.deleteMemo(memoId);
      store.dispatch(deleteMemo(memoId));
      memoCacheStore.deleteMemoCache(memoId);
    },
  };
};
