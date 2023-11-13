# MISW4103-Pruebas Automatizadas

|Nombre            |Correo                   |
|----------------- |-------------------------|
|Camilo Peña       |cc.pena2@uniandes.edu.co |
|Diego Martin      |da.martin2@uniandes.edu.co |
|Francisco Robles  |f.roblesl@uniandes.edu.co|
|Geraldine Gómez   |gs.gomezm1@uniandes.edu.co|

## Kraken

### Pasos de instalación y ejecución de pruebas

#### Prerequisitos
1. Usar la versión 16.14.2 de Node.Js
2. Tener instalado Android Studio
3. En las propiedades de Android Studio tener instalado:
	a. Android SDK Platform-Tools
	b. Android SDK Build-Tools
	c. Android SDK Tools

4. Configurar las siguientes rutas en PATH: 
	a. C:\Users\***\AppData\Local\Android\Sdk\platform-tools
	b. C:\Users\***\AppData\Local\Android\Sdk\tools
	c. C:\Users\***\AppData\Local\Android\Sdk\build-tools\VERSION
	d. C:\Users\***\AppData\Local\Android\Sdk

5. Configurar la siguiente variable ambiental:
	JAVA_HOME: C:\Program Files\Android\Android Studio\jre

#### Instalación y set-up de Kraken 
1. Ir a la carpeta de trabajo (GHOST)
2. Instalar Kraken en global: npm install kraken-node -g
4. Instalar Kraken en local: npm install kraken-node
5. Instalar Appium en global: npm install -g appium
6. Puede verificar que todo haya quedado instalado usando el comando kraken-node doctor

#### Ejecución 
Ejecutar Kraken a través del comando: npx kraken-node run.

## Cypress

### Pasos de instalación y ejecución de pruebas

#### Prerequisitos
1. Usar la versión 18.18.0 de Node.Js
2. Usar la versión 5.69.0 de Ghost

#### Instalación y set-up de Cypress
1. Ir a la carpeta de trabajo (GHOST)
2. Instalar Kraken en global: npm install kraken-node -g
4. Instalar Kraken en local: npm install kraken-node
5. Instalar Appium en global: npm install -g appium
6. Puede verificar que todo haya quedado instalado usando el comando kraken-node doctor

#### Ejecución 
Ejecutar Cypress a través del comando: cypress run --headless.
