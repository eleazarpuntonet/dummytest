# Dummytest
Proyecto de prueba para obtar por el cargo de Desarrollador Web


## Installing

*Clonar el repositorio
https://github.com/eleazarpuntonet/dummytest.git

*Ingresar al directorio donde se descargo el repositorio
cd /'repositorio'

*Instalar dependencias
npm install

*Ejecutar servidor de desarrollo
ng serve

*Una vez terminada la instalacion de dependencias y ejecutada la compilacion de desarrollo, navegar
hasta la ruta `http://localhost:4200/`

## APP-ID unavailable
En caso de que los llamados a la API de dummyapi.io arroje algun error, seguir los siguientes pasos:

*Generar una nueva APP-ID en dummyapi.io
*Copiar la nueva APP-ID generada
*Localizar el archivo 'dummytest/src/app/services/dummyservice.service.ts'
*Sobreescribir la variable 'this.appId' con la nueva APP-ID copiada anteriormente
*Ejecutar nuevamente `ng serve` para levantar de nuevo el servidor de desarrollo