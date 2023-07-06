import "bytemd/dist/index.css";
import { Editor } from "@bytemd/react";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import gfm from "@bytemd/plugin-gfm";
import hightlight from "@bytemd/plugin-highlight-ssr";

const BytemdEditor = () => {
  const [value, setValue] = useState("");
  return (
    <div className="p-4">
      <Editor value={value} onChange={(v) => setValue(v)} plugins={[gfm(), hightlight()]} />
      <div className="mt-4 flex justify-end">
        <Button size="sm">保存</Button>
      </div>
    </div>
  );
};

export default BytemdEditor;
