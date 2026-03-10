// === FILE: agents/dist-quora.js ===
// Job: Write Quora answer draft to a MANUAL_POST file for human review/posting
// NEVER auto-posts — Quora bans bots permanently
// GAP-004 FIX: File was completely absent from repository
//
// Reads:  campaigns/[WEEK]/text/quora-answer.md
// Writes: campaigns/[WEEK]/QUORA_MANUAL_POST.md

import { readText, writeFile, ensureDir } from '../lib/file-utils.js';
import { getCurrentWeek, getTodayString } from '../lib/week-utils.js';

async function main() {
  const week = process.env.WEEK_OVERRIDE ?? getCurrentWeek();
  const campaignDir = `campaigns/${week}`;
  const sourceFile = `${campaignDir}/text/quora-answer.md`;

  console.log('[dist-quora] Preparing Quora manual post...');

  let content;
  try {
    content = readText(sourceFile);
  } catch {
    console.log(`[dist-quora] No Quora answer found at ${sourceFile} — skipping`);
    return;
  }

  if (!content?.trim()) {
    console.log('[dist-quora] Quora answer is empty — skipping');
    return;
  }

  const outputPath = `${campaignDir}/QUORA_MANUAL_POST.md`;
  ensureDir(campaignDir);

  const output = `# QUORA MANUAL POST — ${week}
