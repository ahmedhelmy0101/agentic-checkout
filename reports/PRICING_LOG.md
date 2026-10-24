# Pricing log – Tamwenat Elzekrayat (Shopify)

## 2026-10-23/24 – General price increase (SAR 12.5 → 14.74, +17.92%)

**Source file:** `reports/New Prices 2026-10-23.xlsx`
**Rollback data:** `reports/price_change_2026-10-23_rollback.json` (old & new price per variant)

### Method
- Cost in EGP = Shopify cost × 15 × 1.5 (= ×22.5). AlBaik meal cost = 370 EGP at the 12.5 rate, moves with the riyal.
- 5 price groups (increase %): G1 22% · G2 18% · G3 16% · G4 15% · G5 2%
  - G1: margin < 25%, slow movers (bottom 20% of revenue), unsold items
  - G2: core sellers with 25–40% margin, or no cost in Shopify
  - G3: core sellers (45–80% cumulative revenue), margin ≥ 40%
  - G4: top revenue items (first 45% of revenue), margin ≥ 40%
  - G5: price-sensitive best sellers + 24 staple coffee/rice/tea items chosen by owner
- Wholesale items (supplier metafield `custom.supplier` contains جملة/جمله) get the same group/% as their single item.
- Wholesale packs: max 15% cheaper per piece than the single (fixed 2026-10-22, see `wholesale_price_fix_2026-10-22.json`).
- New prices rounded UP: 0.50 below 100 EGP, 1 EGP below 1,000, 5 EGP above.
- Owner-fixed prices (Keef elmosafer): cardamom 5g 29, saffron 5g 35, cardamom 30g 99, saffron 30g 129, cardamom 12×5g 359, saffron 12×5g 368, cardamom 10×30g 969, saffron 10×30g 1170.

### Applied
- 1,185 variants in 1,180 products updated in Shopify.
- **Excluded by owner (not changed):** AlBaik meals, Lusine, Altazaj Meals, all Almarai juices (Mixed Fruit, Mango & Grape, Apple, Mango with Mix Fruit, Orange, Pomegranate, Citrus Mix, Mix Berry).
- **Skipped – price changed in Shopify after the 22 Oct snapshot (17):** tasali spicy small, nescafe arabiana saffron 3g, lays spicy 60g, time candy, Cake bar 7 days chocolate, Chocolate Paste, Saudi Indomie baladi chicken (single + 5 pc), Marie Biscuits, abu kass rice 5kg, Borgat Gummy bumble bear, Miaw Miaw BBQ, saudi Bison 250ml, bumb bubble gum strawberry, Ringo hazelnut wafer, quaker white oats 500g, golden potato spicy 65g.
- **Skipped – renamed products (3):** millionaire corn curls, Fine Rabea Leaf Tea 400, toffo deemah salted caramel.
- **Failed – product suspended/draft in Shopify (11):** Al Ameed coffee range (see `price_change_2026-10-23_failed.json`).
- Group % used: 22/18/16/15/2 → weighted average increase ≈ 16.5% (target 17.92%).
