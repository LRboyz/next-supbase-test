import { marked } from "@/utils/marked";

interface Props {
  memo: Memo;
}

const Memo: React.FC<Props> = ({ memo }) => {
  return (
    <div className="relative flex flex-col justify-start items-start shadow-md w-full p-4 pt-3 mt-2 bg-white dark:bg-zinc-700 rounded-lg border border-white dark:border-zinc-600 hover:border-gray-200 dark:hover:border-zinc-600;r">
      <b>{memo.id}</b>
      <div>{marked(memo.content)}</div>
    </div>
  );
};

export default Memo;
