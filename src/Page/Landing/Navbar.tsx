/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { observer, useLocalObservable } from "mobx-react-lite";

export default observer(() => {
  return (
    <div
      id="navbar"
      className="w-full bg-black px-10 py-5"
      css={css`
        position: sticky;
        top: 0;
      `}
    >
      <div className="flex flex-1 flex-row justify-between">
        <div className="text-gray-300 text-4xl ">codebadger.com</div>
        <div className="text-gray-300">
          <a>erlanggadwipratama.if@gmail.com </a>
          <a>+62 819 127 9827 5</a>
        </div>
      </div>
    </div>
  );
});
