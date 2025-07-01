# KomprApp

## Descripción

KomprApp nació para facilitar la organización familiar en las compras, permitiendo crear y compartir listas de la compra en tiempo real. Así se evita la confusión de qué se ha comprado y qué no, ahorrando tiempo y evitando llamadas innecesarias.

## Tecnologías

- Laravel 12 (Backend API REST)  
- PHP 8.2  
- MySQL 8  
- React 18  
- Next.js 14 (Frontend)  
- Docker (Entorno de desarrollo)

---

## Instalación

### Backend (Laravel)

1. Clona el repositorio  
   ```bash
   git clone https://github.com/tuusuario/komprapp.git
   cd komprapp
   ```
2. Copia el archivo de entorno y configura la base de datos:  
   ```bash
   cp .env.example .env
   # Edita .env con tus datos de DB
   ```
3. Instala dependencias:  
   ```bash
   composer install
   ```
4. Ejecuta migraciones:  
   ```bash
   php artisan migrate
   ```
5. Levanta el backend con Docker:  
   ```bash
   docker-compose up -d
   ```
   o con servidor PHP integrado:  
   ```bash
   php artisan serve
   ```

### Frontend (Next.js)

1. Entra a la carpeta frontend:  
   ```bash
   cd frontend
   ```
2. Instala dependencias:  
   ```bash
   npm install
   ```
3. Arranca en modo desarrollo:  
   ```bash
   npm run dev
   ```

---

## Uso

- Backend: http://localhost:8000  
- Frontend: http://localhost:3000  
- El frontend consume la API REST del backend para mostrar y modificar datos en tiempo real.

---

## Buenas prácticas

- No subir archivos sensibles: siempre usar `.env` y mantenerlo en `.gitignore`.  
- Usar Docker para garantizar entornos iguales en cualquier máquina.  
- Versionar el código con Git y subirlo a GitHub.  
- Mantener las dependencias actualizadas y eliminar código muerto.  
- Documentar funciones y APIs cuando crezcan.

---

## .gitignore

Asegúrate de ignorar:

```
/vendor/
/node_modules/
.env
npm-debug.log
yarn-error.log
/storage/*.key
/public/storage
/public/hot
Homestead.yaml
Homestead.json
/.vagrant
.phpunit.result.cache
.phpactor.json
auth.json
/.idea/
```

---

## Contacto

Elias Robles Ruiz  
[LinkedIn](https://www.linkedin.com/in/eliasrrobles/)  
eliasrobles834@gmail.com
