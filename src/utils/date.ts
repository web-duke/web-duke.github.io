import { parse, intervalToDuration } from "date-fns";

/**
 * Calcule la somme de plusieurs périodes.
 * @param ranges   Tableau d’objets { start: string; end: string }
 * @param tCommon  Fonction de traduction i18n pour "year"/"month"
 * @param numeric  Si true, renvoie un nombre décimal, sinon une string
 * @returns        Nombre ou string selon le flag
 */
export function getDurationSum(
  ranges: { start: string; end: string }[],
  tCommon: (key: string, opts: { count: number }) => string,
  numeric = false
): number | string {
  let totalMonths = 0;
  for (const { start, end } of ranges) {
    const startDate = parse(start, "yyyy-MM", new Date());
    const endDate = parse(end, "yyyy-MM", new Date());
    const dur = intervalToDuration({ start: startDate, end: endDate });
    totalMonths += (dur.years || 0) * 12 + (dur.months || 0);
  }

  if (numeric) {
    const decimalYears = Math.round((totalMonths / 12) * 10) / 10;
    return decimalYears;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];

  if (years > 0) parts.push(tCommon("year", { count: years }));
  if (months > 0) parts.push(tCommon("month", { count: months }));

  return parts.join(" ");
}
