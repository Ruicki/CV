/**
 * Límite de envíos por IP en memoria (ventana deslizante).
 * En Vercel cada instancia tiene su propia memoria, así que es una barrera de mejor esfuerzo:
 * frena ráfagas desde un mismo lugar, no ataques distribuidos.
 */
const hits = new Map<string, number[]>();

export function isRateLimited(key: string, limit: number, windowMs: number): boolean {
    const now = Date.now();
    const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
    if (recent.length >= limit) {
        hits.set(key, recent);
        return true;
    }
    recent.push(now);
    hits.set(key, recent);

    // Limpieza ocasional para que el mapa no crezca sin fin.
    if (hits.size > 1000) {
        for (const [k, list] of hits) {
            if (list.every((t) => now - t >= windowMs)) hits.delete(k);
        }
    }
    return false;
}
