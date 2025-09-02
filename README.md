<h1 align="center">🎁 Amigo Secreto con JS</h1>
Este proyecto es un pequeño juego de "Amigo Secreto" desarrollado con HTML, CSS y JavaScript. El objetivo es practicar la lógica de programación, manipulación del DOM y arrays en JavaScript.


## Funcionalidades

1. **Agregar amigos**
   - Captura de nombre desde un input.
   - Validación para evitar campos vacíos.
   - Limpieza del input después de agregar.
   - Cada nombre se guarda en un array `amigos` y se muestra en una lista (`<ul>`).

2. **Mostrar la lista de amigos**
   - Recorre el array `amigos` usando un bucle `for`.
   - Cada amigo se muestra como un elemento `<li>` en la lista HTML.
   - La lista se limpia antes de actualizar para evitar duplicados.

3. **Sortear un amigo**
   - Comprueba que el array `amigos` no esté vacío.
   - Genera un índice aleatorio con `Math.random()` y `Math.floor()`.
   - Selecciona un amigo basado en el índice y lo muestra en el elemento `resultado`.

## 💻 Estructura del proyecto
- index.html → Contiene el input, botones y listas.
- style.css → Estilos básicos.
- script.js → Lógica de JavaScript para agregar amigos, mostrar lista y sorteo.
## 🚀  Uso

1. Escribe un nombre en el input y presiona "Añadir".
2. La lista de amigos se actualizará automáticamente.
3. Presiona "Sortear amigo" para seleccionar un nombre aleatorio y mostrarlo en la sección de resultados.

## Tecnologías usadas

- HTML5
- CSS3
- JavaScript (Vanilla)


