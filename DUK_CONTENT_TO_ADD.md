# DUK Page Content - Ready to Add to Sanity

Follow these steps to add all the content from the original website to your new DUK page.

## Step 1: Start Sanity Studio

```bash
npm run sanity
```

Go to http://localhost:3333

## Step 2: Create DUK Side Content

1. Click **"DUK Side"** in the left sidebar
2. Click **"Create new"** button
3. Fill in the following fields:

---

### Basic Information

**Titel:**
```
Sct. Albani DUK
```

**Undertitel:**
```
Danmarks Unge Katolikker
```

**Hero Billede:**
- Upload an image (you'll need to get one from the original site or use a new one)
- Or skip for now - fallback image will be used

---

### Main Description (Beskrivelse)

Click into the text editor and add:

```
Sct. Albani DUK er en lokal katolsk børne- og ungdomsorganisation tilknyttet Sct. Albani Kirke i Odense.

Vores formål er at styrke fællesskab med Gud og med hinanden.

Vi tilbyder aktiviteter for børn og unge fra førstekommunion og op til 30 år, hvor vi gennem fælles oplevelser, lejre og events styrker vores tro og skaber varige venskaber.
```

---

### Membership Information

**Kontingent:**
```
100 kr. pr. år
```

**Tilmeldings URL:**
```
https://www.duk.dk
```

---

### Age Groups (Aldersgrupper)

Click **"Add item"** for each group:

#### Group 1
- **Gruppe Navn:** `Førstekommunikanter`
- **Aldersgruppe:** `Fra 1. kommunion`
- **Beskrivelse:** `For børn der har modtaget deres første kommunion og ønsker at deltage i kirkens fællesskab.`

#### Group 2
- **Gruppe Navn:** `Firmander`
- **Aldersgruppe:** `Unge under forberedelse til firmelse`
- **Beskrivelse:** `Forberedelse til firmelsessakramentet gennem undervisning og fællesskab.`

#### Group 3
- **Gruppe Navn:** `Børnegruppe`
- **Aldersgruppe:** `4-11 år med forældre`
- **Beskrivelse:** `Aktiviteter for børn sammen med deres forældre, hvor vi leger, lærer og vokser i troen sammen.`

#### Group 4
- **Gruppe Navn:** `Ungdomsgruppe`
- **Aldersgruppe:** `Efter firmelse - 30 år`
- **Beskrivelse:** `Fællesskab for unge voksne med sociale arrangementer, diskussioner og deltagelse i nationale lejre og retreats.`

---

### Board Members (Bestyrelsesmedlemmer)

Click **"Add item"** for each member:

#### Member 1
- **Navn:** `Maria Dinh`
- **Rolle:** `Formand`
- **Billede:** (Upload if you have one)
- **Email:** `mariadinhduk@gmail.com`

#### Member 2
- **Navn:** `Anni`
- **Rolle:** `Næstformand`
- **Billede:** (Upload if you have one)
- **Email:** (Leave empty if not available)

#### Member 3
- **Navn:** `Veronica`
- **Rolle:** `Kasserer`
- **Billede:** (Upload if you have one)
- **Email:** (Leave empty if not available)

#### Member 4
- **Navn:** `Dominic`
- **Rolle:** `Bestyrelsesmedlem`
- **Billede:** (Upload if you have one)
- **Email:** (Leave empty if not available)

#### Member 5
- **Navn:** `Teresa`
- **Rolle:** `Bestyrelsesmedlem`
- **Billede:** (Upload if you have one)
- **Email:** (Leave empty if not available)

#### Member 6
- **Navn:** `Lukas`
- **Rolle:** `Bestyrelsesmedlem`
- **Billede:** (Upload if you have one)
- **Email:** (Leave empty if not available)

#### Member 7
- **Navn:** `Anna`
- **Rolle:** `Suppleant`
- **Billede:** (Upload if you have one)
- **Email:** (Leave empty if not available)

---

### Board Photo (Bestyrelsesbillede)

- Upload a group photo of the board if available
- Or skip for now

---

### Social Media (Sociale Medier)

**Facebook:**
```
https://www.facebook.com/SctAlbaniDuk/
```

**Instagram:**
```
https://www.instagram.com/sctalbaniduk/
```

---

### Contact Information

**Kontakt Email:**
```
sognepraest@sct-albani.dk
```

**Kontakt Telefon:**
```
2896 5517
```

---

## Step 3: Publish

1. Review all the information
2. Click the **"Publish"** button in the bottom right
3. Wait for confirmation

## Step 4: View Your Page

1. Go to http://localhost:3000
2. Hover over **"Aktiviteter"**
3. Click **"Sct. Albani DUK"**
4. Your content should now appear!

---

## Additional Information

### Support Account (Optional - Add to Description)

If you want to include bank details for donations, add this to the description:

```
Støttekonto: Reg. 1551, Konto 9011182965
(Notér "Støtte til Sct. Albani DUK" i beskeden)
```

### Chair Contact Info

Maria Dinh is the primary contact:
- Phone: 51602224
- Email: mariadinhduk@gmail.com

---

## Tips

1. **Images:** You can add photos later - the page works fine without them initially
2. **Updates:** Edit the content anytime by going back to Sanity Studio
3. **Preview:** Changes appear on the website within 60 seconds (or immediately after restarting `npm run dev`)
4. **Backup:** All content is saved in Sanity's cloud, so you won't lose anything

---

## What Happens Next

Once published, your DUK page will show:
- ✅ Hero section with title and subtitle
- ✅ Mission statement and description
- ✅ Membership information with registration link
- ✅ All age groups in cards
- ✅ Board members (with or without photos)
- ✅ Contact information and social media links

All styled to match your homepage design! 🎉
