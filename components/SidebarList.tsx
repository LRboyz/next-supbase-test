"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";
import { BookIcon, BuildingIcon, CameraIcon, ClipboardList, EditIcon, HomeIcon, SettingsIcon, UserIcon } from "lucide-react";

interface SidebarItem {
  key: string;
  name: string;
  slug: string;
  icon: React.ReactNode;
}

const defaultSidebar = [
  { key: "home", name: "主页", slug: "", icon: <HomeIcon /> },
  { key: "moment", name: "片刻", slug: "moment", icon: <CameraIcon /> },
  { key: "article", name: "文章", slug: "article", icon: <BookIcon /> },
  { key: "category", name: "分类", slug: "category", icon: <BuildingIcon /> },
  { key: "comment", name: "留言", slug: "comment", icon: <EditIcon /> },
];

const SidebarItem = ({ item }: { item: SidebarItem }) => {
  const segment = useSelectedLayoutSegment();
  console.log(segment, "segment");
  const isActive = item.slug === segment || (item.slug === "" && segment === "(home)");

  return (
    <Link
      href={`/${item.slug}`}
      className={clsx("block rounded-md px-3 py-2 text-sm font-medium", {
        "text-gray-400 hover:bg-primary hover:text-white": !isActive,
        "text-white bg-primary": isActive,
      })}
    >
      <div className="flex items-center gap-3 my-1">
        {item.icon}
        <span className="font-bold">{item.name}</span>
      </div>
    </Link>
  );
};

const SidebarList = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="overflow-y-auto lg:static lg:block">
        <nav className="flex flex-col gap-2 px-2">
          {defaultSidebar.map((item) => (
            <SidebarItem key={item.key} item={item} />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SidebarList;
