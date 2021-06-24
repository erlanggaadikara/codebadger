import * as jwt from "jsonwebtoken";
import { observable, observe } from "mobx";

export const msession = observable({
  data: "" as any,
});

const setSession = (data: any) => {
  const convertData = jwt.sign(data, "deleteitdeleteit");
  localStorage.setItem("session", convertData);
  msession.data = data;
};

const getSession = async () => {
  let respond;
  if (localStorage.getItem("session")) {
    const token: any = localStorage.getItem("session");
    jwt.verify(token, "deleteitdeleteit", (err: any, res: any) => {
      if (err) return console.log(err);
      respond = res;
      msession.data = res;
    });
  }
  return respond;
};

const deleteSession = () => {
  if (localStorage.getItem("session")) {
    localStorage.removeItem("session");
  }
};

export const Session = { setSession, getSession, deleteSession, msession };
export const session = observe(msession, getSession);
