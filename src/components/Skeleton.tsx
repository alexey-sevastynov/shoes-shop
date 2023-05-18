import React from "react";
import ContentLoader from "react-content-loader";
import "../scss/app.scss";

const Skeleton = (props: any) => (
  <ContentLoader
    className="skeleton"
    // style={{ maxWidth: "300px", maxHeight: "464px" }}
    speed={1}
    // width={300}
    // height={464}
    viewBox="0 0 300 464"
    backgroundColor="#c7c7c7"
    foregroundColor="#d6d6d6"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="300" height="400" />
    <rect x="0" y="444" rx="2" ry="2" width="150" height="20" />
    <rect x="0" y="415" rx="2" ry="2" width="200" height="15" />
  </ContentLoader>
);

export default Skeleton;
