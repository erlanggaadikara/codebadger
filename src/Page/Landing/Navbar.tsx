/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { observer, useLocalObservable } from "mobx-react-lite";

export default observer(() => {
  return (
    <div
      id="navbar"
      className="w-full bg-black px-10 py-4"
      css={css`
        position: sticky;
        top: 0;
      `}
    >
      <div className="flex flex-1 lg:flex-row flex-col lg:justify-between items-center">
        <div className="text-gray-300 lg:text-4xl text-base">
          codebadger.com
        </div>
        <div className="text-gray-300 lg:text-base text-sm flex lg:flex-row flex-col">
          <a>erlanggadwipratama.if@gmail.com </a>
          <div className="m-2"></div>
          <a>+62 819 127 9827 5</a>
        </div>
      </div>
    </div>
  );
});
