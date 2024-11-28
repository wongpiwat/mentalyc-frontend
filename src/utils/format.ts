import dayjs from "dayjs";

// format number with commas
export const formatNumberWithCommas = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// format date with dayjs
export const formatDate = (date: string | Date, format = "MMM D, YYYY") => {
  return dayjs(date).format(format);
};
