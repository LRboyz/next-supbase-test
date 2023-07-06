import axios from "axios";

const _axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

type ResponseObject<T> = {
  data: T;
  error?: string;
  message?: string;
};

export function getSystemStatus() {
  return _axios.get<ResponseObject<SystemStatus>>("/api/status");
}

export function getSystemSetting() {
  return _axios.get<ResponseObject<SystemSetting[]>>("/api/system/setting");
}

export function upsertSystemSetting(systemSetting: SystemSetting) {
  return _axios.post<ResponseObject<SystemSetting>>("/api/system/setting", systemSetting);
}

export function vacuumDatabase() {
  return _axios.post("/api/system/vacuum");
}

// export function signin(username: string, password: string) {
//   return _axios.post<ResponseObject<User>>("/api/auth/signin", {
//     username,
//     password,
//   });
// }

// export function signinWithSSO(identityProviderId: IdentityProviderId, code: string, redirectUri: string) {
//   return _axios.post<ResponseObject<User>>("/api/auth/signin/sso", {
//     identityProviderId,
//     code,
//     redirectUri,
//   });
// }

// export function signup(username: string, password: string) {
//   return _axios.post<ResponseObject<User>>("/api/auth/signup", {
//     username,
//     password,
//   });
// }

// export function signout() {
//   return _axios.post("/api/auth/signout");
// }

// export function createUser(userCreate: UserCreate) {
//   return _axios.post<ResponseObject<User>>("/api/user", userCreate);
// }

// export function getMyselfUser() {
//   return _axios.get<ResponseObject<User>>("/api/user/me");
// }

// export function getUserList() {
//   return _axios.get<ResponseObject<User[]>>("/api/user");
// }

// export function getUserById(id: number) {
//   return _axios.get<ResponseObject<User>>(`/api/user/${id}`);
// }

// export function upsertUserSetting(upsert: UserSettingUpsert) {
//   return _axios.post<ResponseObject<UserSetting>>(`/api/user/setting`, upsert);
// }

// export function patchUser(userPatch: UserPatch) {
//   return _axios.patch<ResponseObject<User>>(`/api/user/${userPatch.id}`, userPatch);
// }

// export function deleteUser(userDelete: UserDelete) {
//   return _axios.delete(`/api/user/${userDelete.id}`);
// }

export function getAllMemos(memoFind?: MemoFind) {
  const queryList = [];
  if (memoFind?.offset) {
    queryList.push(`offset=${memoFind.offset}`);
  }
  if (memoFind?.limit) {
    queryList.push(`limit=${memoFind.limit}`);
  }

  return _axios.get<ResponseObject<Memo[]>>(`/api/memo/all?${queryList.join("&")}`);
}

// export function getMemoList(memoFind?: MemoFind) {
//   const queryList = [];
//   if (memoFind?.creatorId) {
//     queryList.push(`creatorId=${memoFind.creatorId}`);
//   }
//   if (memoFind?.rowStatus) {
//     queryList.push(`rowStatus=${memoFind.rowStatus}`);
//   }
//   if (memoFind?.pinned) {
//     queryList.push(`pinned=${memoFind.pinned}`);
//   }
//   if (memoFind?.offset) {
//     queryList.push(`offset=${memoFind.offset}`);
//   }
//   if (memoFind?.limit) {
//     queryList.push(`limit=${memoFind.limit}`);
//   }
//   return _axios.get<ResponseObject<Memo[]>>(`/api/memo?${queryList.join("&")}`);
// }

// export function getMemoStats(userId: UserId) {
//   return _axios.get<ResponseObject<number[]>>(`/api/memo/stats?creatorId=${userId}`);
// }

export function getMemoById(id: MemoId) {
  return _axios.get<ResponseObject<Memo>>(`/api/memo/${id}`);
}

export function createMemo(memoCreate: MemoCreate) {
  return _axios.post<ResponseObject<Memo>>("/api/memo", memoCreate);
}

export function patchMemo(memoPatch: MemoPatch) {
  return _axios.patch<ResponseObject<Memo>>(`/api/memo/${memoPatch.id}`, memoPatch);
}

export function pinMemo(memoId: MemoId) {
  return _axios.post(`/api/memo/${memoId}/organizer`, {
    pinned: true,
  });
}

export function unpinMemo(memoId: MemoId) {
  return _axios.post(`/api/memo/${memoId}/organizer`, {
    pinned: false,
  });
}

export function deleteMemo(memoId: MemoId) {
  return _axios.delete(`/api/memo/${memoId}`);
}

export function getShortcutList(shortcutFind?: ShortcutFind) {
  const queryList = [];
  if (shortcutFind?.creatorId) {
    queryList.push(`creatorId=${shortcutFind.creatorId}`);
  }
  return _axios.get<ResponseObject<Shortcut[]>>(`/api/shortcut?${queryList.join("&")}`);
}

export function createShortcut(shortcutCreate: ShortcutCreate) {
  return _axios.post<ResponseObject<Shortcut>>("/api/shortcut", shortcutCreate);
}

export function patchShortcut(shortcutPatch: ShortcutPatch) {
  return _axios.patch<ResponseObject<Shortcut>>(`/api/shortcut/${shortcutPatch.id}`, shortcutPatch);
}

export function deleteShortcutById(shortcutId: ShortcutId) {
  return _axios.delete(`/api/shortcut/${shortcutId}`);
}

export function getResourceList() {
  return _axios.get<ResponseObject<Resource[]>>("/api/resource");
}

export function getResourceListWithLimit(resourceFind?: ResourceFind) {
  const queryList = [];
  if (resourceFind?.offset) {
    queryList.push(`offset=${resourceFind.offset}`);
  }
  if (resourceFind?.limit) {
    queryList.push(`limit=${resourceFind.limit}`);
  }
  return _axios.get<ResponseObject<Resource[]>>(`/api/resource?${queryList.join("&")}`);
}

export function createResource(resourceCreate: ResourceCreate) {
  return _axios.post<ResponseObject<Resource>>("/api/resource", resourceCreate);
}

export function createResourceWithBlob(formData: FormData) {
  return _axios.post<ResponseObject<Resource>>("/api/resource/blob", formData);
}

export function deleteResourceById(id: ResourceId) {
  return _axios.delete(`/api/resource/${id}`);
}

export function patchResource(resourcePatch: ResourcePatch) {
  return _axios.patch<ResponseObject<Resource>>(`/api/resource/${resourcePatch.id}`, resourcePatch);
}

export function getMemoResourceList(memoId: MemoId) {
  return _axios.get<ResponseObject<Resource[]>>(`/api/memo/${memoId}/resource`);
}

export function upsertMemoResource(memoId: MemoId, resourceId: ResourceId) {
  return _axios.post<ResponseObject<Resource>>(`/api/memo/${memoId}/resource`, {
    resourceId,
  });
}

export function deleteMemoResource(memoId: MemoId, resourceId: ResourceId) {
  return _axios.delete(`/api/memo/${memoId}/resource/${resourceId}`);
}

export function getTagList(tagFind?: TagFind) {
  const queryList = [];
  if (tagFind?.creatorId) {
    queryList.push(`creatorId=${tagFind.creatorId}`);
  }
  return _axios.get<ResponseObject<string[]>>(`/api/tag?${queryList.join("&")}`);
}

export function getTagSuggestionList() {
  return _axios.get<ResponseObject<string[]>>(`/api/tag/suggestion`);
}

export function upsertTag(tagName: string) {
  return _axios.post<ResponseObject<string>>(`/api/tag`, {
    name: tagName,
  });
}

export function deleteTag(tagName: string) {
  return _axios.post<ResponseObject<boolean>>(`/api/tag/delete`, {
    name: tagName,
  });
}

export function getStorageList() {
  return _axios.get<ResponseObject<ObjectStorage[]>>(`/api/storage`);
}

export function createStorage(storageCreate: StorageCreate) {
  return _axios.post<ResponseObject<ObjectStorage>>(`/api/storage`, storageCreate);
}

export function patchStorage(storagePatch: StoragePatch) {
  return _axios.patch<ResponseObject<ObjectStorage>>(`/api/storage/${storagePatch.id}`, storagePatch);
}

export function deleteStorage(storageId: StorageId) {
  return _axios.delete(`/api/storage/${storageId}`);
}

export function getIdentityProviderList() {
  return _axios.get<ResponseObject<IdentityProvider[]>>(`/api/idp`);
}

export function createIdentityProvider(identityProviderCreate: IdentityProviderCreate) {
  return _axios.post<ResponseObject<IdentityProvider>>(`/api/idp`, identityProviderCreate);
}

export function patchIdentityProvider(identityProviderPatch: IdentityProviderPatch) {
  return _axios.patch<ResponseObject<IdentityProvider>>(`/api/idp/${identityProviderPatch.id}`, identityProviderPatch);
}

export function deleteIdentityProvider(id: IdentityProviderId) {
  return _axios.delete(`/api/idp/${id}`);
}

export async function getRepoStarCount() {
  const { data } = await _axios.get(`https://api.github.com/repos/usememos/memos`, {
    headers: {
      Accept: "application/vnd.github.v3.star+json",
      Authorization: "",
    },
  });
  return data.stargazers_count as number;
}

export async function getRepoLatestTag() {
  const { data } = await _axios.get(`https://api.github.com/repos/usememos/memos/tags`, {
    headers: {
      Accept: "application/vnd.github.v3.star+json",
      Authorization: "",
    },
  });
  return data[0].name as string;
}
