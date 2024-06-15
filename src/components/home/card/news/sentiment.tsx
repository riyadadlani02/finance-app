import React from "react";

interface Props {
  sentimentColor: string;
  sentimentText: string;
  arrowIcon: React.JSX.Element | null;
}

const NewsSentiment = ({ sentimentColor, sentimentText, arrowIcon }: Props) => {
  return (
    <React.Fragment>
      <div className="flex px-3 bg-dark-gray h-[23px] space-x-3 rounded-full items-center">
        <span className="text-muted-foreground text-xs font-semibold">
          The markets are{" "}
          <span className={`${sentimentColor}`}>{sentimentText}</span>
        </span>
      </div>
      <span className="flex w-[23px] h-[23px] items-center justify-center bg-dark-gray space-x-3 rounded-full">
        {arrowIcon}
      </span>
    </React.Fragment>
  );
};

export default NewsSentiment;
