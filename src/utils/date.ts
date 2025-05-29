import { parse, intervalToDuration } from "date-fns";

/**
 * Calcule la somme de plusieurs périodes.
 * @param ranges   Tableau d’objets { start: string; end: string }
 * @param t  Fonction de traduction i18n (ex: tCommon)
 * @param numeric  Si true, renvoie un nombre décimal, sinon une string
 * @returns        Nombre ou string selon le flag
 */
export function getDurationSum(
  ranges: { start: string; end: string }[],
  t: TFunction,
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

  if (years > 0) parts.push(t("year", { count: years }));
  if (months > 0) parts.push(t("month", { count: months }));

  return parts.join(" ");
}
import type { TFunction } from "i18next";

/**
 * Formatte une durée décimale (en années) en années et mois.
 *
 * @param decimalYears  Durée en années décimales (ex: 1.5)
 * @param t             Fonction de traduction i18n (ex: tCommon)
 * @param numeric       Si true, renvoie juste le nombre décimal arrondi (ex: 1.5)
 * @returns             Soit un nombre (ans décimaux), soit une chaîne "X an(s) et Y mois"
 */
export function formatDecimalDuration(
  decimalYears: number,
  t: TFunction,
  numeric = false
): number | string {
  if (numeric) {
    return Math.round(decimalYears * 10) / 10;
  }

  const totalMonths = Math.round(decimalYears * 12);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];
  if (years > 0) {
    parts.push(t("year", { count: years }));
  }
  if (months > 0) {
    parts.push(t("month", { count: months }));
  }
  return parts.join(" et ");
}
