// === FILE: lib/hackernews-api.js ===
// GAP-021 NOTE: Spec lists as hacker-news-api.js but all agents use hackernews-api.js (no hyphen). File name is correct.
```javascript 
// === FILE: lib/hackernews-api.js === 
// Job: HN Algolia API wrapper — free, no auth, reliable 
// Reads: nothing 
// Writes: nothing 
// Called by: timing-scout.js 
 
import { scoreTrendVelocity, classifyTrend, scoreRelevance } from './scoring-algorithms.js'; 
 
const HN_ALGOLIA   = 'https://hn.algolia.com/api/v1'; 
const HN_BASE      = 'https://news.ycombinator.com'; 
 
/** 
 * Fetch HN stories sorted by date with velocity scoring. 
 * Uses search_by_date to catch fresh stories before they peak. 
 * 
 * @param {number} minPoints     - minimum points filter 
 * @param {number} hitsPerPage   - max results 
 * @returns {Array} velocity-scored HN items 
 */ 
export async function fetchHNTrending(minPoints = 50, hitsPerPage = 30) { 
  const url = 
`${HN_ALGOLIA}/search_by_date?tags=story&numericFilters=points>${minPoints}&hitsPer
Page=${hitsPerPage}`; 
  console.log(`[hn-api] Fetching HN trending (minPoints=${minPoints}, 
limit=${hitsPerPage})`); 
 
  try { 
    const response = await fetch(url, { 
      headers: { 'Accept': 'application/json' }, 
    }); 
 
    if (!response.ok) { 
      console.error(`[hn-api] HN Algolia returned ${response.status}`); 
      return []; 
    } 
 
    const data = await response.json(); 
 
    return (data.hits || []).map(item => { 
      const ageHours = (Date.now() - new Date(item.created_at).getTime()) / 3600000; 
      const velocity = scoreTrendVelocity(item.points || 0, ageHours); 
 
      return { 
        id:          item.objectID, 
        title:       item.title || '', 
        url:         item.url  || '', 
        points:      item.points || 0, 
        comments:    item.num_comments || 0, 
        author:      item.author || '', 
        created_at:  item.created_at, 
        age_hours:   Math.round(ageHours), 
        velocity:    velocity, 
        trend_class: classifyTrend(velocity), 
        hn_url:      `${HN_BASE}/item?id=${item.objectID}`, 
      }; 
    }).sort((a, b) => b.velocity - a.velocity); 
 
  } catch (err) { 
    console.error('[hn-api] Network error:', err.message); 
    return []; 
  } 
} 
 
/** 
 * Filter HN items by keyword relevance to product category. 
 * Returns items with at least one keyword match, sorted by velocity. 
 * 
 * @param {Array}    items     - from fetchHNTrending 
 * @param {string[]} keywords 
 * @param {number}   threshold - minimum relevance score (0–1), default 0 = any match 
 */ 
export function filterByRelevance(items, keywords, threshold = 0) { 
  if (!keywords?.length) return items; 
 
  return items 
    .map(item => ({ 
      ...item, 
      relevance: scoreRelevance(`${item.title} ${item.url}`, keywords), 
    })) 
    .filter(item => item.relevance > threshold) 
    .sort((a, b) => b.velocity - a.velocity); 
} 
 
/** 
 * Fetch HN Ask HN posts — community questions that reveal real pain points. 
 * These are high-value for copy ammunition. 
 */ 
export async function fetchHNAskPosts(limit = 20) { 
  const url = `${HN_ALGOLIA}/search_by_date?tags=ask_hn&hitsPerPage=${limit}`; 
  console.log('[hn-api] Fetching Ask HN posts'); 
 
  try { 
    const response = await fetch(url); 
    if (!response.ok) return []; 
    const data = await response.json(); 
    return (data.hits || []).map(item => ({ 
      id:       item.objectID, 
      title:    item.title || '', 
      points:   item.points || 0, 
      comments: item.num_comments || 0, 
      hn_url:   `${HN_BASE}/item?id=${item.objectID}`, 
    })); 
  } catch (err) { 
    console.error('[hn-api] Ask HN error:', err.message); 
    return []; 
  } 
} 
``` 
 
---