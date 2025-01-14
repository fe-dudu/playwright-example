# Vercel > Build & Development Settings
- **Framework Preset**: Other
- **Build Command**: pnpm playwright:report
- **Output directory**: playwright-report

# Vercel > Setting > Git > Ignored Build Step
- **Only build if there are changes in a forder**: `git diff HEAD^ HEAD --quiet -- ./tests`