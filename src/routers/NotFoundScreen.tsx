import React from "react";
import { Result } from "antd";

const NotFoundScreen: React.FC = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
      />
    </>
  );
};

export default React.memo(NotFoundScreen);
