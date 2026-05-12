Condition images (the "What we help with" cards)
================================================

Each service has its own subfolder. Inside, drop a JPG for each condition
named after the slugified label.

Folder structure:
  public/services/{service-slug}/{condition-slug}.{jpg|jpeg|png|webp}

Accepted formats: jpg, jpeg, png, webp (auto-detected — drop any of these).

Examples for Physical Therapy:
  public/services/physical-therapy/knee.jpg
  public/services/physical-therapy/foot-ankle.jpg
  public/services/physical-therapy/lower-leg.jpg
  public/services/physical-therapy/hip-groin.jpg
  public/services/physical-therapy/neck.jpg
  public/services/physical-therapy/back.jpg
  public/services/physical-therapy/neurological.jpg

The slug is derived from the part of the condition before the colon.
"Foot & Ankle: Achilles tendon rupture..." → foot-ankle.jpg
"Hip & Groin: hip dysplasia..."           → hip-groin.jpg

Recommended:
  - Aspect ratio: 4:3 (landscape) — e.g. 800x600px or 1200x900px
  - Format: JPG, quality 80-85
  - Size: under 200KB per image

If a file exists, the condition card uses it.
If not, a styled gradient placeholder shows the service icon.

Service slugs:
  blood-flow-restriction
  cupping-therapy
  kinesiotaping
  occupational-therapy
  physical-therapy
  sports-performance
