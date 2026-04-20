---
layout: ../../layouts/Layout.astro
title: "Has it really been 2 years?"
event: "CIT@CTF"
---

<div class="box" style="border-color: var(--text-muted); background-color: rgba(255,255,255,0.02);">
  <h3 style="margin-top: 0; border: none; color: var(--text-muted);">> CHALLENGE DESCRIPTION</h3>
  <p>Has it really been 2 years...? Find the name of this menu item</p>
  <p style="margin-bottom: 5px;"><strong>FLAG FORMAT:</strong> <code>CIT{name_of_item}</code> or <code>CIT{name-of-item}</code></p>
  <p style="margin-top: 10px; font-size: 0.9em; color: var(--text-muted);">[Attached Asset: has_it_really_been_2_years.jpg]</p>
</div>

### > METHODOLOGY

**1. Initial Image Analysis**
The provided image shows a very plain-looking sandwich (pickles on a bun) inside a cardboard container. By analyzing the wrapper paper beneath the food, we can decipher fragments of a logo spelling out **WOW CAFE**.

![WOW Cafe Logo Identification](/xp0z-writeups/images/has_it_really_been_2_years-01.png)

<br>

**2. The Rabbit Hole & The Contextual Pivot**
Initially, I ran the image through an AI identifier, which incorrectly suggested the meat was pork. This led to dead-end searches for pork/pickle sub sandwiches. 

Realizing that generic menu searches weren't working, I pivoted to contextual clues. Since the University of New Haven is organizing this CTF, I searched for "WOW Cafe University of New Haven." This confirmed there is indeed a WOW Cafe (American Grill & Wingery) located in Bergami Hall on campus. 

<br>

**3. OSINT via Social Media**
I navigated to the official Sodexo dining website for UNH to check the retail menus. The item wasn't listed on the standard menu, but at the bottom of the webpage, I found a link to their official Instagram handle (`@unewhavendining`).

![University of New Haven Dining Instagram Link](/xp0z-writeups/images/has_it_really_been_2_years-02.jpg)

<br>

**4. Timeline Scraping**
The title of the challenge is a massive clue: *"Has it really been 2 years?"* Since the CTF took place in April 2026, I scrolled back exactly two years on their Instagram feed to April 2024. On April 3, 2024, I found a promotional post for a limited-time item that perfectly matches the bun, pickles, and presentation: **The Chick-N-Dawg**.

![Instagram post showing the Chick-N-Dawg in April 2024](/xp0z-writeups/images/has_it_really_been_2_years-03.png)

<br>

### > THE FLAG
Formatting the name of the limited-time item into the required flag syntax:

`CIT{chick-n-dawg}` *(or `CIT{chick_n_dawg}`)*