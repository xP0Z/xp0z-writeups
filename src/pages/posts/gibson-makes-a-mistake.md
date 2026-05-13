---
layout: ../../layouts/Layout.astro
title: "Gibson makes a Mistake"
event: "RAMunchers CTF"
---

<div class="box" style="border-color: var(--text-muted); background-color: rgba(255,255,255,0.02);">
  <h3 style="margin-top: 0; border: none; color: var(--text-muted);">> CHALLENGE DESCRIPTION</h3>
  <p>Gibson has disabled the employee account and is posting fake pictures of themselves at the AI-IM global summit 2026 - but they have made mistakes in each image of their event post leaving clues to their real location. Your job is to identify the country and region they are based in.</p>
  <p style="margin-bottom: 5px;"><strong>FLAG FORMAT:</strong> <code>RMCTF{Region-Country}</code></p>
</div>

### > METHODOLOGY

**1. Analyzing the AI Artifacts**
Looking back at the AI-generated images posted by the fake `starr0256` account from the previous challenge. 

The image of Charlie standing next to the white car contains our critical clue. While the car's structural geometry is heavily distorted by the AI, the license plate generator pulled from real-world regional data. 

![Fake Account Car Image](/xp0z-writeups/images/aiorreal02.jpg)

<br>

**2. License Plate Geolocation**
Zooming in on the license plate (`CK-923-EJ`), we can extract several key data points:
* **The Format:** The `XX-123-XX` alphanumeric format, flanked by two blue bands, is the standard French SIV (Système d'Immatriculation des Véhicules) design.
* **The EU Strip:** The left blue band confirms it is a European Union plate.
* **The Department Code:** The right blue band contains the number **74**. 

In the French administrative system, department `74` corresponds to **Haute-Savoie**, a region located in the Alps of eastern France. 

<br>

### > THE FLAG
Using the required format `RMCTF{Region-Country}` and our extracted plate data:

`RMCTF{Haute-Savoie-France}`