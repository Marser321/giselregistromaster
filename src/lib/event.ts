/**
 * Cálculo dinámico del evento recurrente.
 *
 * La masterclass se repite TODOS LOS MARTES a las 8:00 PM hora de Miami.
 * En vez de fijar una fecha en la config, calculamos en cada carga el próximo
 * martes 20:00 (America/New_York, con horario de verano/invierno resuelto
 * automáticamente) y generamos la etiqueta legible en español.
 */

const TZ = "America/New_York"; // Miami usa hora del Este (EDT/EST)
const EVENT_WEEKDAY = 2; // 0=Dom, 1=Lun, 2=Mar…
const EVENT_HOUR = 20; // 8:00 PM
const EVENT_DURATION_MIN = 60; // duración para el enlace de calendario

const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

/** Offset (ms) del timezone respecto a UTC en un instante dado. */
function tzOffsetMs(date: Date): number {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const map: Record<string, string> = {};
  for (const p of dtf.formatToParts(date)) map[p.type] = p.value;
  const asUTC = Date.UTC(
    +map.year,
    +map.month - 1,
    +map.day,
    +map.hour,
    +map.minute,
    +map.second,
  );
  return asUTC - date.getTime();
}

/** Componentes de fecha "de pared" (wall clock) en Miami para un instante. */
function nyWallParts(date: Date) {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
  });
  const map: Record<string, string> = {};
  for (const p of dtf.formatToParts(date)) map[p.type] = p.value;
  return {
    year: +map.year,
    month: +map.month, // 1-12
    day: +map.day,
    hour: +map.hour,
  };
}

/** Convierte una hora de pared de Miami (y,m0,d,h) al instante UTC correcto. */
function nyWallToUtc(y: number, m0: number, d: number, h: number): Date {
  const guess = Date.UTC(y, m0, d, h, 0, 0);
  const offset = tzOffsetMs(new Date(guess));
  return new Date(guess - offset);
}

export interface NextEvent {
  /** ISO del inicio del evento (para el countdown). */
  datetimeISO: string;
  /** Etiqueta legible, p. ej. "Martes, 28 de julio · 8:00 PM (Hora Miami)". */
  label: string;
  /** Inicio/fin en formato Google Calendar UTC: YYYYMMDDTHHMMSSZ. */
  calendarStart: string;
  calendarEnd: string;
}

/**
 * Devuelve el próximo martes 8:00 PM de Miami. Si hoy es martes pero ya pasó
 * la hora del evento, salta al martes siguiente.
 */
export function getNextEvent(now: Date = new Date()): NextEvent {
  const wall = nyWallParts(now);

  // Día de la semana del calendario de Miami (usando UTC como aritmética pura).
  const calBase = Date.UTC(wall.year, wall.month - 1, wall.day);
  const dow = new Date(calBase).getUTCDay();

  let add = (EVENT_WEEKDAY - dow + 7) % 7;
  if (add === 0 && wall.hour >= EVENT_HOUR) add = 7; // ya pasó hoy → siguiente

  const target = new Date(calBase + add * 86_400_000);
  const ty = target.getUTCFullYear();
  const tm0 = target.getUTCMonth();
  const td = target.getUTCDate();

  const start = nyWallToUtc(ty, tm0, td, EVENT_HOUR);
  const end = new Date(start.getTime() + EVENT_DURATION_MIN * 60_000);

  const label = `Martes, ${td} de ${MESES[tm0]} · 8:00 PM (Hora Miami)`;

  const fmtCal = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

  return {
    datetimeISO: start.toISOString(),
    label,
    calendarStart: fmtCal(start),
    calendarEnd: fmtCal(end),
  };
}
