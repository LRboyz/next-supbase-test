import { createSupabaseClient } from "@/services/supabase-client";
import store, { useAppSelector } from "..";
import { toast } from "react-hot-toast";

export const useArticleStore = () => {
  const state = useAppSelector((state) => state.article);
  const supabase = createSupabaseClient();
  const fetchArticleById = async (articleId: ArticleId) => {};

  return {
    state,
    getState: () => {
      return store.getState().article;
    },
    fetchArticles: async () => {},
    createArticle: async (articleCreate: ArticleCreate) => {
      const { data, error } = await supabase.from("article").insert({ ...articleCreate });
      if (error) {
        return toast.error(error.message);
      }
      return data;
    },
    patchArticle: async () => {},
    deleteArticleById: async () => {},
  };
};
