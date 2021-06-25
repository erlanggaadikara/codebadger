/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { observer } from "mobx-react-lite";
import Text from "libs/ui/Text";
import Petroport from "Page/Landing/Portofolio/Petroport";
import Navpad from "Page/Landing/Portofolio/Navpad";

export default observer(() => {
  return (
    <div className="w-screen flex justify-center items-center flex-col py-14">
      <Text className="text-5xl font-semibold">Portofolio</Text>
      <div className="flex flex-1 flex-col lg:flex-row w-screen">
        <Petroport />
        <Navpad />
      </div>
    </div>
  );
});
