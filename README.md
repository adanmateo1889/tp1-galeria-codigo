# Galería Código

**Trabajo Práctico Grupal 1 · Proyecto web en equipo · HTML, CSS y JavaScript**

## Descripción

**Galería Código** es un sitio grupal con estética de museo. Cada integrante se presenta como una obra dentro de una misma colección. La propuesta busca que los cinco perfiles tengan una identidad visual uniforme, pero que cada retrato pueda inspirarse en una obra o corriente artística distinta.

La portada presenta al equipo, permite acceder a todos los perfiles y ofrece una visita guiada realizada con JavaScript. Además, el proyecto contiene navegación interna, una bitácora, diseño adaptable y una interacción dinámica en cada perfil, unificada bajo el concepto de iluminación de obra.

## Integrantes

> Completar antes de entregar y convertir cada usuario en un enlace a su perfil de GitHub.

| Integrante | GitHub | Página |
|---|---|---|
| Adán Mateo | [adanmateo1889](https://github.com/adanmateo1889) | `adan.html` |
| Integrante 2 | Completar | `integrante2.html` |
| Integrante 3 | Completar | `integrante3.html` |
| Integrante 4 | Completar | `integrante4.html` |
| Integrante 5 | Completar | `integrante5.html` |

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Google Fonts
- Git y GitHub
- GitHub Desktop
- Vercel

## Estructura de archivos

```text
tp1-galeria-codigo-v2.2/
├── index.html
├── adan.html
├── integrante2.html
├── integrante3.html
├── integrante4.html
├── integrante5.html
├── bitacora.html
├── README.md
├── GUIA-GITHUB-DESKTOP.md
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── profile-spotlight.js
├── img/
│   ├── adan-retrato.png
└── docs/
    └── boceto-referencia.png
```

## Identidad visual

### Concepto

El sitio simula una sala de museo: pared cálida, marcos dorados, placas de obra, luces superiores y una paleta bordó/dorada. Todos los retratos se muestran dentro de contenedores con **relación 4:5**, por lo que visualmente todos los cuadros conservan el mismo tamaño aunque las imágenes originales tengan dimensiones diferentes.

### Paleta

| Uso | Hexadecimal |
|---|---|
| Bordó principal | `#4B1015` |
| Bordó secundario | `#651922` |
| Dorado | `#C9A45E` |
| Dorado claro | `#E6CF9D` |
| Marfil | `#F1E4CA` |
| Pared | `#E8D4B2` |
| Tinta | `#28150F` |

### Tipografías

Google Fonts:

- **Cormorant Garamond**: títulos, nombres de obras y placas.
- **Montserrat**: navegación, textos y botones.

### Iconografía

Se utilizan símbolos simples integrados al diseño (`◫`, flechas y elementos decorativos) para no depender de una biblioteca externa de iconos en esta primera versión.

## JavaScript

### Portada — `js/main.js`

**Entrar al museo:** activa una iluminación más intensa de la sala y desplaza la página hasta la colección.

**Comenzar recorrido:** recorre los cinco cuadros uno por uno. En cada clic destaca una obra, la lleva al centro de la pantalla y actualiza un texto indicando el integrante visitado.

**Menú móvil:** abre y cierra la navegación en pantallas pequeñas y actualiza `aria-expanded`.

### Perfiles individuales — `js/profile-spotlight.js`

Los cinco perfiles utilizan las mismas dos interacciones para mantener una experiencia uniforme dentro de la galería.

**Encender foco de obra:** activa un haz de luz desde la parte superior, un halo dorado alrededor del marco y mayor brillo sobre el retrato. El botón cambia a **Apagar foco de obra** mientras el efecto está activo.

**Cambiar iluminación de la sala:** modifica el ambiente general del perfil. Cada clic recorre tres estados: **sala neutra**, **sala cálida** y **sala nocturna**.

Ambas funciones se ejecutan de forma independiente en cada página y mantienen la temática de museo en los cinco integrantes.

## Diseño responsive

La hoja `css/styles.css` utiliza un enfoque adaptable con los tres breakpoints solicitados:

- `@media (min-width: 400px)`
- `@media (min-width: 900px)`
- `@media (min-width: 1200px)`

Comportamiento de la colección:

- menos de 400 px: 1 cuadro por fila;
- desde 400 px: 2 cuadros;
- desde 900 px: 3 cuadros;
- desde 1200 px: los 5 cuadros en una misma fila.

Todos usan la misma proporción `aspect-ratio: 4 / 5` y `object-fit: cover` para evitar diferencias de tamaño y desbordes.

## Capturas de pantalla

Las capturas finales deben agregarse cuando el equipo haya completado los cinco perfiles y probado la versión publicada. Se recomienda incluir como mínimo:

- portada en escritorio;
- un perfil individual;
- vista cercana a 400 px;
- vista cercana a 900 px;
- vista de 1200 px o superior.

> En esta primera base todavía no se incluyen como evidencia final porque los cuatro perfiles restantes están pendientes de completar.

## Bitácora

La bitácora está en `bitacora.html` y se accede desde el menú principal. La base registra las primeras decisiones, pero durante el TP el equipo debe agregar los problemas, cambios y soluciones que realmente ocurran.

## Uso de inteligencia artificial

### Herramientas utilizadas en esta primera base

- **ChatGPT (OpenAI), GPT-5.6 Sol**, utilizado como asistente para interpretar la consigna, organizar la estructura del proyecto, proponer código inicial, revisar la adaptación responsive y preparar documentación.
- **Generación de imágenes integrada en ChatGPT/OpenAI**, utilizada para desarrollar el concepto visual y generar el retrato artístico inicial de Adán a partir de una fotografía aportada por el propio integrante.
- En esta etapa, el uso realizado por Adán fue mediante un **plan pago**.

### Criterio de los retratos

La idea del equipo es que cada integrante pueda aportar una fotografía y transformarla en un retrato inspirado en una obra, época o corriente artística. En el caso de Adán se utilizó un retrato de inspiración clásica/romana con corona de laurel, vestimenta roja y marco dorado.

Los prompts se orientaron a:

- conservar rasgos reconocibles de la persona;
- adaptar vestuario, iluminación y ambientación a la referencia artística;
- mantener formato vertical apto para un cuadro de museo;
- evitar agregar datos personales innecesarios;
- lograr una presentación visual coherente entre los cinco integrantes.

Los demás integrantes podrán decidir si utilizan una fotografía personal, un avatar o una ilustración, de acuerdo con su preferencia de privacidad.

### Autoría y revisión del equipo

La IA se utilizó como asistencia y punto de partida. El equipo debe revisar el HTML, CSS y JavaScript, probarlo, comprender su funcionamiento y modificarlo según sus decisiones. También debe registrar en Git los cambios hechos por cada integrante. Ningún resultado generado se considera incorporado de manera definitiva hasta ser revisado y adaptado por el grupo.

### Experiencia previa

> Completar antes de entregar indicando brevemente qué experiencia tenía cada integrante con IA y si utilizó herramientas gratuitas o pagas.

## Publicación

### Vercel

`PENDIENTE: pegar aquí la URL publicada`

### Repositorio grupal

`PENDIENTE: pegar aquí la URL del repositorio público`

## Evolución

Esta base corresponde al TP Grupal 1. En próximas iteraciones se podrán mejorar las animaciones, personalizar más cada sala, incorporar nuevas interacciones y ampliar la documentación sin perder la estructura común del proyecto.

## Checklist antes de entregar

- [ ] Los cinco nombres están completos.
- [ ] Los cinco perfiles enlazan correctamente.
- [ ] Cada integrante tiene ciudad, edad, 4 habilidades, 3 películas y 3 discos.
- [ ] Cada integrante incorporó o aprobó su retrato/avatar.
- [ ] Se probaron 400 px, 900 px y 1200 px.
- [ ] No hay errores en la consola del navegador.
- [ ] La bitácora refleja problemas y cambios reales.
- [ ] Todos los integrantes tienen commits visibles.
- [ ] El README contiene las capturas finales.
- [ ] El repositorio es público.
- [ ] La URL de Vercel está en este README.
