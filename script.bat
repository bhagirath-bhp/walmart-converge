@echo off

:: Create main directories
mkdir src
mkdir src\assets
mkdir src\assets\images
mkdir src\assets\styles
mkdir src\components
mkdir src\components\common
mkdir src\components\dashboard
mkdir src\components\map
mkdir src\components\products
mkdir src\components\containers
mkdir src\components\trucks
mkdir src\components\drivers
mkdir src\components\admin
mkdir src\pages
mkdir src\pages\Home
mkdir src\pages\ProductManagement
mkdir src\pages\ContainerManagement
mkdir src\pages\TruckManagement
mkdir src\pages\DriverManagement
mkdir src\pages\AdminDashboard
mkdir src\pages\MapView
mkdir src\hooks
mkdir src\contexts
mkdir src\services
mkdir src\services\api
mkdir src\services\static
mkdir src\utils
mkdir src\config
mkdir src\data
mkdir src\tests

:: Create placeholder files
echo. > src\App.js
echo. > src\index.js
echo. > src\reportWebVitals.js
echo. > public\index.html
echo. > public\favicon.ico
echo. > .gitignore
echo. > package.json
echo. > README.md

:: Create static data files
echo [] > src\data\products.json
echo [] > src\data\containers.json
echo [] > src\data\trucks.json
echo [] > src\data\drivers.json

echo Folder structure created successfully.
