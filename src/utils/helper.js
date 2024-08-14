export function formatNumberWithCommas(number) {
  if (typeof number !== "number") {
    throw new Error("Input must be a number");
  }
  return number.toLocaleString();
}

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value,
  );
