# Resonance Signal Log 
_Log real resonance signals here manually after each campaign week._ 
_This data feeds into memory/performance.json and improves future campaign quality._ 
 
## How to log a resonance signal 
 
Add an entry below when you observe: 
- A comment saying "this is exactly my situation" or equivalent 
- A DM asking for more information or access 
- Someone sharing the post without being asked 
- A reply with the person's own version of the same frustration 
- A new follower who immediately engages with 2+ posts 
 
## Format 
 
``` 
WEEK: 2026-W14 
PLATFORM: LinkedIn 
SIGNAL TYPE: comment — "this is exactly my situation" 
POST: linkedin-post.md (hook: "I spent 4 hours...") 
NOTES: 3 substantive comments in first 2 hours 
``` 
 
--- 
 
## Logged Signals 
 
_(Empty — log your first resonance signal here after week 1)_ 
``` 
 
--- 
 
## Setup Checklist 
 
```markdown 
# AMAE Setup Checklist 
## Complete in order. Each step has one clear action. 
 
--- 
 
### DAY 1 — GitHub Setup (30 minutes) 
 
- [ ] Fork this repo to your GitHub account 
- [ ] Make it public (required for GitHub Pages AEO in Phase 5) 
- [ ] Go to Settings → Secrets → Actions 
- [ ] Add secret: `OPENROUTER_API_KEY` (free key from openrouter.ai/keys) 
- [ ] Enable Actions: Settings → Actions → Allow all actions 
 
--- 
 
### DAY 1–2 — Fill product-dna.json (2 hours — the most important step) 
 
Before touching the file, do this first: 
- [ ] Read 50+ posts in the subreddits where your audience hangs out 
- [ ] Write down 10 real phrases they use (their words, not yours) 
- [ ] Answer the 4 desire questions in your own words, not marketing language 
 
Then fill the file: 
- [ ] `name` and `tagline` 
- [ ] `icp.primary` — one specific person, not a demographic 
- [ ] `icp.subreddits` — where they actually complain online 
- [ ] `the_desire.what_they_secretly_want` — the transformation, not the feature 
- [ ] `the_desire.what_they_fear_most` — the 2am fear 
- [ ] `the_desire.what_they_are_frustrated_by` — specific friction with details 
- [ ] `the_desire.who_they_want_to_become` — identity, not outcome 
- [ ] `brand_voice.sounds_like` — how you actually talk 
- [ ] `brand_voice.never_say` — words that make you cringe when you hear them 
 
The `the_desire` section is where AMAE's intelligence actually lives. AI cannot invent it. 
2 hours here is worth more than 20 hours anywhere else. 
 
--- 
 
### DAY 3 — Test the Intelligence Workflow (15 minutes) 
 
- [ ] Go to Actions tab → Weekly Intelligence Mining → Run workflow 
- [ ] Wait 10–15 minutes for the workflow to complete 
- [ ] Check that `intelligence/weekly/copy-ammunition.md` was committed 
- [ ] Open `copy-ammunition.md` — does it contain real audience phrases? 
  - YES: the subreddits are right and the scoring is working 
  - NO: add more specific subreddits to `intelligence-config.json` 
 
--- 
 
### DAY 4 — Test the Campaign Workflow (20 minutes) 
 
- [ ] Go to Actions tab → Weekly Campaign Generation → Run workflow 
- [ ] Wait 20–30 minutes for the workflow to complete 
- [ ] Check that a Pull Request was created 
- [ ] Open the PR — read the LinkedIn post and Twitter thread 
- [ ] Does the content use your audience's real language? 
  - YES: you're live. Schedule the workflows and let it run weekly. 
  - NO: the `the_desire` section needs more specificity. Edit and re-test. 
 
--- 
 
### WEEK 2 — First Live Campaign 
 
- [ ] Thursday workflow runs automatically at 6am UTC 
- [ ] You receive a PR notification 
- [ ] Review the PR (10–15 min): read every piece 
- [ ] Edit anything that doesn't sound human directly in the PR 
- [ ] Merge the PR 
- [ ] Post `reddit-post.md` manually to the subreddit 
- [ ] Review `newsletter.md` in Beehiiv and send manually 
 
--- 
 
### THE 6-WEEK RULE 
 
After 6 weeks: 
- Seeing resonance signals (real comments, DMs, shares)? → Do more of exactly that. Don't 
change it. 
- No resonance signals after 6 weeks? → The problem is in `the_desire` section. Revisit it. 
Add specificity. The content and platform are not the problem — the desire clarity is. 
 
Never add features to solve a desire problem. Fix the desire first.