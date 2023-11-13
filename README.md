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
1. Instalar Cypress en global: npm install -g cypress
2. En la carpeta local del proyecto Ghost ir a el directorio cypress\e2e y copiar los siguientes archivos de las pruebas que se encuentran en el directorio Cypress\cypress\e2e de este repositorio: dashboard.cy.js, draft posts.cy.js, explore.cy.js, members.cy.js, pages.cy.js, posts.cy.js, published.cy.js, scheduled posts.cy.js, tags.cy.js y viewsite.cy.js.
3. Iniciar Cypress en modo GUI para la configuración inicial a través del comando: cypress open.
4. Hacer click en Add project y seleccionar la carpeta del directorio del proyecto donde está Ghost.
5. En la ventana Welcome to Cypress, seleccionar E2E testing.
6. Seleccione el navegador Chrome y haga click Start E2E Testing in Chrome.
7. Aparecerá una ventana como la siguiente:
   ![image](https://github.com/froblesl/PA---Grupo-Latinos/assets/124463884/cb90e4e9-ad35-48ad-b9e4-42858ec9e615)

#### Ejecución 
1. Ejecutar una a una cada una de las pruebas especificadas en los archivos como aparece en la imagen anterior.
