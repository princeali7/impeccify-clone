export interface Tool {
  name: string;
  desc: string;
  href: string; // e.g. '/px-to-rem-converter'
}

export interface Category {
  id: string;
  label: string;
  desc: string;
  count: number;
  tools: Tool[];
}

export const categories: Category[] = [
  {
    id: 'css-unit',
    label: 'CSS Unit Converters',
    desc: 'Convert between CSS units for responsive web design',
    count: 8,
    tools: [
      { name: 'PX to REM', desc: 'Pixels to rem with adjustable base font size', href: '/px-to-rem-converter' },
      { name: 'REM to PX', desc: 'Rem units back to pixels instantly', href: '/rem-to-px-converter' },
      { name: 'PX to EM', desc: 'Pixels to em based on parent font size', href: '/px-to-em-converter' },
      { name: 'EM to PX', desc: 'Em units back to pixels instantly', href: '/em-to-px-converter' },
      { name: 'PX to VW', desc: 'Pixels to viewport width for fluid layouts', href: '/px-to-vw-converter' },
      { name: 'PX to VH', desc: 'Pixels to viewport height for responsive designs', href: '/px-to-vh-converter' },
      { name: 'PX to Percent', desc: 'Pixels to percentage relative to parent', href: '/px-to-percent-converter' },
      { name: 'PT to PX', desc: 'Points to pixels for print-to-screen', href: '/pt-to-px-converter' },
    ],
  },
  {
    id: 'developer',
    label: 'Developer Tools',
    desc: 'Code converters and utilities for programmers',
    count: 9,
    tools: [
      { name: 'CSS to Tailwind', desc: 'Convert CSS to Tailwind utility classes', href: '/css-to-tailwind-converter' },
      { name: 'CSS to SCSS', desc: 'Flat CSS to nested SCSS with variables', href: '/css-to-scss-converter' },
      { name: 'YAML to JSON', desc: 'YAML and JSON bidirectional converter', href: '/yaml-converter' },
      { name: 'CSV to SQL', desc: 'CSV data to SQL INSERT statements', href: '/csv-to-sql-converter' },
      { name: 'Chmod Calculator', desc: 'Linux file permissions with interactive toggles', href: '/chmod-calculator' },
      { name: 'Base Converter', desc: 'Binary, octal, decimal, hexadecimal', href: '/base-converter' },
      { name: 'Bandwidth Calculator', desc: 'Mbps to MBps and download time estimates', href: '/bandwidth-calculator' },
      { name: 'String Case Converter', desc: 'camelCase, snake_case, kebab-case, PascalCase', href: '/string-case-converter' },
      { name: 'Big O Calculator', desc: 'Compare complexities, data structures & sorting cheat sheet', href: '/big-o-calculator' },
    ],
  },
  {
    id: 'color',
    label: 'Color Converters',
    desc: 'Convert between color formats for design and CSS',
    count: 4,
    tools: [
      { name: 'HEX to RGB', desc: 'Hex color codes to RGB values with preview', href: '/hex-to-rgb-converter' },
      { name: 'RGB to HEX', desc: 'RGB color values to hex codes', href: '/rgb-to-hex-converter' },
      { name: 'HEX to HSL', desc: 'Hex colors to HSL for theming', href: '/hex-to-hsl-converter' },
      { name: 'HSL to HEX', desc: 'HSL color values to hex codes', href: '/hsl-to-hex-converter' },
    ],
  },
  {
    id: 'math',
    label: 'Math & Science',
    desc: 'Calculators for physics, chemistry, calculus, and statistics',
    count: 40,
    tools: [
      { name: 'Partial Derivative Calculator', desc: 'Partial derivatives with steps for any function', href: '/partial-derivative-calculator' },
      { name: 'Combined Gas Law Calculator', desc: "PV=nRT, Boyle's, Charles's Law solver", href: '/combined-gas-law-calculator' },
      { name: 'Celsius to Fahrenheit', desc: 'Temperature conversion with reference chart', href: '/celsius-to-fahrenheit-converter' },
      { name: 'Absolute Value Calculator', desc: 'Solve |x|, equations & inequalities with steps', href: '/absolute-value-calculator' },
      { name: 'Radical Calculator', desc: 'Simplify, multiply, divide & convert radicals', href: '/radical-calculator' },
      { name: 'Interval of Convergence Calculator', desc: 'Radius & interval of convergence with ratio test steps', href: '/interval-of-convergence-calculator' },
      { name: 'Harvard Graphing Calculator', desc: 'Plot multiple functions with analysis on HTML5 canvas', href: '/harvard-graphing-calculator' },
      { name: 'Mean Value Theorem Calculator', desc: "Find MVT 'c' values with step-by-step proof", href: '/mean-value-theorem-calculator' },
      { name: 'Rectangular Prism Calculator', desc: 'Volume, surface area, diagonals & 3D visualization', href: '/rectangular-prism-calculator' },
      { name: 'Standard Deviation Calculator', desc: 'Sample & population SD with deviation table & steps', href: '/standard-deviation-calculator-using-mean' },
      { name: 'Inverse Laplace Calculator', desc: 'L⁻¹{F(s)} with steps, table & partial fractions guide', href: '/inverse-laplace-calculator' },
      { name: 'Simplifying Calculator', desc: 'Simplify fractions, radicals & expressions with steps', href: '/simplifying-calculator' },
      { name: "Newton's Method Calculator", desc: 'Find roots with Newton-Raphson iteration & steps', href: '/newtons-method-calculator' },
      { name: 'Center of Mass Calculator', desc: 'Point masses & standard shapes in 2D and 3D', href: '/center-of-mass-calculator' },
      { name: 'Complex Number Calculator', desc: 'Add, multiply, divide & find roots of complex numbers', href: '/complex-calculator' },
      { name: 'Electron Configuration Calculator', desc: 'All 118 elements with orbital diagrams & notation', href: '/electron-configuration-calculator' },
      { name: 'Critical Numbers Calculator', desc: 'Find critical points & classify max/min with steps', href: '/critical-numbers-calculator' },
      { name: 'Recursive Formula Calculator', desc: 'Generate sequence terms from recursive definitions', href: '/recursive-formula-calculator' },
      { name: 'RREF Calculator', desc: 'Reduced row echelon form with step-by-step Gauss-Jordan', href: '/reduced-row-echelon-form-calculator' },
      { name: 'Factoring Trinomials Calculator', desc: 'Factor ax²+bx+c with AC method step-by-step', href: '/factoring-trinomials-calculator' },
      { name: 'Factor by Grouping Calculator', desc: 'Factor 4-term polynomials and trinomials by grouping', href: '/factor-by-grouping-calculator' },
      { name: 'Significant Figures Calculator', desc: 'Count sig figs and round to any number of sig figs', href: '/sig-fig-calculator' },
      { name: 'Unit Rate Calculator', desc: 'Price per unit comparison and best value finder', href: '/unit-rate-calculator' },
      { name: 'Eigenvalue Calculator', desc: '2x2 eigenvalues, eigenvectors & characteristic polynomial', href: '/eigenvalue-calculator' },
      { name: 'Fast Calculator', desc: 'Clean instant online calculator with calculation history', href: '/fast-calculator' },
      { name: "Charles's Law Calculator", desc: 'V1/T1 = V2/T2 gas law solver with unit conversions', href: '/charles-law-calculator' },
      { name: 'Dilation Calculator', desc: 'Scale factor, center & dilated coordinates with steps', href: '/dilation-calculator' },
      { name: 'Directional Derivative Calculator', desc: 'Gradient, rate of change & max direction for functions', href: '/directional-derivative-calculator' },
      { name: 'Trapezoid Calculator', desc: 'Area, perimeter, midsegment & height with formulas', href: '/trapezoid-calculator' },
      { name: 'Parallelogram Calculator', desc: 'Area, perimeter, diagonals & angles from sides or vertices', href: '/parallelogram-calculator' },
      { name: 'Fraction Exponent Calculator', desc: 'Fractional powers with step-by-step radical conversion', href: '/fraction-exponent-calculator' },
      { name: 'Trinomial Calculator', desc: 'Factor, expand, evaluate & find roots of trinomials', href: '/trinomial-calculator' },
      { name: 'Sampling Distribution Calculator', desc: 'Mean, standard error, z-score & probability for samples', href: '/sampling-distribution-calculator' },
      { name: 'Rounding Calculator', desc: 'Round to decimal places, sig figs, fractions with 5 methods', href: '/rounding-calculator' },
      { name: 'Law of Sines Calculator', desc: 'Solve triangles with AAS, ASA, SSA & ambiguous case', href: '/law-of-sines-calculator' },
      { name: 'Law of Cosines Calculator', desc: 'Solve SAS & SSS triangles with step-by-step work', href: '/law-of-cosines-calculator' },
      { name: 'Asymptote Calculator', desc: 'Find vertical, horizontal & oblique asymptotes', href: '/asymptote-calculator' },
      { name: 'Normal Distribution Calculator', desc: 'Z-scores, probabilities & bell curve percentiles', href: '/normal-distribution-calculator' },
      { name: 'Laplace Transform Calculator', desc: 'Transform table, properties & inverse examples', href: '/laplace-transform-calculator' },
      { name: 'Moment of Inertia Calculator', desc: 'I-beam, rectangle, circle & mass moment of inertia', href: '/moment-of-inertia-calculator' },
    ],
  },
  {
    id: 'education',
    label: 'Education Tools',
    desc: 'Grade calculators and academic tools for students',
    count: 4,
    tools: [
      { name: 'Easy Grade Calculator', desc: 'Enter questions right/wrong and get your grade instantly', href: '/easy-grade-calculator' },
      { name: 'Class Grade Calculator', desc: 'Weighted categories, letter grade & final exam needed', href: '/class-grade-calculator' },
      { name: 'High School GPA Calculator', desc: 'Weighted & unweighted GPA with AP, Honors & cumulative', href: '/highschool-gpa-calculator' },
      { name: 'Final Grade Calculator', desc: 'Find what you need on the final exam to pass or get your target grade', href: '/final-grade-calculator' },
    ],
  },
  {
    id: 'food',
    label: 'Food & Nutrition',
    desc: 'Calorie and macro calculators for popular restaurants',
    count: 4,
    tools: [
      { name: 'Chipotle Nutrition Calculator', desc: 'Calories and macros for Chipotle meals', href: '/chipotle-nutrition-calculator' },
      { name: 'Starbucks Calorie Calculator', desc: 'Calories in custom Starbucks drinks', href: '/starbucks-calorie-calculator' },
      { name: 'Panda Express Calorie Calculator', desc: 'Calories & macros for Bowl, Plate & Bigger Plate', href: '/panda-express-calorie-calculator' },
      { name: 'Pizza Dough Calculator', desc: "Baker's percentage recipe for any pizza style", href: '/pizza-dough-calculator' },
    ],
  },
  {
    id: 'business',
    label: 'Business & Finance',
    desc: 'Website cost, ROI, and traffic estimators',
    count: 8,
    tools: [
      { name: 'Website Cost Calculator', desc: 'Exact website design cost with feature toggles', href: '/website-cost-calculator' },
      { name: 'Website ROI Calculator', desc: 'Return on investment and payback period', href: '/website-roi-calculator' },
      { name: 'Website Traffic Calculator', desc: 'Estimate traffic from SEO and paid ads', href: '/website-traffic-calculator' },
      { name: 'Gold Calculator', desc: 'Scrap gold value by weight, karat & spot price', href: '/gold-calculator' },
      { name: 'Bank Statement Converter', desc: 'PDF text to CSV, Excel, QIF, OFX - no upload needed', href: '/bank-statement-converter' },
      { name: 'PTO Calculator', desc: 'Accrual tracking, balance projection & cash value', href: '/pto-calculator' },
      { name: 'Gross Margin Calculator', desc: 'Income statement with gross, EBIT & net margin', href: '/gm-income-calculator' },
      { name: 'Dave Ramsey Retirement Calculator', desc: '15% rule, compound interest & 4% withdrawal for retirement', href: '/dave-ramsey-retirement-calculator' },
    ],
  },
  {
    id: 'gaming',
    label: 'Gaming Calculators',
    desc: 'Value calculators and tools for popular Roblox games',
    count: 7,
    tools: [
      { name: 'Grow a Garden Calculator', desc: 'Plant values, mutations & pet weight for GAG Roblox', href: '/grow-a-garden-calculator' },
      { name: 'Point Buy Calculator', desc: 'D&D 5e ability scores with 27-point buy system', href: '/point-buy-calculator' },
      { name: 'Blox Fruit Calculator', desc: 'Fruit values, trade helper & tier list for Blox Fruits', href: '/blox-fruit-calculator' },
      { name: 'Nether Calculator', desc: 'Overworld to Nether coordinate converter for Minecraft', href: '/nether-calculator' },
      { name: 'Minecraft Stack Calculator', desc: 'Items to stacks, storage planning & build presets', href: '/minecraft-stack-calculator' },
      { name: 'Schedule 1 Calculator', desc: 'Product value, mixing multipliers & profit for Schedule I', href: '/schedule-1-calculator' },
      { name: 'Pokemon Catch Rate Calculator', desc: 'Catch probability with all ball types & status conditions', href: '/pokemon-catch-rate-calculator' },
    ],
  },
  {
    id: 'sports',
    label: 'Sports Calculators',
    desc: 'Stats calculators for baseball, softball, and cricket',
    count: 3,
    tools: [
      { name: 'Batting Average Calculator', desc: 'BA, OBP, SLG, OPS for baseball, softball & cricket', href: '/batting-average-calculator' },
      { name: 'Passer Rating Calculator', desc: 'NFL & NCAA QB passer rating with tier classification', href: '/passer-rating-calculator' },
      { name: 'VDOT Calculator', desc: 'Running fitness score, training paces & race predictions', href: '/vdot-calculator' },
    ],
  },
  {
    id: 'fitness',
    label: 'Fitness & Strength',
    desc: 'Powerlifting calculators and fitness tracking tools',
    count: 5,
    tools: [
      { name: 'DOTS Calculator', desc: 'Powerlifting DOTS score with age adjustment', href: '/dots-calculator' },
      { name: 'RPE Calculator', desc: 'Estimate 1RM from RPE, reps, and weight', href: '/rpe-calculator' },
      { name: 'Steps to Miles Calculator', desc: 'Convert steps to distance, calories & time', href: '/steps-to-miles-calculator' },
      { name: 'TDEE Calculator', desc: 'Total daily energy expenditure with BMR, macros & calorie targets', href: '/tdee-calculator' },
      { name: 'Creatine Water Calculator', desc: 'Creatine dosage & water intake by body weight', href: '/creatine-water-calculator' },
    ],
  },
  {
    id: 'construction',
    label: 'Construction Calculators',
    desc: 'Material estimators for roofing, siding, and building projects',
    count: 12,
    tools: [
      { name: 'Board and Batten Calculator', desc: 'Boards, battens, furring strips & cost estimate', href: '/board-and-batten-calculator' },
      { name: 'Rafter Calculator', desc: 'Length, pitch, birdsmouth cuts & material count', href: '/rafter-calculator' },
      { name: 'Sand Calculator', desc: 'Cubic yards, tons & bags needed for any project', href: '/sand-calculator' },
      { name: 'Carpet Installation Cost Calculator', desc: 'Material, labor & pad cost for any room or whole house', href: '/carpet-installation-cost-calculator' },
      { name: 'Glass Weight Calculator', desc: 'Weight by glass type, shape, thickness & shelf load', href: '/glass-weight-calculator' },
      { name: 'Crushed Stone Calculator', desc: 'Tons, cubic yards & bags for driveways, paths & drainage', href: '/crushed-stone-calculator' },
      { name: 'Home Addition Cost Calculator', desc: 'Estimate room addition cost by type, size & region', href: '/home-addition-cost-calculator' },
      { name: 'KW to Amps Calculator', desc: 'Convert kilowatts to amps for single phase, 3-phase & DC', href: '/kw-to-amps-calculator' },
      { name: 'Conduit Fill Calculator', desc: 'NEC code EMT, PVC, IMC, RMC wire fill checker', href: '/conduit-fill-calculator' },
      { name: 'Brick Calculator', desc: 'Bricks, mortar & sand needed for any wall project', href: '/brick-calculator' },
      { name: 'Truss Calculator', desc: 'Roof truss dimensions, loads & cost for 8 truss types', href: '/truss-calculator' },
      { name: 'Window Installation Cost Calculator', desc: 'Window replacement costs by type, frame & region', href: '/window-installation-cost-calculator' },
    ],
  },
  {
    id: 'lifestyle',
    label: 'Lifestyle & Astrology',
    desc: 'Astrology tools and lifestyle calculators',
    count: 3,
    tools: [
      { name: 'Transit Chart Calculator', desc: 'Planetary transits to natal chart with aspect interpretations', href: '/transit-chart-calculator' },
      { name: 'Pluto Time Calculator', desc: 'Days elapsed on Pluto and all solar system planets', href: '/pluto-time-calculator' },
      { name: 'North Node Calculator', desc: 'Find your soul purpose & nodal axis by birth date', href: '/north-node-calculator' },
    ],
  },
  {
    id: 'home',
    label: 'Home & Property',
    desc: 'Cost estimators for home and yard projects',
    count: 4,
    tools: [
      { name: 'Tree Removal Cost Calculator', desc: 'Estimate by size, species, condition & location', href: '/tree-removal-cost-calculator' },
      { name: 'Price Per Square Foot Calculator', desc: 'Home value, rent & commercial price per sq ft solver', href: '/price-per-square-foot-calculator' },
      { name: 'Board Foot Calculator', desc: 'Lumber & log board feet with 15 wood species pricing', href: '/board-foot-calculator' },
      { name: 'Metal Roof Cost Calculator', desc: '9 materials, gauge options, labor rates & 30-year ROI', href: '/metal-roof-cost-calculator' },
    ],
  },
  {
    id: 'agriculture',
    label: 'Agriculture',
    desc: 'Yield estimators and farming calculators',
    count: 1,
    tools: [
      { name: 'Corn Yield Calculator', desc: 'Estimate bu/acre by kernel count or ear weight method', href: '/corn-yield-calculator' },
    ],
  },
  {
    id: 'unit',
    label: 'Unit Converters',
    desc: 'General purpose unit and format conversions',
    count: 7,
    tools: [
      { name: 'PX to CM Converter', desc: 'Pixels to centimeters with adjustable DPI', href: '/px-to-cm-converter' },
      { name: 'CGPA to Percentage', desc: 'CGPA to percentage using the x9.5 formula', href: '/cgpa-to-percentage-converter' },
      { name: 'Audiobook Speed Calculator', desc: 'Adjusted listen time & hours saved at any playback speed', href: '/audiobook-speed-calculator' },
      { name: 'Japanese Name Converter', desc: 'Convert English names to Japanese Katakana & Hiragana', href: '/japanese-name-converter' },
      { name: 'Speech Time Calculator', desc: 'Words to minutes with adjustable speaking pace', href: '/speech-time-calculator' },
      { name: 'Gematria Calculator', desc: 'Calculate gematria values across 9 cipher systems', href: '/gematria-calculator' },
      { name: 'Wind Chill Calculator', desc: 'NWS wind chill with frostbite risk & clothing advice', href: '/wind-chill-calculator' },
    ],
  },
];

// Flat lookup: slug (without leading /) → { tool, category }
export const toolsBySlug: Record<string, { tool: Tool; category: Category }> = {};
for (const cat of categories) {
  for (const tool of cat.tools) {
    const slug = tool.href.replace(/^\//, '');
    toolsBySlug[slug] = { tool, category: cat };
  }
}
