/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { observer } from "mobx-react-lite";
import Avatar from "libs/ui/Avatar";
import Button from "libs/ui/Button";
import Text from "libs/ui/Text";

export default observer(() => {
  return (
    <div
      className="lg:w-1/2 w-screen bg-white flex flex-1 justify-center items-center flex-col my-8"
      css={css`
        height: 60vh;
      `}
    >
      <Avatar src="images/petroport.ico" className="w-24 h-24 my-14" />
      <Text className="text-center text-3xl font-semibold">Petroport</Text>
      <div className="flex flex-row">
        <Button caption="About" className="font-thin" />
        <div className="m-1"></div>
        <Button
          caption="Visit Site"
          className="font-thin"
          onClick={() =>
            window.open("https://petroport.petrokimia-gresik.com/")
          }
        />
      </div>
    </div>
  );
});
