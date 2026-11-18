import { FALLBACK_TOP_ANIME } from "./fallback-data";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.jikan.moe/v4";

const fetchJSON = async (url, retries = 2) => {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url, {
        next: { revalidate: 1800 },
      });

      if (res.status === 429 && i < retries) {
        await new Promise((r) => setTimeout(r, 1000 * (i + 1)));
        continue;
      }

      if (!res.ok) {
        if (i < retries) {
          await new Promise((r) => setTimeout(r, 800));
          continue;
        }
        return { data: [] };
      }

      const json = await res.json();
      if (json?.data) return json;
      return { data: [] };
    } catch {
      if (i < retries) {
        await new Promise((r) => setTimeout(r, 800 * (i + 1)));
      }
    }
  }
  return { data: [] };
};

export const getAnimeResponse = async (resource, query = "") => {
  const result = await fetchJSON(`${BASE_URL}/${resource}${query ? `?${query}` : ""}`);
  
  // Jika API Jikan down / 504 / 429 dan return data kosong:
  if ((!result?.data || (Array.isArray(result.data) && result.data.length === 0)) && (resource.includes("top/anime") || resource.includes("seasons/now") || resource.includes("recommendations"))) {
    return { data: FALLBACK_TOP_ANIME };
  }

  // Jika query single anime detail gagal:
  if (resource.startsWith("anime/") && (!result?.data || !result.data.mal_id)) {
    const id = resource.split("/")[1];
    const found = FALLBACK_TOP_ANIME.find((a) => String(a.mal_id) === String(id));
    if (found) return { data: found };
  }

  return result;
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await fetchJSON(`${BASE_URL}/${resource}`);
  if (!response?.data || !Array.isArray(response.data)) {
    return FALLBACK_TOP_ANIME;
  }
  const flat = response.data.flatMap((item) => item[objectProperty] || []);
  return flat.length ? flat : FALLBACK_TOP_ANIME;
};

export const reproduce = (data, gap) => {
  const list = Array.isArray(data) && data.length ? data : FALLBACK_TOP_ANIME;
  const seen = new Set();
  const unique = list.filter((item) => {
    if (!item?.mal_id || seen.has(item.mal_id)) return false;
    seen.add(item.mal_id);
    return true;
  });
  if (gap >= unique.length) return { data: unique };
  const first = ~~(Math.random() * Math.max(1, unique.length - gap));
  return { data: unique.slice(first, first + gap) };
};
