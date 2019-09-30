const formatTextWithComma = money => {
  return Math.round(money).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" đ";
};

const formatMoneyUnit = (money, fixed = 0) => {
  if (Math.floor(money / 10 ** 9) > 0) {
    const result = (money / 10 ** 9).toFixed(fixed);
    return result + " tỷ";
  }
  if (Math.floor(money / 10 ** 6) > 0) {
    const result = (money / 10 ** 6).toFixed(fixed);
    return result + " triệu";
  }
};

export { formatTextWithComma, formatMoneyUnit };
