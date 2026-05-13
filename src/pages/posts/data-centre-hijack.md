---
layout: ../../layouts/Layout.astro
title: "Data Centre Hijack"
event: "RAMunchers CTF"
---

<div class="box" style="border-color: var(--text-muted); background-color: rgba(255,255,255,0.02);">
  <h3 style="margin-top: 0; border: none; color: var(--text-muted);">> CHALLENGE DESCRIPTION</h3>
  <p>Gibson has attacked one of the Data Center's of a significant company. Before their server was hijacked, the employees managed to send a drone picture of the building. Your job is to identify the location of this data server and the company that owns it.</p>
  <p style="margin-bottom: 5px;"><strong>FLAG FORMAT:</strong> <code>RMCTF{City-Country-Company}</code></p>
  <p style="margin-top: 0; color: var(--text-muted);">[Attached Asset: data-center.jpg]</p>
</div>

![Target Drone Picture](/xp0z-writeups/images/data-center.jpg)

<br>

### > METHODOLOGY

**1. Reverse Image Search**
We are provided with an image of data center. To identify the exact location and the company, the most effective method is a reverse image search. 

Uploading the target image to Google Lens immediately returns an exact visual match. The related search explicitly identifies the facility as the **Google data center in Saint-Ghislain, Belgium**.

![Google Lens Search Result](/xp0z-writeups/images/data01.jpg)

<br>

### > THE FLAG
Using the required format `RMCTF{City-Country-Company}` and our gathered information:
* **City:** Saint-Ghislain
* **Country:** Belgium
* **Company:** Google

`RMCTF{Saint-Ghislain-Belgium-Google}`