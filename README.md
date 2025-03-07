## URL:

https://diego26194.github.io/Challenge_Arido_Software/

## Descripcion:

Este proyecto es una aplicación web construida con React y Material UI que permite visualizar, buscar y gestionar publicaciones de la API pública JSONPlaceholder. En la página principal, los usuarios pueden ver el título y un fragmento de cada publicación, agregar nuevas, y editarlas o eliminarlas mediante un menú desplegable. Al hacer clic en una publicación, se redirige a una página de detalles donde se muestra el contenido completo, el autor y los comentarios. Además, la barra de herramientas superior permite regresar a la página principal.

## Tecnologías utilizadas:

React con Vite
Material UI para el diseño
React Router para la navegación
Axios para el consumo de la API
JSONPlaceholder como API de dato


## Instalación y ejecución local

### Clona el repositorio:

  ► git clone https://github.com/tu-usuario/tu-repositorio.git
  
### Ingresa al directorio del proyecto:

  ► cd tu-repositorio

### Instala las dependencias:

(Asegúrate de tener Node.js instalado. Si no lo tienes, puedes descargarlo desde " https://nodejs.org/es " )

  ► npm install

### Instala Vite en el proyecto:

Si no has configurado Vite, instálalo con el siguiente comando:

  ► npm create vite@latest

### Instala Material UI, Axios y React Router:

Ejecuta los siguientes comandos para instalar las dependencias necesarias:

  ► npm install @mui/material @mui/icons-material axios react-router-dom

### Inicia la aplicación en modo desarrollo:

 ► npm run dev
  
Este comando a parte de inicializar la app mostrara la URL para visualizar la pagina

# Notas
Este proyecto utiliza la API pública estática JSONPlaceholder para obtener y mostrar publicaciones, comentarios y autores. Debido a que JSONPlaceholder es una API de prueba, los datos no son persistentes. Esto significa que, aunque los usuarios puedan agregar nuevos posts, al volver a cargar la página o navegar a otras vistas, los cambios no se conservan y los datos se restablecen a los valores predeterminados proporcionados por la API.

### Problemas conocidos:

1- No se encuentran los autores ni los comentarios al agregar un nuevo post: Cuando se agrega un nuevo post, el autor y los comentarios correspondientes no existen en la API estática, por lo que al intentar cargar esos datos, se genera un error en la consola y no se muestran los detalles del post correctamente. Este problema ocurre porque la API no permite la creación dinámica de estos datos asociados (usuarios y comentarios).

2- Los cambios no son persistentes: Dado que la API no mantiene un estado persistente, al navegar o recargar la página, las publicaciones agregadas o eliminadas por el usuario no permanecen. Esto es debido a que los datos se restablecen con los valores predeterminados de la API cada vez que se realiza una nueva solicitud.

### Soluciones y mejoras planeadas:

Para mejorar la funcionalidad y la persistencia de los datos, se planea implementar una API propia conectada a una base de datos, como MongoDB o PostgreSQL, que permita almacenar y recuperar publicaciones, comentarios y usuarios en tiempo real. Con esta mejora, los datos creados, editados o eliminados se mantendrán incluso después de recargar la página o navegar entre vistas, y se podrá asociar correctamente el autor y los comentarios de cada publicación, eliminando los errores actuales y garantizando una gestión adecuada de la información.
