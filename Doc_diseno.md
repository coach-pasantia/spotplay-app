# Titulo: Spotplay

## Overview: 
Spotplay es una nueva compañía de música online que tiene como objetivo proporcionar mejores relaciones con los artistas y fans. 

Su producto es _Spotplay_, una plataforma en la que las personas pueden generar  listas de reproducción para sus artistas favoritos y gustos musicales. 

### Alcance(Scope)
    - La aplicacion tendra acceso para usuarios consumidores, atravez de su registro. 
    - La aplicacion tendra acceso para usuarios editores, para dar mantenimiento a la aplicacion.



#### Casos de uso
DescripciÃ³n...
* El usuario lector puede crear una nueva lista con un nombre dado.
* EL usuario lector puede Obtener las listas de reproduccion de los usuarios.
* Caso de uso 2
* ...

#### Out of Scope (casos de uso No Soportados)
DescripciÃ³n...
* El usuario no puede acceder con cuentas de tercero(google, facebook)
* Caso de uso 2
* ...
---
## Arquitectura

### Diagramas
poner diagramas de secuencia, uml, etc

### Modelo de datos
Poner diseÃ±o de entidades, Jsons, tablas, diagramas entidad relaciÃ³n, etc..

---
## Limitaciones
Lista de limitaciones conocidas. Puede ser en formato de lista.
Ej.
* Llamadas del API tienen latencia X
* No se soporta mas de X llamadas por segundo
---
## Costo
DescripciÃ³n/AnÃ¡lisis de costos
Ejemplo:
"Considerando N usuarios diarios, M llamadas a X servicio/baseDatos/etc"
* 1000 llamadas diarias a serverless functions. $XX.XX
* 1000 read/write units diarias a X Database on-demand. $XX.XX
Total: $xx.xx (al mes/dia/aÃ±o)