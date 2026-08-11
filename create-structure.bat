@echo off
title EDU SYS DEMO

echo ===================================
echo CREATE EDU SYS DEMO STRUCTURE
echo ===================================

:: Assets
mkdir src\assets
mkdir src\assets\images
mkdir src\assets\images\hero
mkdir src\assets\images\city
mkdir src\assets\images\school
mkdir src\assets\images\ward
mkdir src\assets\images\logo
mkdir src\assets\styles

:: Components
mkdir src\components

type nul > src\components\ModuleCard.tsx
type nul > src\components\StatCard.tsx

:: Layout
mkdir src\layouts

type nul > src\layouts\MainLayout.tsx
type nul > src\layouts\MainLayout.scss

:: Pages
mkdir src\pages

mkdir src\pages\Home
type nul > src\pages\Home\index.tsx
type nul > src\pages\Home\style.scss
type nul > src\pages\Home\Hero.tsx
type nul > src\pages\Home\Hero.scss
type nul > src\pages\Home\QuickStat.tsx
type nul > src\pages\Home\ModuleSection.tsx
type nul > src\pages\Home\WardSection.tsx

mkdir src\pages\Dashboard
type nul > src\pages\Dashboard\index.tsx

mkdir src\pages\Ward
type nul > src\pages\Ward\index.tsx

mkdir src\pages\School
type nul > src\pages\School\index.tsx

mkdir src\pages\Teacher
type nul > src\pages\Teacher\index.tsx

mkdir src\pages\Facility
type nul > src\pages\Facility\index.tsx

mkdir src\pages\GIS
type nul > src\pages\GIS\index.tsx

mkdir src\pages\Alert
type nul > src\pages\Alert\index.tsx

mkdir src\pages\Report
type nul > src\pages\Report\index.tsx

:: Router
mkdir src\router
type nul > src\router\index.tsx

:: Mock
mkdir src\mock
type nul > src\mock\city.ts
type nul > src\mock\ward.ts
type nul > src\mock\school.ts

:: Theme
mkdir src\theme
type nul > src\theme\colors.ts

:: Global style
type nul > src\assets\styles\global.scss

echo.
echo ===================================
echo PROJECT STRUCTURE CREATED
echo ===================================

pause