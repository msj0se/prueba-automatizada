# Documentación sobre las pruebas automatizadas

Emelyn Del Carmen José, 2022-1806.

## Prueba 1

La prueba 1 se ejecuta correctamente y los botones funcionan como deberían.

A continuación, el flujo de la prueba:

1. Se utiliza Selenium WebDriver para abrir una instancia del navegador Chrome y navegar a la página principal del sitio web https://listindiario.com/.

2. Se espera a que se cargue la página y se localiza el botón de inicio de sesión/subscripción.

3. Se captura una screenshot de la página en este punto.

4. Se intenta cerrar un posible anuncio que pueda aparecer en la página.

5. Se hace clic en el botón de inicio de sesión.

6. Se captura otra screenshot después de hacer clic en el botón de inicio de sesión.

7. Se espera a que se abra una nueva ventana o pestaña para la página de inicio de sesión.

8. Se cambia el controlador al nuevo manejador de ventana (página de inicio de sesión).

9. Se verifica si la URL actual corresponde a la página de inicio de sesión.

10. Si es así, se realiza una serie de acciones: se captura una screenshot, se completan los campos de nombre, apellido y correo electrónico, se hace clic en el botón de registro y se captura otra screenshot.

11. Se espera un tiempo para que se complete el proceso de registro.

12. Finalmente, se cierra el navegador al finalizar la prueba.

## Prueba 2

La prueba 2 se ejecutó correctamente, algunos anuncios pueden irrumpir el funcionamiento pero aún así cumple su cometido.

A continuación, el flujo de la prueba:

1. Se utiliza Selenium WebDriver para abrir una instancia del navegador Chrome y navegar a la página principal del sitio web https://listindiario.com/.

2. Se espera a que se cargue la página y se localiza el botón de suscripción.

3. Se captura una screenshot de la página en este punto.

4. Se intenta cerrar un posible anuncio que pueda aparecer en la página.

5. Se hace clic en el botón de suscripción.

6. Se captura otra screenshot después de hacer clic en el botón de suscripción.

7. Se espera a que se abra una nueva ventana o pestaña para la página de suscripción.

8. Se cambia el controlador al nuevo manejador de ventana (página de suscripción).

9. Se localiza el campo de entrada de correo electrónico y se completa con una dirección de correo electrónico de ejemplo.

10. Se captura una screenshot después de completar el campo de correo electrónico.

11. Se localiza y se hace clic en el botón de enviar para confirmar la suscripción.

12. Se captura otra screenshot después de confirmar la suscripción.

13. Se espera un tiempo para permitir que el proceso de confirmación se complete.

## Prueba 3

La prueba 3 es simple y su funcionamiento es el correcto, no presentó inconvenientes.

A continuación, el flujo de la prueba:

1. Se utiliza Selenium WebDriver para abrir una instancia del navegador Chrome y navegar a la página principal del sitio web https://listindiario.com/.

2. Se captura una screenshot de la página en este punto.

3. Se intenta cerrar un posible anuncio que pueda aparecer en la página.

4. Se espera un breve período de tiempo.

5. Se espera a que se cargue la sección de titulares en la página.

6. Se captura otra screenshot después de que se haya cargado la sección de titulares.

7. Se selecciona el titular de un artículo haciendo clic en él.

8. Se captura una screenshot después de hacer clic en el titular del artículo.

9. Se espera un breve período de tiempo.

## Prueba 4

La prueba 4 fue efectiva, no se encontraron errores, su funcionamiento fue el correcto y sus botones son funcionales.

A continuación, el flujo de la prueba:

1. Se abre una instancia del navegador Chrome y se navega a la página principal del sitio web https://listindiario.com/.

2. Se captura una screenshot de la página en este punto.

3. Se espera un breve período de tiempo.

4. Se intenta cerrar un posible anuncio que pueda aparecer en la página.

5. Se espera otro breve período de tiempo.

6. Se localiza y hace clic en el botón de búsqueda en la barra de navegación.

7. Se captura una screenshot después de hacer clic en el botón de búsqueda.

8. Se espera otro breve período de tiempo.

9. Se localiza el campo de entrada de búsqueda y se escribe la palabra "Elecciones".

10. Se captura una screenshot después de ingresar el término de búsqueda.

11. Se espera otro breve período de tiempo.

12. Se localiza y hace clic en el botón de búsqueda para realizar la búsqueda.

13. Se captura una screenshot después de hacer clic en el botón de búsqueda.

14. Se espera a que se carguen los resultados de la búsqueda.

15. Se captura una screenshot después de cargar los resultados de la búsqueda.

16. Se selecciona uno de los resultados de la búsqueda haciendo clic en él.

17. Se espera a que se cargue la página del detalle del resultado seleccionado.

18. Se captura una screenshot después de cargar la página del detalle del resultado seleccionado.

19. Se espera un breve período de tiempo adicional.

## Prueba 5

La prueba 5 se ejecutó correctamente, los botones funcionan como deberían.

A continuación, el flujo de la prueba:

1. Se abre una instancia del navegador Chrome y se navega a la página principal del sitio web https://listindiario.com/.

2. Se captura una screenshot de la página en este punto.

3. Se espera un breve período de tiempo.

4. Se intenta cerrar un posible anuncio que pueda aparecer en la página.

5. Se espera otro breve período de tiempo.

6. Se busca el botón de menú de clasificaciones. Si se encuentra visible, se imprime un mensaje indicando que se ha encontrado el botón; de lo contrario, se imprime un mensaje indicando que no se ha encontrado el botón.

7. Se espera otro breve período de tiempo.

8. Se hace clic en el botón de menú de clasificaciones.

9. Se captura una screenshot después de hacer clic en el botón de menú de clasificaciones.

10. Se espera a que se cargue el menú de clasificaciones.

11. Se selecciona un elemento del menú de clasificaciones (por ejemplo, la clasificación de "Música").

12. Se captura una screenshot después de seleccionar un elemento del menú de clasificaciones.

13. Se intenta cerrar un posible anuncio que pueda aparecer en la página.

14. Se espera a que se carguen los resultados de la clasificación seleccionada.

15. Se captura una screenshot después de cargar los resultados de la clasificación seleccionada.

16. Se selecciona uno de los resultados de la clasificación haciendo clic en él.

17. Se espera a que se cargue la página del detalle del resultado seleccionado.

18. Se captura una screenshot después de cargar la página del detalle del resultado seleccionado.

19. Se espera un breve período de tiempo adicional.
