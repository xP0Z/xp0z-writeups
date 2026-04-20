---
layout: ../../layouts/Layout.astro
title: "The Curator's Exit"
event: "CIT@CTF"
---

<div class="box" style="border-color: var(--text-muted); background-color: rgba(255,255,255,0.02);">
  <h3 style="margin-top: 0; border: none; color: var(--text-muted);">> CHALLENGE DESCRIPTION</h3>
  <p>We've received a communication from Interpol, containing a PDF. We are unsure of the contents, but believe it contains information on one of the thieves from the Louvre Heist. Your job is to find out as much as you can about this individual and send the information back to the authorities.<br><br>
  What is the thief's name?</p>
  <p style="margin-bottom: 5px;"><strong>FLAG FORMAT:</strong> <code>CIT{First_Last}</code></p>
  <p style="margin-top: 10px; font-size: 0.9em; color: var(--text-muted);">[Attached Asset: VF0000000011-Enc.pdf]</p>
</div>

### > METHODOLOGY

**1. Brute-Forcing the Encrypted PDF**
The provided PDF dossier was encrypted. To access the contents, I first extracted the PDF hash and then ran it through `hashcat` using the `rockyou.txt` wordlist.

<div style="background-color: #000; padding: 15px; border-radius: 4px; border: 1px solid #333; font-family: monospace; font-size: 0.85em; overflow-x: auto; margin: 20px 0;">
<pre style="margin: 0; color: #00ff00;">
(venv) ⌘Ser!s ~/Downloads/ctf % hashcat -m 10700 -a 0 pdf_hash.txt /Users/seris/Downloads/ctf/rockyou.txt
hashcat (v7.1.2) starting

$pdf$5*6*256*-4*1*16*47db8ab1c98eba67d6d5048e52d292c1*48*8db75818...8b8c034b:cherell
Session..........: hashcat
Status...........: Cracked
Hash.Mode........: 10700 (PDF 1.7 Level 8 (Acrobat 10 - 11))
Time.Started.....: Sat Apr 18 19:16:36 2026 (5 mins, 54 secs)
Speed.#02........: 532 H/s (26.63ms) @ Accel:21 Loops:1 Thr:224 Vec:1
Recovered........: 1/1 (100.00%) Digests (total), 1/1 (100.00%) Digests (new)
</pre>
</div>

The hashcat run successfully cracked the password: **`cherell`**.

<br>

**2. Document Analysis & Username Extraction**
Unlocking the PDF revealed a "Subject Dossier" from the Cultural Property Risk Cell. Scanning the document, I identified the suspect's primary alias.

![PDF Subject Dossier showing handle VitrineFox](/xp0z-writeups/images/Exit-01.png)

The most probable handle was listed as **`VitrineFox`**.

<br>

**3. Username Enumeration (WhatsMyName)**
With a solid handle, I moved to username enumeration. While `sherlock` via CLI is an option, I used the web-based tool **WhatsMyNameApp** for faster visual parsing. Searching for `vitrinefox` returned multiple active profiles across the web.

![WhatsMyNameApp results for vitrinefox](/xp0z-writeups/images/Exit-02.jpg)

The results provided a crucial pivot point: a Linktree profile (`linktr.ee/vitrinefox`).

<br>

**4. The Rabbit Hole & Social Media Pivoting**
The Linktree consolidated the target's digital footprint, linking to their X (Twitter) account, a PCPartPicker profile, and a LinkedIn page. 

I initially investigated the X account and found a post featuring an image of the birthplace of Leonardo da Vinci. I went down a rabbit hole trying to trace the origin of that image, discovering it was originally published by an author named "Sara Turini - Discover Tuscany Team". I suspected she might be our culprit, but after digging further, I realized this was a complete dead end.

Recalibrating and remembering the other accounts listed on the Linktree, I pivoted to their **LinkedIn** profile (`linkedin.com/in/vitrine-fox-424b153b3`). Opening the "Contact info" modal revealed an exposed ProtonMail address.

![LinkedIn contact info showing Remy's email address](/xp0z-writeups/images/Exit-03.png)

The email address `remy.beauvillier@proton.me` clearly exposes the thief's real first and last name.

<br>

### > THE FLAG
Extracting the names from the email address and formatting them as requested:

`CIT{Remy_Beauvillier}`