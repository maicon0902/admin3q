import dayjs from "dayjs";
import _ from "lodash";
import { FORMAT_DATE } from "../constant/constant";

export const isNullOrUndefined = (value: any) => {
  return  _.isNil(value) || _.isNull(value);
}

export const isBlank = (value?: string | null) => {
  return isNullOrUndefined(value) ||
  value === "" ||
  (value && _.trim(value).length === 0);
}
  

export const isNotEmpty = (value: any) => {
  return !_.isNil(value) && !_.isNull(value) && !_.isNaN(value) && !isBlank(value);
}

export const checkInvaidDateDayjs = (dayjsValue: any) => {
  if (dayjsValue === "Invalid Date") {
    return "";
  }
  return dayjsValue;
};

export const formatDateWithDayjs = (date: any, formatDate: FORMAT_DATE) => {
  if (!date) {
    return "";
  }
  if (dayjs(date).isValid()) {
    return checkInvaidDateDayjs(dayjs(date).format(formatDate));
  }
  return date;
};