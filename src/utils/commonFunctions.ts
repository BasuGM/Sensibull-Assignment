import moment from "moment";

export const showDateInfo = (date: any, format: string = "DD-MM-YYYY") => {
  const isValid = moment(date).isValid();
  if (isValid) {
    return moment(date).format(format);
  } else {
    return "-";
  }
};
