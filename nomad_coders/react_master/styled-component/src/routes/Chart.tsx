import React from "react";
import { isDarkAtom } from "../atoms";
import { useRecoilValue } from "recoil";

interface IChartProps {
  coinId: string;
}

function Chart({ coinId }: IChartProps) {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <h1>Chart</h1>
    </>
  );
}

export default Chart;
