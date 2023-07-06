import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uniqBy } from "lodash-es";

interface State {
  articles: Article[];
  isFetching: boolean;
}

const ArticleSlice = createSlice({
  name: "Article",
  initialState: {
    articles: [],
    // isFetching flag should starts with true.
    isFetching: true,
  } as State,
  reducers: {
    upsertArticles: (state, action: PayloadAction<Article[]>) => {
      return {
        ...state,
        Articles: uniqBy([...state.articles, ...action.payload], "id"),
      };
    },
    createArticle: (state, action: PayloadAction<Article>) => {
      return {
        ...state,
        Articles: state.articles.concat(action.payload),
      };
    },
    patchArticle: (state, action: PayloadAction<Partial<Article>>) => {
      return {
        ...state,
        Articles: state.articles.map((article) => {
          if (article.id === action.payload.id) {
            return {
              ...article,
              ...action.payload,
            };
          } else {
            return article;
          }
        }),
        //   .filter((Article) => Article.rowStatus === "NORMAL"),
      };
    },
    deleteArticle: (state, action: PayloadAction<ArticleId>) => {
      return {
        ...state,
        Articles: state.articles.filter((article) => {
          return article.id !== action.payload;
        }),
      };
    },
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isFetching: action.payload,
      };
    },
  },
});

export const { upsertArticles, createArticle, patchArticle, deleteArticle, setIsFetching } = ArticleSlice.actions;

export default ArticleSlice.reducer;
