"use client";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import React from "react";
import "./EvoPage.scss";

type EvoPageType = React.PropsWithChildren<{
  className: string;
  pageTitle: string;
  subTitle?: string;
  isBackTop: boolean;
  children: React.ReactNode
}>;

const EvoPage: React.FC<EvoPageType> = ({
  className,
  pageTitle,
  subTitle,
  isBackTop,
  children,
}) => {
  return (
    <div className={`evo-page ${className}`}>
      <div>
        {pageTitle && (
          <p className="evo-page__title">
            {pageTitle}
            <span className="evo-page__subtitle">{subTitle}</span>
          </p>
        )}
        {children}
      </div>
      {isBackTop && (
        <div className="evo-page__backtop">
          <FloatButton.BackTop
            visibilityHeight={400}
            style={{
              height: "48px",
              width: "48px",
            }}
            type="default"
            className="evo-page__backtop-icon"
            icon={<VerticalAlignTopOutlined />}
          />
        </div>
      )}
    </div>
  );
};

export default React.memo(EvoPage);
