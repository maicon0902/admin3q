'use client';
import { Flex, FlexProps, theme, Typography } from 'antd';
import Link from 'next/link'
import { CSSProperties } from 'react';

import './logo.scss';

type LogoProps = {
  color: CSSProperties['color'];
  imgSize?: {
    h?: number | string;
    w?: number | string;
  };
  asLink?: boolean;
  href?: string;
  bgColor?: CSSProperties['backgroundColor'];
} & Partial<FlexProps>;

export const Logo = ({
  asLink,
  color,
  href,
  imgSize,
  bgColor,
  ...others
}: LogoProps) => {
  const {
    token: { borderRadius },
  } = theme.useToken();

  return asLink ? (
    <Link href={href || '/'} className="logo-link">
      <Flex gap={others.gap || 'small'} align="center" {...others}>
        <Typography.Title
          level={5}
          type="secondary"
          style={{
            color,
            margin: 0,
            padding: `4px 8px`,
            backgroundColor: bgColor,
            borderRadius,
            cursor: 'pointer',
          }}
        >
          Home
        </Typography.Title>
      </Flex>
    </Link>
  ) : (
    <Flex gap={others.gap || 'small'} align="center" {...others}>
      <Typography.Title
        level={4}
        type="secondary"
        style={{
          color,
          margin: 0,
          padding: `4px 8px`,
          backgroundColor: bgColor,
          borderRadius,
          cursor: 'pointer',
        }}
      >
        Home
      </Typography.Title>
    </Flex>
  );
};
