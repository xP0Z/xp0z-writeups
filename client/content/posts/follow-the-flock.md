---
layout: ../../layouts/Layout.astro
title: "Follow the Flock"
event: "CIT@CTF"
---

<div class="box" style="border-color: var(--text-muted); background-color: rgba(255,255,255,0.02);">
  <h3 style="margin-top: 0; border: none; color: var(--text-muted);">> CHALLENGE DESCRIPTION</h3>
  <p>Man these damn seagulls keep following me around… always in a flock, obnoxious sirens blaring. And they smell like pizza.<br><br>
  Feels like I’m being watched everywhere I go…</p>
  <p style="margin-bottom: 5px;"><strong>FLAG FORMAT:</strong> <code>CIT{Street_Name_City_Name_State}</code></p>
  <p style="margin-top: 0;"><strong>HINT:</strong> This specific city in Connecticut is known for its style of Pizza.</p>
</div>

### > METHODOLOGY

**1. Decoding the Hint**
The hint at the bottom of the prompt gives us the exact city. A quick search for a city in Connecticut famous for its pizza style immediately reveals **New Haven**, which is globally known for "apizza".

![Google Search for Connecticut Pizza](/images/flock-01.png)

<br>

**2. Locating the Target**
Knowing the city and the specific pizza style, the next step is to search for "apizza New Haven locations." Looking at the most prominent results and mapping them out leads directly to one of the most famous spots: Modern Apizza, which is situated on **State Street**. 

![Google Maps search for apizza new haven](/images/flock-02.jpg)

<br>

### > THE FLAG
Using the required format provided in the challenge description, we combine the street, city, and state abbreviation:

`CIT{State_Street_New_Haven_CT}`