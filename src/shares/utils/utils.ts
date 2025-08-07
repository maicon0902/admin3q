import _ from "lodash";
import { notification } from "antd";
import { IApiResponse } from "../interface/interface";
import { API_STATUS, NOTIFICATION_TYPE } from "../constant/constant";

export const isSuccessResponse = (responseData: IApiResponse<any>) => {
  return responseData && responseData.status === API_STATUS.SUCCESS;
};

export const isFailureResponse = (responseData: IApiResponse<any>) => {
  return responseData && responseData.status === API_STATUS.FAILURE;
};

export const openNotification = (
  type: NOTIFICATION_TYPE,
  msg: string,
  description?: string,
) => {
  notification.open({
    message: msg,
    description: description ?? "",
    type: type,
  });
};

export const showServerError = (messages: string[]) => {
  messages?.slice(0, 5).forEach((message: string) => {
    openNotification(NOTIFICATION_TYPE.ERROR, message, "");
  });
};