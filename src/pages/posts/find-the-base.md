---
layout: ../../layouts/Layout.astro
title: "Mission: Find the Base"
event: "RAMunchers CTF"
---

<div class="box" style="border-color: var(--text-muted); background-color: rgba(255,255,255,0.02);">
  <h3 style="margin-top: 0; border: none; color: var(--text-muted);">> CHALLENGE DESCRIPTION</h3>
  <p>The what3words of the hotel location in the previously identified country have been hidden in the photo in the language of the country they are really based in. Your job is to identify the what3words of the location and the name of the hotel.</p>
  <p style="margin-bottom: 5px;"><strong>FLAG FORMAT:</strong> <code>RMCTF{///word.word.word-Hotel Name}</code></p>
</div>

### > METHODOLOGY

From solving previous challenges, we had already established a crucial piece of background intelligence: our target is actually based in France. Her latest post features an AI-generated image claiming to be the Hyatt Regency in Baltimore. 

As I started late, The author had already dropped a hint on Discord regarding what3words maps.

![Fake Baltimore Hyatt](/xp0z-writeups/images/find_the_base01.jpg)

<br>

There are two ways to solve this,

**Method 1: The Easy way**
Knowing the target is in France and the building is a Hyatt Regency, a direct search for "Hyatt Regency France" on the what3words map immediately drops us on the **Hyatt Regency Paris Étoile**, revealing the exact 3-word coordinate in English.

`///misted.clearing.workouts`

![what3words Map Result](/xp0z-writeups/images/find_the_base02.jpg)

<br>

**Method 2: The NOT so Easy way (Translation)**
What's a CTF challenge without a little grinding? 
Here, we extract the text from the skyscraper:
`embué clairière séances d'entraînement`

We can translate these French words into their English equivalents:
*   **embué** = foggy / fogged / steamed / *misted*
*   **clairière** = glade / *clearing*
*   **séances d'entraînement** = training / *workouts*

By brute-forcing combinations of these translations into the what3words search, we finally hit the valid coordinate: `///misted.clearing.workouts`, which pinpoints the exact same hotel in Paris.

<br>

### > THE FLAG
Using the required format `RMCTF{///word.word.word-Hotel Name}` and our translated coordinates, we will get:

`RMCTF{///misted.clearing.workouts-Hyatt Regency Paris Étoile}`