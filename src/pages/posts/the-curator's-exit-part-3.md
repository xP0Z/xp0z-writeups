---
layout: ../../layouts/Layout.astro
title: "The Curator's Exit - Part 3"
event: "CIT@CTF"
---

<div class="box" style="border-color: var(--text-muted); background-color: rgba(255,255,255,0.02);">
  <h3 style="margin-top: 0; border: none; color: var(--text-muted);">> CHALLENGE DESCRIPTION</h3>
  <p>Our friend was planning their last big score, any idea where?</p>
  <p style="margin-bottom: 0;"><strong>FLAG FORMAT:</strong> <code>CIT{City_Country}</code></p>
</div>

### > METHODOLOGY

**1. Re-visiting the X Account**
In the first part of this series, while tracing the `vitrinefox` alias, I found their X (Twitter) profile. They had a single post with the caption "Post score = Vacation Mode Activated" and a photo of a stone building. While it was a dead end for finding their name earlier, it is the exact puzzle piece needed for this challenge.

![X profile for vitrinefox showing the location image](/xp0z-writeups/images/exit_part_three-01.jpg)

<br>

**2. Reverse Image Search & Geolocation**
Extracting the image from the X post, I ran it through a reverse image search. The visual matches immediately identified the architecture and stone courtyard as the famous birthplace of Leonardo da Vinci. 

A quick geographical search for this historical site confirms it is located in the small hamlet of **Anchiano, Italy**.

<br>

### > THE FLAG
Using the required City and Country format:

`CIT{Anchiano_Italy}`