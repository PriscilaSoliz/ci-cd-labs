# Módulo CI/CD - Laboratorios

Repositorio de las prácticas y laboratorios del módulo de CI/CD.

## Contenido

* **Laboratorio 1:** Primer Pipeline de Integración Continua (configuración básica de GitHub Actions).
* **Laboratorio 2:** Branching, Pull Requests y Ejecución de CI (estrategia de ramas y validación automática de integración).

## Estructura del Proyecto

```text
ci-cd-labs/
├── README.md
├── laboratorio1.md
├── laboratorio2.md
├── app/
│   └── hello.txt
└── .github/
    └── workflows/
        └── pipeline.yml
```

## Flujo de Trabajo (Git Flow / GitHub Flow)
1. Crear una rama de funcionalidad (`feature/*`).
2. Realizar cambios y subirlos al repositorio remoto.
3. Abrir un Pull Request hacia `main`.
4. El pipeline de CI valida automáticamente la integración.
5. Tras la revisión y aprobación, se realiza el Merge a `main`.