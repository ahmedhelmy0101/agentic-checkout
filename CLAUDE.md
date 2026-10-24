# Notes for Claude

## Shopify pricing (Tamwenat Elzekrayat)
- Read `reports/PRICING_LOG.md` before any pricing work – it records every price change applied, what was excluded, and how to roll back.
- Cost rule: Shopify unit cost × 15 × 1.5 = cost in EGP. AlBaik meal cost is 370 EGP at the 12.5 SAR rate and moves with the riyal.
- Wholesale = `custom.supplier` metafield contains جملة/جمله; wholesale and its single always get the same % increase; wholesale max 15% cheaper per piece.
- Never change prices of: AlBaik meals, Lusine, Altazaj Meals, Almarai juices (owner exclusion, 2026-10-23).
- Before writing prices, re-read live prices and skip any that changed since the analysis snapshot.
