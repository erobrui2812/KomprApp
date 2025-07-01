# Mini documentación de despliegue Komprapp
## ¿Qué hay aquí?
Este proyecto usa Docker para levantar tres servicios principales:

Frontend: la interfaz web que ves, corriendo en el puerto 80.

Backend: la API o servidor de la app, corriendo en el puerto 8000.

Nginx: un servidor web que actúa como “puente” (proxy inverso), que recibe peticiones en los puertos 80 y 8000 y las dirige al frontend o backend según corresponda.

## ¿Cómo funciona?
Cuando visitas http://localhost o http://tu_ip:80, nginx recibe la petición y la manda al frontend (contenedor que escucha en el puerto interno 3000).

Cuando visitas http://localhost:8000, nginx redirige la petición al backend (contenedor que escucha internamente en el puerto 9000).

Los contenedores están en una red interna de Docker, y nginx se comunica con ellos por sus nombres de servicio (por ejemplo komprapp_frontend o komprapp_backend).

## ¿Por qué está así?
Para evitar conflictos de puertos abiertos directamente y centralizar las peticiones HTTP.

Para que desde fuera solo haya que exponer nginx, que maneja todo el tráfico.

Para separar claramente frontend y backend y que puedan escalar o cambiarse sin afectar el otro.

## ¿Qué debes saber para usarlo?
Arranca el proyecto con docker-compose up -d.

El frontend estará disponible en el navegador por defecto en el puerto 80.

El backend estará accesible en el puerto 8000.

Los logs de nginx pueden verse con docker logs -f komprapp_web si hay problemas.

No hace falta tocar la configuración interna salvo que se quiera cambiar la arquitectura o puertos.

## Problemas comunes
Si no responde nada en puerto 8000, puede ser que el backend no esté levantado o no esté escuchando en el puerto correcto.

Si nginx da error al iniciar, puede ser por un error en la configuración (muy raro si no se toca).

Si ves una página de error o default (tipo Apache2 o nginx “It works”), probablemente el proxy no está bien configurado o el contenedor destino no está levantado.