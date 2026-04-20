---
layout: ../../layouts/Layout.astro
title: "Cartographer's Secret"
event: "CIT@CTF"
---

<div class="box" style="border-color: var(--text-muted); background-color: rgba(255,255,255,0.02);">
  <h3 style="margin-top: 0; border: none; color: var(--text-muted);">> CHALLENGE DESCRIPTION</h3>
  <p>Solve Follow the Flock first<br><br>
  I swear I’ve looked everywhere…<br>
  Maybe I’m not looking closely enough.</p>
  <p style="margin-bottom: 5px;"><strong>FLAG FORMAT:</strong> <code>CIT{underscore_between_words}</code></p>
  <p style="margin-top: 0;"><strong>HINT:</strong> This CTF is hosted by who?</p>
</div>

### > METHODOLOGY

**1. The Intended Path vs. The OSINT Shortcut**
The challenge hints heavily at mapping the University of New Haven (the hosts) based on the previous "Follow the Flock" challenge. The intended route likely involved scouring the map around the campus for hidden tags. 

However, because I keep meticulous notes during enumeration, I realized I could completely bypass this. 

**2. Re-using Reconnaissance Data**
During the initial username enumeration phase of *The Curator's Exit*, I ran the target alias `vitrinefox` through WhatsMyNameApp. One of the positive hits was an **OpenStreetMap** profile.

![WhatsMyNameApp results showing OpenStreetMap](/xp0z-writeups/images/Exit-02.jpg)

<br>

**3. Exploiting the Changesets**
Rather than randomly searching the map of New Haven, I went straight to the source: `https://www.openstreetmap.org/user/vitrinefox`. 

Looking at the user's activity history, I noticed they had recently made three specific map edits (changesets) right around Bergami Hall. Inspecting the changeset history log revealed the flag sitting directly in plain sight as an update comment.

![OpenStreetMap changesets revealing the flag](/xp0z-writeups/images/cartographers-secret.jpg)

<br>

### > THE FLAG
`CIT{ch3ck_th3_OSM_t4gs}`