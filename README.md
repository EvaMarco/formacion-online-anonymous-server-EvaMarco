# Ejercicio 4 formación online Adalab por Eva Marco
![EvaMarco](images/eva&#32;logo.png)

## Finalidad del ejercicio.

Este ejercicio se trata de una web de una sola página realizada exclusivamente con HTML, CSS y JS. Los requisitos para realizar esta web eran:
- Hay que usar el HTML tal y como se entrega.
- La imagen de fondo ocupará el 100% del espacio disponible (alto y ancho).
- Botones y enlaces tienen que tener, al menos, un efecto de hover.
- El botón de menú NO sustituye al botón de cerrar.
- Hay que aplicar a la imagen de fondo por CSS un degradado vertical.
- El botón de menú mostrará el menú principal y habrá que plantear cómo se va a mostrar, habrá que elegir una forma de transición concreta.
- La fuente del titular es Roboto Slab.
- La fuente del pie es Arial.
- El color de fondo del menu es #402929 al 92% de opacidad.
- El título siempre tiene que ir en dos líneas.
- La columna de contenido principal:
    - de 320 a 767px tiene 30px de margen a izquierda y derecha.
    - a partir de 768px tiene 60px de margen y un ancho máximo de 990px.
    - siempre tiene que quedar centrada.
- El pie siempre tiene que quedar abajo de la pantalla.
- No hay que usar React ni preprocesadores CSS.

## Paso a paso

Pese a ser un ejercicio sencillo voy a plantear como he ido realizándolo. 

1. Al tener el html ya marcado lo primero ha sido ver tipo de transición iba a realizar para que apareciera y desapareciera el menú. 
   1. Me he decidido por una transición de la posición en Y.
   2. He creado las funciones en JS para activar esa transición tanto para abrir como para cerrar. 
2. Una vez tenía la funcionalidad hecha me he metido a trabajar con los estilos. 
3. He comenzado a trabajar desde la versión móvil. 
4. He marcado el nav como absoluto para poder moverlo. 
5. A la página le he dado display flex, con el page__main como flex-grow 1 para que el footer sea stiky.
6. Cuando la versión móvil ya estaba lo más proxima a la imagen de ejemplo he comenzado con las media queries. 
7. En las distintas media queries he fijado el ancho del page wrapper y el tamaño de las fuentes.
8. Por último he aplicado unos sencillos efectos de hover a ambos botones. 

## Para poder trabajar sobre este proyecto. 

Puedes clonarlo en este [enlace](https://github.com/EvaMarco/formacion-online-anonymous-server-EvaMarco).

