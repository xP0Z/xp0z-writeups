---
layout: ../../layouts/Layout.astro
title: "Yannella"
event: "CIT@CTF"
---

<div class="box" style="border-color: var(--text-muted); background-color: rgba(255,255,255,0.02);">
  <h3 style="margin-top: 0; border: none; color: var(--text-muted);">> CHALLENGE DESCRIPTION</h3>
  <p>This challenge is dedicated to our late friend Anthony Yannella.<br><br>
  Find the organization that gave Anthony an acknowledgment for responsibly disclosing a security vulnerability.</p>
  <p style="margin-bottom: 0;"><strong>FLAG FORMAT:</strong> <code>CIT{name_of_organization}</code></p>
</div>

### > METHODOLOGY

**1. Initial Search**
We started with a simple Google search for "Anthony Yannella". The search results brought up a few of his profiles, including his Instagram and his LinkedIn. 

**2. Profile Analysis**
Since the challenge asks for a professional acknowledgment regarding a security vulnerability, we went straight to his LinkedIn. 

Scrolling down his profile to the **Honors & awards** section, we found the exact acknowledgment. It states he was recognized for identifying and responsibly disclosing a security vulnerability, and it was issued by the Department of Energy.

![LinkedIn Honors and Awards for Anthony Yannella](/ep0z-writeups/images/yannella.png)

<br>

### > THE FLAG
Taking the name of the organization from the award, we get our final flag:

`CIT{Department_of_Energy}`