---
layout: ../../layouts/Layout.astro
title: "The Curator's Exit - Part 2"
event: "CIT@CTF"
---

<div class="box" style="border-color: var(--text-muted); background-color: rgba(255,255,255,0.02);">
  <h3 style="margin-top: 0; border: none; color: var(--text-muted);">> CHALLENGE DESCRIPTION</h3>
  <p>Check the archives</p>
</div>

### > METHODOLOGY

**1. Connecting the Dots**
The prompt is extremely brief, but because this is a direct continuation of "The Curator's Exit," we already possess the primary alias of our target: **`vitrinefox`**. 

**2. Direct Platform Query**
The phrase "Check the archives" immediately points to the Internet Archive (archive.org). Rather than wasting time with standard search engine queries, I went straight to the source and directly constructed the user profile URL using our known handle:

`https://archive.org/details/@vitrinefox`

Navigating directly to the profile paid off instantly. The target had placed the flag in plain text right inside their bio description.

![Internet Archive profile for vitrinefox showing the flag](/ep0z-writeups/images/exit_part_two-01.png)

<br>

### > THE FLAG
Extracted directly from the Internet Archive bio:

`CIT{N0thing_st4ys_h1dden_for3ver}`