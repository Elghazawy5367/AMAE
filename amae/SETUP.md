# AMAE Setup Guide
## Get from zero to first campaign PR in under 2 hours

---

## Prerequisites Checklist

Before you start, confirm you have:
- [ ] A GitHub account (free)
- [ ] An OpenRouter account (free) → [openrouter.ai](https://openrouter.ai)
- [ ] Your product concept clear in your head (you'll need to fill product-dna.json)

That's it. Everything else is optional and added as you go.

---

## Step 1 — Fork or Upload This Repo

1. Create a new **private** GitHub repo (free)
2. Upload the contents of this ZIP to that repo
3. Make sure the repo root contains `package.json` — that's your root

---

## Step 2 — Add GitHub Secrets

Go to your repo → **Settings → Secrets and variables → Actions → New repository secret**

Add these secrets in order of priority:

### Required to run at all
| Secret | Where to get it | Notes |
|--------|-----------------|-------|
| `OPENROUTER_API_KEY` | [openrouter.ai/keys](https://openrouter.ai/keys) | Free tier is enough |

### Required for PR creation (auto-provided)
| Secret | Notes |
|--------|-------|
| `GITHUB_TOKEN` | GitHub injects this automatically — do NOT add manually |

### Add when ready for distribution (Phase 4)
| Secret | Where to get it |
|--------|-----------------|
| `LINKEDIN_ACCESS_TOKEN` | LinkedIn Developer App |
| `LINKEDIN_PERSON_URN` | Format: `urn:li:person:XXXXXXXXX` |
| `TWITTER_API_KEY` | developer.twitter.com |
| `TWITTER_API_SECRET` | developer.twitter.com |
| `TWITTER_ACCESS_TOKEN` | developer.twitter.com |
| `TWITTER_ACCESS_SECRET` | developer.twitter.com |
| `GROQ_API_KEY` | [console.groq.com](https://console.groq.com) — free |
| `BEEHIIV_API_KEY` | Beehiiv Settings → API |
| `BEEHIIV_PUBLICATION_ID` | Beehiiv Settings → Publication |

### Optional (media generation — Phase 4+)
| Secret | Where to get it |
|--------|-----------------|
| `IDEOGRAM_API_KEY` | ideogram.ai |
| `ELEVENLABS_API_KEY` | elevenlabs.io |
| `HEYGEN_API_KEY` | heygen.com |
| `HEYGEN_VOICE_ID` | HeyGen dashboard → Voices |

---

## Step 3 — Fill In product-dna.json

This is **the only file you need to fill in**. Everything else is config.

Open `config/product-dna.json` and fill in:

```
"name"      → Your product name (e.g. "Notion", "ConvertKit")
"tagline"   → Who it's for + what they get + how fast (under 15 words)
"one_line"  → One sentence for GitHub bios and short intros
```

**The Critical Section — spend 2 hours here:**

```
"the_desire" → This is where your marketing lives or dies.
```

Fill in `the_desire` by answering these 4 questions about one real person in your audience:

1. What is their day like? What did they try before?
2. What do they feel at 2am that they'd never say professionally?
3. Who do they want to BECOME (not just what they want to do)?
4. What have they tried that failed, and why?

Your answers go directly into `what_they_secretly_want`, `what_they_fear_most`, `what_they_are_frustrated_by`, and `who_they_want_to_become`.

**Do not use AI to generate this section.** These answers must come from lived knowledge of your audience.

---

## Step 4 — Choose Your 2 Starting Platforms

Edit `config/product-dna.json` → `"platforms"` array.

Start with exactly 2 platforms. Options:
- `"linkedin"` — if your ICP is professionals or B2B
- `"twitter_x"` — if your ICP is builders, founders, developers  
- `"reddit"` — if your ICP has a strong subreddit community

**Platform selection is your decision, not AI's.** Pick where your real ICP spends time.

---

## Step 5 — Configure Subreddits

Edit `config/intelligence-config.json` → `"reddit"` → `"subreddits"` array.

Add the 3-5 subreddits where your ICP complains, asks for recommendations, and vents.

---

## Step 6 — Test the System Locally (Optional but Recommended)

```bash
npm ci

# Test Reddit API connection (no auth required)
npm run test:reddit

# Test OpenRouter connection
npm run test:openrouter
```

If both pass, your credentials are correct.

---

## Step 7 — Enable GitHub Actions

Go to your repo → **Actions tab** → If prompted, click "Enable Actions"

The three workflows will now run on schedule:
- **Tuesdays 4am UTC** — Intelligence mines Reddit/HN → `intelligence/weekly/synthesis-brief.md`
- **Thursdays 6am UTC** — Campaign engine generates all content → files a PR
- **Fridays 8am UTC** — Distribution fires after you merge Thursday's PR

---

## Your Weekly Ritual (15 minutes)

**Every Thursday afternoon:**
1. Open the PR that AMAE filed (it appears in your repo → Pull requests)
2. Read every piece of content — does it sound like a real human?
3. Check the guardrail log — did anything get rewritten?
4. Merge the PR when you're satisfied

**After merging:**
- LinkedIn, Twitter/X, Threads, Facebook, Instagram auto-post (if you've added keys)
- Reddit post: post `REDDIT_MANUAL_POST.md` yourself — never auto-posted
- Quora answer: post `QUORA_MANUAL_POST.md` yourself — never auto-posted
- Newsletter: review draft in Beehiiv and click Send yourself — never auto-sent

**Every week, log what resonated:**
Open a new GitHub Issue using the "📊 Performance Update" template. This is how AMAE learns.

---

## The Only Metric That Matters in Week 1–6

You are looking for **resonance signals**, not vanity metrics:

✅ **Real signal:** A comment saying "this is exactly my situation"  
✅ **Real signal:** A DM asking for more info or access  
✅ **Real signal:** Someone sharing your post without being asked  
✅ **Real signal:** A reply with their own version of the same frustration  

❌ **Not a signal:** Likes  
❌ **Not a signal:** "Great post!" comments  
❌ **Not a signal:** Follower count going up  
❌ **Not a signal:** Impressions and reach numbers  

**If you see zero resonance signals after 6 weeks**, the problem is in `the_desire` section of product-dna.json. Run the Desire Discovery Protocol again.

**If you see any resonance signal**, do more of exactly that. Don't optimise it. Don't change it.

---

## Expansion Gates

**Do not add features until these gates are met:**

| Feature | Gate condition |
|---------|---------------|
| Add a 3rd platform | First real resonance signal observed |
| Enable image generation | 4+ weeks of resonance |
| Enable video generation | Consistent weekly resonance for 6+ weeks |
| Evolution System | 3 months of resonance data in memory |
| Productize AMAE | 3+ months private use, real results to show |

---

## Getting Help

All system architecture is documented in:
- `AGENTS.md` — what each agent does and reads/writes
- `config/product-dna.json` — the only file you fill in
- `analytics/resonance-log.md` — your manual performance log
- `.github/ISSUE_TEMPLATE/` — use these for campaigns, launches, and performance updates

*SETUP.md — GAP-019 FIX — March 2026*
