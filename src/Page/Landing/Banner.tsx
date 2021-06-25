/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { observer } from "mobx-react-lite";
import Text from "libs/ui/Text";

export default observer(() => {
  return (
    <div
      className="flex w-screen lg:flex-row flex-col"
      css={css`
        height: 68vh;
        @media (max-width: 425px) {
          height: 100vh;
        }
      `}
    >
      <div className="lg:w-2/3 w-screen bg-black">
        <div className="flex flex-1 justify-center items-stretch h-full flex-col">
          <div className="flex flex-col justify-around mx-14 my-14 lg:my-0">
            <Text className="text-gray-300 text-3xl">Frontend Developer</Text>
            <Text className="text-gray-300 text-3xl my-4">&</Text>
            <Text className="text-gray-300 text-3xl">Mobile Developer</Text>
          </div>
        </div>
      </div>
      <div
        className="lg:w-1/3 w-screen bg-black h-full"
        css={css`
          background: url("images/me.jpg") no-repeat;
          background-color: black;
          background-size: contain;
        `}
      >
        <div
          className="flex flex-1 h-full"
          css={css`
            background-color: rgba(0, 0, 0, 0.5);
          `}
        ></div>
      </div>
    </div>
  );
});
