#!/bin/bash

echo "==================================="
echo " CREATE EDU SYS DEMO STRUCTURE"
echo "==================================="

# Assets
mkdir -p src/assets/images/hero
mkdir -p src/assets/images/city
mkdir -p src/assets/images/school
mkdir -p src/assets/images/ward
mkdir -p src/assets/images/logo
mkdir -p src/assets/styles

# Components
mkdir -p src/components

touch src/components/ModuleCard.tsx
touch src/components/StatCard.tsx

# Layout
mkdir -p src/layouts

touch src/layouts/MainLayout.tsx
touch src/layouts/MainLayout.scss

# Pages
mkdir -p src/pages/Home

touch src/pages/Home/index.tsx
touch src/pages/Home/style.scss
touch src/pages/Home/Hero.tsx
touch src/pages/Home/Hero.scss
touch src/pages/Home/QuickStat.tsx
touch src/pages/Home/ModuleSection.tsx
touch src/pages/Home/WardSection.tsx

mkdir -p src/pages/Dashboard
touch src/pages/Dashboard/index.tsx

mkdir -p src/pages/Ward
touch src/pages/Ward/index.tsx

mkdir -p src/pages/School
touch src/pages/School/index.tsx

mkdir -p src/pages/Teacher
touch src/pages/Teacher/index.tsx

mkdir -p src/pages/Facility
touch src/pages/Facility/index.tsx

mkdir -p src/pages/GIS
touch src/pages/GIS/index.tsx

mkdir -p src/pages/Alert
touch src/pages/Alert/index.tsx

mkdir -p src/pages/Report
touch src/pages/Report/index.tsx

# Router
mkdir -p src/router
touch src/router/index.tsx

# Mock
mkdir -p src/mock

touch src/mock/city.ts
touch src/mock/ward.ts
touch src/mock/school.ts

# Theme
mkdir -p src/theme
touch src/theme/colors.ts

# Global styles
touch src/assets/styles/global.scss

echo ""
echo "==================================="
echo " PROJECT STRUCTURE CREATED"
echo "==================================="
echo ""

find src -print