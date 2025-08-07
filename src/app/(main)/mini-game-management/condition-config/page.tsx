import ConditionConfig from "@/component/Minigame/ConditionConfig/ConditionConfig";
import EvoPage from "@/component/common/EvoPage/EvoPage";
import React from "react";

const page = () => {
  return (
    <EvoPage
      pageTitle="Cấu hình điều kiện"
      isBackTop
      className="condition-config"
    >
      <ConditionConfig />
    </EvoPage>
  );
};

export default page;
