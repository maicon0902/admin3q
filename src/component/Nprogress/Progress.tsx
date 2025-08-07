"use client";
import React from "react";
import NContainer from "./Container";
import Bar from "./Bar";
import NSpinner from "./Spinner";
import { useNProgress } from '@tanem/react-nprogress';

type Props = {
  isAnimating?: boolean;
};

const NProgress = ({ isAnimating }: Props) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  return (
    <NContainer animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
      <NSpinner />
    </NContainer>
  );
};

export default NProgress;
