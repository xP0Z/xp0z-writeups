---
layout: ../../layouts/Layout.astro
title: "The Forbidden Sock"
event: "CIT@CTF"
---

<div class="box" style="border-color: var(--text-muted); background-color: rgba(255,255,255,0.02);">
  <h3 style="margin-top: 0; border: none; color: var(--text-muted);">> CHALLENGE DESCRIPTION</h3>
  <p>Our friend is really exposing himself out in public where is he??</p>
  <p style="margin-bottom: 5px;"><strong>FLAG FORMAT:</strong> <code>CIT{Team_Section_#}</code></p>
  <p style="margin-top: 0;"><strong>EXAMPLE:</strong> <code>CIT{Nuggets_Section_2}</code></p>
  <p style="margin-top: 10px; font-size: 0.9em; color: var(--text-muted);">[Attached Asset: sock-01.jpg]</p>
</div>

### > METHODOLOGY

**1. Initial Image Analysis & Reverse Search**
We are provided with a photo taken from the stands of a baseball stadium during a day game. 

![Original Target Photo](/ep0z-writeups/images/sock-01.jpg)

Running this image through Google Reverse Image Search (Google Lens) immediately identifies the iconic green walls and stadium architecture as **Fenway Park**, home of the Boston Red Sox. 

![Google Lens Result identifying Fenway Park](/ep0z-writeups/images/sock-02.jpg)

<br>

**2. Spatial Geolocation via 3D Mapping**
Knowing the stadium is Fenway Park and the team is the Red Sox, we now need to find the exact section number. I searched for "Fenway Park seating" and navigated to the official `mlb.com` 3D seat map.

By comparing the perspective of the original photo—specifically the angle looking toward the "Green Monster" wall, the placement of the light towers, and the foul line—we can drop into different sections on the 3D map to find a match. 

The view aligns perfectly with the perspective from **Section 7** along the right field line.

![MLB 3D Seat Map matching Section 7](/ep0z-writeups/images/sock-03.jpg)

<br>

### > THE FLAG
Using the required format `CIT{Team_Section_#}` and combining the home team (Red Sox) with our geolocated section (7):

`CIT{Red_Sox_Section_7}`