# Arriendo de Vehiculos

Aplicacion Nuxt con Prisma para gestionar usuarios, clientes, vehiculos, tipos de vehiculo y arriendos.

## Requisitos previos

- Node.js
- npm
- MySQL o MariaDB
- XAMPP, si se usa MariaDB/MySQL local desde ese entorno

## Instalacion

Instala las dependencias del proyecto:

```bash
npm install
```

## Variables de entorno

Copia el archivo de ejemplo y crea tu archivo local:

```bash
cp .env.example .env
```

En Windows PowerShell tambien puedes usar:

```powershell
Copy-Item .env.example .env
```

Configura `DATABASE_URL` con los datos reales de tu base de datos y define una clave larga para `NUXT_SESSION_PASSWORD`.

## Prisma

Genera el cliente de Prisma:

```bash
npx prisma generate
```

Este proyecto no incluye migraciones en `prisma/migrations`, por lo que la preparacion inicial de la base de datos se hace con:

```bash
npx prisma db push
```

## Ejecutar el proyecto

Levanta el servidor de desarrollo:

```bash
npm run dev
```

## Verificaciones

Revisa TypeScript:

```bash
npm run typecheck
```

Revisa espacios o problemas de formato antes de commit:

```bash
git diff --check
```
