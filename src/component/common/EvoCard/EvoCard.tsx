"use client";
import React from "react";
import "./EvoCard.scss";
import { Row, Col } from "antd";

type EvoCardType = React.PropsWithChildren<{
  className?: string;
  cardTitle?: string;
  suffix?: any | React.ReactNode;
  id?: string;
}>;

const EvoCard: React.FC<EvoCardType> = ({
  className,
  cardTitle,
  children,
  suffix,
  id,
}) => {
  return (
    <div id={id} className={`evo-card ${className ?? ""}`}>
      <Row gutter={[16, 16]}>
        {suffix ? (
          <>
            <Col span={4}>
              <p className="evo-card__title">{cardTitle}</p>
            </Col>
            {suffix}
          </>
        ) : (
          <Col span={24}>
            <p className="evo-card__title">{cardTitle}</p>
          </Col>
        )}
      </Row>
      <div className="evo-card__body">{children}</div>
    </div>
  );
};

export default EvoCard;
