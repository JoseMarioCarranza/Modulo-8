# Task Manager API

Este es el README para la API de un Task Manager, donde los usuarios pueden registrarse, iniciar sesión y gestionar sus tareas.

## Despliegue

La API está desplegada en: [https://task-manager-lpbi.onrender.com](https://task-manager-lpbi.onrender.com)

### Endpoints Disponibles

#### 1. Registro de Usuario

- **Método:** `POST`
- **URL:** `https://task-manager-lpbi.onrender.com`
- **Descripción:** Registra un nuevo usuario.
- **Parámetros (Form URL Encoded):**
  - `name`: Nombre del usuario.
  - `email`: Correo del usuario.
  - `password`: Contraseña del usuario.

#### 2. Inicio de Sesión

- **Método:** `POST`
- **URL:** `https://task-manager-lpbi.onrender.com/api/users/login`
- **Descripción:** Inicia sesión para obtener un token de acceso (Bearer Token).
- **Parámetros (Form URL Encoded):**
  - `name`: Nombre del usuario.
  - `email`: Correo del usuario.
  - `password`: Contraseña del usuario.

#### 3. Obtener Datos del Usuario

- **Método:** `GET`
- **URL:** `https://task-manager-lpbi.onrender.com/api/users/data`
- **Descripción:** Obtiene los datos del usuario autenticado.
- **Autenticación:** Requiere Bearer Token en el encabezado `Authorization`.

#### 4. Obtener Tareas

- **Método:** `GET`
- **URL:** `https://task-manager-lpbi.onrender.com/api/tareas`
- **Descripción:** Obtiene la lista de tareas del usuario autenticado.
- **Autenticación:** Requiere Bearer Token en el encabezado `Authorization`.

#### 5. Crear Nueva Tarea

- **Método:** `POST`
- **URL:** `https://task-manager-lpbi.onrender.com/api/tareas`
- **Descripción:** Crea una nueva tarea para el usuario autenticado.
- **Parámetros (Form URL Encoded):**
  - `texto`: Descripción de la tarea a crear.
- **Autenticación:** Requiere Bearer Token en el encabezado `Authorization`.

#### 6. Modificar una Tarea

- **Método:** `PUT`
- **URL:** `https://task-manager-lpbi.onrender.com/api/tareas/{id}`
- **Descripción:** Modifica una tarea existente del usuario autenticado.
- **Parámetros (Form URL Encoded):**
  - `texto`: Nueva descripción de la tarea.
- **Autenticación:** Requiere Bearer Token en el encabezado `Authorization`.
- **Nota:** `{id}` corresponde al ID de la tarea a modificar.

#### 7. Eliminar una Tarea

- **Método:** `DELETE`
- **URL:** `https://task-manager-lpbi.onrender.com/api/tareas/{id}`
- **Descripción:** Elimina una tarea existente del usuario autenticado.
- **Autenticación:** Requiere Bearer Token en el encabezado `Authorization`.
- **Nota:** `{id}` corresponde al ID de la tarea a eliminar.

## Autenticación

Esta API utiliza tokens de autenticación (Bearer Tokens) que se obtienen al iniciar sesión en el endpoint de **Inicio de Sesión**. Para acceder a los endpoints protegidos, debes incluir el token en el encabezado `Authorization` 

