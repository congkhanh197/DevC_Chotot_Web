const formatTextWithComma = money => {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const formatMoneyUnit = (money, fixed = 0) => {
  if (Math.round(money / 10 ** 9) > 0) {
    const result = (money / 10 ** 9).toFixed(fixed);
    return result + " tỷ";
  }
  if (Math.round(money / 10 ** 6) > 0) {
    const result = (money / 10 ** 6).toFixed(fixed);
    return result + " triệu";
  }
};

export { formatTextWithComma, formatMoneyUnit };
