---
layout: ../../layouts/Layout.astro
title: "AI or Real?"
event: "RAMunchers CTF"
---

<div class="box" style="border-color: var(--text-muted); background-color: rgba(255,255,255,0.02);">
  <h3 style="margin-top: 0; border: none; color: var(--text-muted);">> CHALLENGE DESCRIPTION</h3>
  <p>An employee of the identified company (author of the picture from challenge 1) has recently reported an impersonator account stalking them on social media – we believe it may be Gibson posting AI versions of their posts. Using their real username: <code>starring1367</code> can you find the fake account and the name of the event taking place in the picture of their most recent holiday.</p>
  <p style="margin-bottom: 5px;"><strong>FLAG FORMAT:</strong> <code>RMCTF{username-Event Name}</code></p>
</div>

### > METHODOLOGY

**1. Locating the Real Target**
Initial username enumeration on `starring1367` using Sherlock yielded inconsistent results, so I pivoted to IDCrawl. This successfully linked the username to a real Instagram profile belonging to Charlie Jacobs.

![Real Instagram Profile](/xp0z-writeups/images/aiorreal01.jpg)

<br>

**2. Hunting the Impersonator**
The real profile only has two posts (including the data center from the previous challenge) and zero followers. Since the prompt mentioned the impersonator is stalking them, the most logical place to look for interaction is the "Tagged" photos section. 

Checking the tagged tab reveals a post by a slightly altered username: **`starr0256`**. 

![Tagged Section Revealing Fake Account](/xp0z-writeups/images/aiorreal02.jpg)

<br>

**3. Verifying the Fake Account & Event**
Navigating to `starr0256`, we find an account that is clearly using AI to generate fake versions of Charlie's life.

Looking at the fake account's grid, their most recent holiday picture features a floral design in a city square. A quick visual search identifies this as the famous **Flower Carpet** event in Brussels, Belgium.

![Fake Account Grid](/xp0z-writeups/images/aiorreal03.jpg)

<br>

### > THE FLAG
Using the required format `RMCTF{username-Event Name}` and combining the fake username with the identified holiday event:

`RMCTF{starr0256-Flower Carpet}`