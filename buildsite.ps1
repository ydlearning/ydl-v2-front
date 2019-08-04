Write-Host -ForegroundColor Yellow "Build site - script";

Write-Host -ForegroundColor Yellow "1: Run lint";
pnpm run lint;

Write-Host -ForegroundColor Yellow "2: Run build";
pnpm run build;

Write-Host -ForegroundColor Yellow "3: Generate documentation";
vuese gen;