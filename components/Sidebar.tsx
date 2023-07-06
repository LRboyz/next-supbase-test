import Link from "next/link";
import SidebarList from "./SidebarList";

export default function SideBar() {
  // const { user, logout } = useAuth();
  // const { onOpen } = useModal();

  return (
    <div className="flex">
      <div className="w-[240px] dark:bg-black bg-white fixed h-full ">
        <Link href={"/"} className="px-4 flex justify-start items-center py-4 mb-4">
          <b className="mx-2">LOGO</b>
        </Link>
        <SidebarList />
      </div>
      {/* <div className=" absolute bottom-10 ">
        <div className="flex items-center p-2">
          {user ? (
            <Popover placement="bottom" color={"default"}>
              <PopoverTrigger>
                <div className="flex items-center  p-2 rounded-md cursor-pointer  text-gray-500 hover:bg-primary-300/30">
                  <Avatar showFallback src={user.user_metadata.avatar_url} size="sm" />
                  <p className="mx-2  font-bold">{user.user_metadata.full_name || user.user_metadata.user_name}</p>

                  <ChevronDown size={12} className="" />
                </div>
              </PopoverTrigger>
              <PopoverContent className="p-2">
                <div className="w-[120px] flex flex-col items-center gap-2 text-gray-600">
                  <div className="flex w-full cursor-pointer items-center justify-start rounded-lg p-2 text-sm hover:bg-gray-300/30 dark:hover:text-gray-200">
                    <UserIcon size={14} className="mr-2" />
                    <span className="whitespace-nowrap">账号信息</span>
                  </div>
                  <div onClick={logout} className="flex w-full cursor-pointer items-center justify-start rounded-lg  p-2 text-sm hover:bg-red-300/20 hover:text-red-500">
                    <LogOut size={14} className="mr-2" />
                    <span className="whitespace-nowrap">退出</span>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <div
              onClick={() => {
                onOpen();
              }}
              className="flex items-center p-2 rounded-md cursor-pointer  text-gray-500 hover:bg-primary/10"
            >
              <Avatar showFallback icon={<AvatarIcon />} size="sm" />
              <p className="mx-2  font-bold">未登录</p>
            </div>
          )}
        </div>
      </div> */}
    </div>
  );
}
