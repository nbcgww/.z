export function formatNumberCompact(number: number) {
  const _ = +number
  const formatter = new Intl.NumberFormat('en-US', {
    notation: 'compact', // Use compact notation (e.g., 1K, 1M)
    compactDisplay: 'short', // Use short abbreviations (e.g., K, M instead of thousands, millions)
    maximumFractionDigits: 1, // Limit to one decimal place if needed
  })

  return formatter.format(_)
}
