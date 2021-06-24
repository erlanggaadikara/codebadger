/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { observer } from "mobx-react-lite";
import Text from "libs/ui/Text";

export default observer(() => {
  return (
    <div className="w-screen flex justify-center items-center flex-col py-14">
      <Text className="text-5xl">Tech Stack</Text>
      <div className="flex flex-1 justify-center flex-row items-center pt-14 flex-wrap">
        <img src={"images/react.png"} className="w-28 h-24 m-10" />
        <img src={"images/mobx.png"} className="w-24 h-24 m-10" />
        <img src={"images/postgresql.png"} className="w-24 h-24 m-10" />
        <img src={"images/electronjs.png"} className="w-28 h-28 m-10" />
        <img src={"images/materialui.png"} className="w-28 h-28 m-10" />
        <img src={"images/tailwindcss.png"} className="w-40 h-28 m-10" />
        <img src={"images/firebase.png"} className="w-56 h-28 m-10" />
        <img src={"images/androidstudio.jpg"} className="w-60 h-32 m-10" />
        <img src={"images/capacitorjs.png"} className="w-80 h-24 m-10" />
      </div>
    </div>
  );
});
