---
layout: ../../layouts/Layout.astro
title: "Office Switching"
event: "RAMunchers CTF"
---

<div class="box" style="border-color: var(--text-muted); background-color: rgba(255,255,255,0.02);">
  <h3 style="margin-top: 0; border: none; color: var(--text-muted);">> CHALLENGE DESCRIPTION</h3>
  <p>An IT company allowed Gibson to "optimise" their office locations. Your goal is to find the flag that shows where the Infrastructure team has been moved to.</p>
  <p><strong>TARGET:</strong> <a href="https://bluepeakcyber.co.uk/" target="_blank" style="color: var(--accent-glow);">https://bluepeakcyber.co.uk/</a></p>
  <p style="margin-bottom: 5px;"><strong>FLAG FORMAT:</strong> <code>RMCTF{XXXXXXXXXXXX}</code></p>
</div>

### > METHODOLOGY

**1. Source Code & Directory Enumeration**
Going straight to the source code of `https://bluepeakcyber.co.uk/`, right before the closing `</footer>` tag, the developer left a hidden HTML comment. This comment leaked the existence of an internal IT subdomain: `internalit.bluepeakcyber.co.uk`.

Navigating to that subdomain presents a static "Internal Systems Maintenance" page. Since the page itself didn't contain the flag, the next logical step in web reconnaissance is to check for hidden directories via `robots.txt`.

<div style="background-color: #000; padding: 15px; border-radius: 4px; border: 1px solid #333; font-family: monospace; font-size: 0.85em; overflow-x: auto; margin: 20px 0;">
<pre style="margin: 0; color: #00ff00;">
(venv) ☸PowerMode ~/Downloads/ctf % curl https://internalit.bluepeakcyber.co.uk/robots.txt
User-agent: *
Disallow: /memo.pdf%
(venv) ☸PowerMode ~/Downloads/ctf % 
</pre>
</div>

**2. DNS Reconnaissance**
While downloading the hidden memo, running a TXT record query on the root domain (`dig TXT bluepeakcyber.co.uk`) returns an interesting custom record:

<div style="background-color: #000; padding: 15px; border-radius: 4px; border: 1px solid #333; font-family: monospace; font-size: 0.85em; overflow-x: auto; margin: 20px 0;">
<pre style="margin: 0; color: #00ff00;">
(venv) ☸PowerMode ~/Downloads/ctf % dig TXT bluepeakcyber.co.uk

; <<>> DiG 9.10.6 <<>> TXT bluepeakcyber.co.uk
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 5789
;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1280
;; QUESTION SECTION:
;bluepeakcyber.co.uk.		IN	TXT

;; ANSWER SECTION:
bluepeakcyber.co.uk.	300	IN	TXT	"Legacy systems have been left running while the new infrastructure is under maintenance. To contact the infrastructure team get in contact with support@coventry.r032.bluepeakcyber.co.uk"
bluepeakcyber.co.uk.	300	IN	TXT	"v=spf1 +a +mx +ip4:149.255.62.126 include:relay.thundermail.uk ~all"

;; Query time: 64 msec
;; SERVER: 2409:40c2:11f:7ba7::70#53(2409:40c2:11f:7ba7::70)
;; WHEN: Wed May 13 20:14:53 IST 2026
;; MSG SIZE  rcvd: 326

(venv) ☸PowerMode ~/Downloads/ctf % 
</pre>
</div>

This DNS lookup leaks a nested subdomain assigned to the infrastructure team: `coventry.r032.bluepeakcyber.co.uk`.

<br>

**3. Connecting the Dots with the Memo**
Examining the hidden `memo.pdf` provides exact instructions on how to find the flag. The memo, sent by the "Internal IT Team", states that legacy and temporary DNS records have intentionally been left in place. These records are currently being retained as "operational notes".

![Internal IT Memo](/xp0z-writeups/images/office_switching.jpg)

The challenge creator is literally telling us that the final flag is hidden as an "operational note" inside a temporary DNS TXT record!

<br>

**4. Extracting the Flag**
We know the Infrastructure team's new subdomain is `coventry.r032.bluepeakcyber.co.uk`, and we know the IT team leaves notes in TXT records. Querying the TXT records of that specific subdomain returns the hidden operational note containing our final flag:

<div style="background-color: #000; padding: 15px; border-radius: 4px; border: 1px solid #333; font-family: monospace; font-size: 0.85em; overflow-x: auto; margin: 20px 0;">
<pre style="margin: 0; color: #00ff00;">
(venv) ☸PowerMode ~/Downloads/ctf % dig TXT coventry.r032.bluepeakcyber.co.uk

; <<>> DiG 9.10.6 <<>> TXT coventry.r032.bluepeakcyber.co.uk
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 24390
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1280
;; QUESTION SECTION:
;coventry.r032.bluepeakcyber.co.uk. IN	TXT

;; ANSWER SECTION:
coventry.r032.bluepeakcyber.co.uk. 300 IN TXT	"RMCTF{DN5_1S_PUBLIC}"

;; Query time: 85 msec
;; SERVER: 2409:40c2:11f:7ba7::70#53(2409:40c2:11f:7ba7::70)
;; WHEN: Wed May 13 20:24:52 IST 2026
;; MSG SIZE  rcvd: 95

(venv) ☸PowerMode ~/Downloads/ctf % 
</pre>
</div>

<br>

### > THE FLAG
`RMCTF{DN5_1S_PUBLIC}`