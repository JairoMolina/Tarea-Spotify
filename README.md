# 🎶 Mi Top 10 de Canciones - Integrado con Spotify 🎶

## Descripción 📌

Este proyecto es una aplicación web que se conecta con la API de Spotify para obtener las 10 canciones más escuchadas por el usuario. La aplicación organiza estas canciones en una cola de prioridad, donde cada canción tiene una categoría de prioridad: **IMPORTANTE** o **NORMAL**.

El usuario puede iniciar sesión con su cuenta de Spotify, ver su top 10 de canciones con portada, artista y enlace directo para escuchar en Spotify, y eliminar canciones de la lista si lo desea.

## 🚀 Tecnologías Utilizadas 

- **HTML**: Estructura de la página web.
- **CSS**: Estilos inspirados en el diseño de Spotify.
- **JavaScript (Vanilla)**: Manejo de la API de Spotify y la lógica de la cola de prioridad.

## 🔥 Características 

✅ Inicio de sesión con Spotify mediante OAuth 2.0.  
✅ Obtención automática del top 10 de canciones del usuario.  
✅ Cola de prioridad con dos niveles: **IMPORTANTE** y **NORMAL**.  
✅ La lista de reproducción utiliza una cola de prioridad para mantener el orden correcto.  
✅ Interfaz moderna inspirada en el diseño de Spotify.  
✅ Opciones para eliminar canciones de la lista.  

## 🔄 Funcionamiento de la Cola de Prioridad 

La lista de reproducción utiliza una **cola de prioridad**, lo que significa que las canciones se almacenan y organizan en función de su prioridad asignada. Las canciones marcadas como **IMPORTANTE** tienen mayor prioridad y aparecen antes en la lista, mientras que las canciones con prioridad **NORMAL** aparecen después.

### 🛠 ¿Cómo funciona?

1. **Asignación de Prioridad:** Cada canción recibe una prioridad de forma automática o determinada por el usuario.  
2. **Ordenamiento en la Cola:** Las canciones **IMPORTANTE** se colocan al inicio de la lista, y las **NORMALES** al final.  
3. **Eliminación de Canciones:** Si una canción se elimina, la lista se reorganiza automáticamente manteniendo el orden de prioridad.  

Este sistema garantiza que las canciones más relevantes para el usuario siempre aparezcan en la parte superior de la lista, respetando el principio de prioridad.

## Propmts Urilizados para la IA

![Captura de pantalla 2025-02-21 001916](https://github.com/user-attachments/assets/3378a013-14e7-4d48-b676-c011f7e745d5)
![Captura de pantalla 2025-02-21 002025](https://github.com/user-attachments/assets/6d6de042-2f63-4f91-81ea-83e3944562ff)
![Captura de pantalla 2025-02-21 194337](https://github.com/user-attachments/assets/bb53086d-a8a4-439b-97d3-56e05642caf8)
