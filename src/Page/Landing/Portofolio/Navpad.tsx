/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { observer } from "mobx-react-lite";
import Avatar from "libs/ui/Avatar";
import Button from "libs/ui/Button";
import Text from "libs/ui/Text";

export default observer(() => {
  return (
    <div
      className="lg:w-1/2 w-screen bg-purple-900 flex flex-1 justify-center items-center flex-col my-8"
      css={css`
        height: 60vh;
      `}
    >
      <Avatar src="images/nav.jpg" className="w-24 h-24 my-14" />
      <Text className="text-center text-3xl text-white font-semibold">
        Nav Karaoke - Navpad
      </Text>
      <div className="flex flex-row">
        <Button caption="About" className="font-thin bg-white" />
        <div className="m-1"></div>
        <Button
          caption="Visit App"
          className="font-thin bg-white"
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.andromedia.navkaraoke"
            )
          }
        />
      </div>
    </div>
  );
});
