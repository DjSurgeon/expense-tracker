# Expense-tracker
Expense Tracker es una aplicación CLI diseñada para gestionar gastos personales. Permite a los usuarios agregar, eliminar, actualizar y visualizar sus gastos. Este proyecto es ideal para aprender fundamentos de programación backend en Node.js y para introducirse al uso de bases de datos relacionales como PostgreSQL.

## Objetivos de aprendizaje

- Entender cómo crear una aplicación CLI en Node.js y el manejo de argumentos en línea de comandos.
- Comprender cómo estructurar un proyecto en Node.js con una organización clara de carpetas, es importante comprender cómo Node.js maneja los móduilos y el sistema de archivos.
- Aprender a interactuar con bases de datos relaciones. Entender SQL básico (SELECT, INSERT, UPDATE, DELETE) es necesario para definir el esquema y realizar consultas. Se utilizara PostgreSQL que es un sistema de gestión de bases de datos relacional open-source, famoso por su fiabilidad, escalabilidad y soporte de estandares abiertos.
- Modularizar el código para mejorar la escalabilidad y mantenibilidad. La aplicación debe estructurarse en módulos fbien separados para facilitar escalabilidad y mantenimiento, además de seguir el principio de responsibilidad única. Cada módulo debe tene una función específica: uno para manejar comandos, otro para operaciones de datos y otro para validaciones por ejemplo.
- Manejar errores y validar entradas de usuarios. Se debe implementar un sistema de manejo de errores que cubra casos como archivos no encontrados, datos corruptos, argumentos invalidos y errores de permisos de archivo.

## Configuración del entorno

### Instalación de Node.js

Node.js es el entorno de ejecución para Javascript en el backend.
Trabajaremos sobre la versión 22.16.0(LTS).
`https://nodejs.org/es`

### Instalación de PostgreSQL
PostgreSQL es una base de datos relacional de código abierto.
Trabajaremos sobre la versión 16.9
`https://www.postgresql.org/download/`

### Inicialización del proyecto

Inicializamos el proyecto con `npm init -y` para generar un archivo `package.json`.
Instalamos el módulo `pg` para interactuar con PostgreSQL con `npm install pg`.

### Configuración de la base de datos

Inicializamos el servicio con `sudo service postgresql start`.
Nos conectamos como superusuario `postgtres` con `sudo -u postgres psql`.
```sql
-- Dentro de psql.
SELECT version(); -- Verificamos la version de PostgreSQL.
--  PostgreSQL 16.9 (Ubuntu 16.9-0ubuntu0.24.04.1) on x86_64-pc-linux-gnu, compiled by gcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0, 64-bit
-- Creamos un usuario dedicado.
CREATE USER expense_user WITH PASSWORD '***'
-- Creamos la base de datos del proyecto.
CREATE DATABASE expense_tracker
	OWNER expense_user
	ENCODING 'UTF-8';
GRANT ALL PRIVILEGES ON DATABASE expense_tracker TO expense_user;
```

### Variables de entorno

Creamos un archivo `.env`
```bash
DB_USER=expense_user
DB_PASSWORD=***
DB_HOST=localhost
DB_PORT=5432
DB_NAME=expense_tracker
```
