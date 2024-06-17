import React from "react";

interface Props {
  currentHeadline: string | undefined;
}

const NewsHeadline = ({ currentHeadline }: Props) => {
  return (
    <React.Fragment>
      <span className="text-xs font-medium text-muted-foreground">
        What you need to know today
      </span>
      <h3 className="font-semibold">
        {currentHeadline || "No news available"}
      </h3>
    </React.Fragment>
  );
};

export default NewsHeadline;
