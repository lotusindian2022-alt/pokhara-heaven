# Photography

Drop real photos here. They're optimized automatically by `astro:assets`
(AVIF/WebP, responsive `srcset`, lazy-loading) when imported and passed to an
`<ImageSlot src={...} />`.

Suggested filenames the site is (or will be) wired to:

| File | Used for |
| --- | --- |
| `hero-himalaya.jpg` | Home hero background (LCP) |
| `story-bg.jpg` | Home "Nuestra historia" background |
| `quote-bg.jpg` | Home heritage-quote band |
| `map.jpg` | Home location map |
| `dish-momo.jpg` … | Signature dish cards / gallery |

Keep masters reasonably sized (long edge ~2000px is plenty for a full-bleed
hero); the build generates the smaller responsive derivatives.
