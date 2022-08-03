/* eslint-disable react/prop-types */
// import electron from "electron";
import React, { useState, useCallback } from "react";
// import {Outlet,Navigate,useLocation} from "react-router-dom";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.less";

const { ipcRenderer } = window.electron;

export default function IndexPage() {

  const [invoke_value, set_invoke_value] = useState({});

  // const {pathname}=useLocation();

  const handleClick = useCallback(async () => {
    const result = await ipcRenderer.invoke("test");
    set_invoke_value(JSON.parse(result));
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(invoke_value, null, " ")}</pre>
      <button onClick={handleClick}>
        测试运行
      </button>
    </div>
  )
}


IndexPage.propTypes = {


};
IndexPage.defaultProps = {


};