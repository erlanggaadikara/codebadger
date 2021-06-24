import { observer, useLocalObservable } from "mobx-react-lite";
import { RouteComponentProps } from "@reach/router";
import { autorun } from "mobx";
import { Helmet } from "react-helmet";
import Banner from "Page/Landing/Banner";
import Navbar from "Page/Landing/Navbar";
import Techstack from "Page/Landing/Techstack";

interface propType {
  path?: RouteComponentProps;
}

export default observer((props: propType) => {
  const dim = useLocalObservable(() => ({
    visible: false as any,
  }));

  const menuHandle = () => {
    let scrollY = window.scrollY;
    let menuEl = document.getElementById("navbar");
    if (scrollY > 0) {
      menuEl?.classList.add("scroll");
    } else {
      menuEl?.classList.remove("scroll");
    }
  };

  autorun(() => {
    window.onscroll = function () {
      if (window.pageYOffset !== 0) {
        dim.visible = true;
      } else {
        dim.visible = false;
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", menuHandle);
      return () => window.removeEventListener("scroll", menuHandle);
    }
  });

  return (
    <>
      <Helmet>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Let's code with pride</title>
      </Helmet>
      <div className="">
        <Navbar />
        <div className="flex flex-col">
          <Banner />
          <Techstack />
        </div>
      </div>
    </>
  );
});
