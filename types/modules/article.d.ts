type ArticleId = number;

type Visibility = "PUBLIC" | "PROTECTED" | "PRIVATE";

interface Article {
  id: ArticleId;
  //   creatorId: UserId;
  created_at: TimeStamp;
  //   updatedTs: TimeStamp;
  //   rowStatus: RowStatus;

  //   displayTs: TimeStamp;
  content: string;
  visibility: Visibility;
  //   pinned: boolean;

  //   creatorName: string;
  //   resourceList: Resource[];
  //   relationList: MemoRelation[];
}

interface ArticleCreate {
  content: string;
  // resourceIdList: ResourceId[];
  // relationList: MemoRelationUpsert[];
  visibility?: Visibility;
}

interface ArticlePatch {
  id: ArticleId;
  //   createdTs?: TimeStamp;
  //   rowStatus?: RowStatus;
  content?: string;
  //   resourceIdList?: ResourceId[];
  //   relationList?: MemoRelationUpsert[];
  visibility?: Visibility;
}

interface ArticleFind {
  //   creatorId?: UserId;
  //   rowStatus?: RowStatus;
  //   pinned?: boolean;
  visibility?: Visibility;
  offset?: number;
  limit?: number;
}
