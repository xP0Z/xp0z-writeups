---
layout: ../../layouts/Layout.astro
title: "The Curator's Exit - Final"
event: "CIT@CTF"
---

<div class="box" style="border-color: var(--text-muted); background-color: rgba(255,255,255,0.02);">
  <h3 style="margin-top: 0; border: none; color: var(--text-muted);">> CHALLENGE DESCRIPTION</h3>
  <p>Our friend is something of a builder, can you find the final flag?</p>
</div>

### > METHODOLOGY

**1. Decoding the Clue & Pivoting**
The prompt mentions our target is "something of a builder." Referring back to the initial enumeration from Part 1, we found a Linktree that included a profile for **PCPartPicker**, a site dedicated to building custom PCs. 

**2. Profile Analysis**
Navigating directly to their profile at `https://pcpartpicker.com/user/vitrinefox/`, we find a very brief bio. The target states "This is by far my favorite build" and provides a direct link to a Dropbox file.

![PCPartPicker profile with Dropbox link](/images/exit_final_01.png)

<br>

**3. Retrieving the Payload**
Following the Dropbox link (`CuratorsExit-Final.pdf`), the document opens to reveal the final flag sitting right in the center of the page.

![Dropbox PDF displaying the flag](/images/exit_final_02.png)

<br>

### > THE FLAG
`CIT{N0t_ev3ryth1ng_i$_s3cur3}`