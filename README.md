# GRUPO-C8-68-FT-MERN

Titulo de Proyecto: NCGAMES

Descripción de Proyecto: El proyecto es un ecommerce de videojuegos.

Stack/Tecnologías
    Backend:
      "axios": "^1.1.3",
    "bcrypt": "^5.1.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "jsonwebtoken": "^8.5.1",
    "mongodb": "^4.11.0",
    "mongoose": "^6.7.2",
    "morgan": "^1.10.0",
    "nodemailer": "^6.8.0"
    
    Frontend:
      "@reduxjs/toolkit": "^1.9.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.1.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.39.5",
    "react-icons": "^4.6.0",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.4.3",
    "react-scripts": "5.0.1",
    "react-slick": "^0.29.0",
    "slick-carousel": "^1.8.1",
    "styled-components": "^5.3.6",
    "web-vitals": "^2.1.4"      
    
Integrantes del equipo
  Team leader: Ignacio Rocha - https://github.com/ignacio19975 - https://www.linkedin.com/in/ignacio-rocha/
  
  Frontend: 
    Aria - https://github.com/AriaGT,
    Gloria jisseth Cuevas - https://github.com/GloriaCuba - https://www.linkedin.com/in/jisseth-cuevas/
    y Fabian Romano - https://github.com/fabianeromano.
  
  Backend: 
    María Belén Manterola (Belu) - https://github.com/belmant - https://www.linkedin.com/in/belmant/,
    Cristian - https://github.com/CristianSRR126
    y Francisco Jimenez - https://github.com/FranJBDev
    
  UI/UX: 
    Milagros Silva - https://www.linkedin.com/in/milagros-silva-b4747a1b9/.
    
  Testing:
    Jesus Eduardo Quintero - https://www.linkedin.com/in/jesuseduardoquintero/.

Link del Deploy: http://ncgames.ml

Rutas de Backend (in process)

/user/register POST - recibe un objeto { "user": "correo", "pass": "contraseña" } y crea un nuevo usuario en la base de datos

/user/login POST - recibe un objeto { "user": "correo", "pass": "contraseña" } y revisa si coincide con un usuario y contraseña en la base de datos

/user/allusers GET - Devuelve un array con los todos los ids, usuarios y contraseñas de la base de datos

/games GET - Devuelve un array con todos los juegos del 2022. Opcionalmente puede recibir las querys:

               search: Una o varias palabras separadas por el signo + o espacio. Ejemplos.
               /games?search=pokemon+go
               /games?search=walking+dead
               el tamaño minimo de las palabras es de dos letras. Ejemplo /games?search=ab

               platforms: Uno o varios numeros separados por comas que representan las plataformas:
                1: Xbox One, 4: PC, 5: macOS, 6: Linux, 7: Nintendo Switch,
                10: Wii U, 11: Wii, 14: Xbox 360, 16: PlayStation 3,
                18: Playstation 4, 19: PS Vita, 27: PlayStation,
                186: Xbox Series S/X, 187: Playstation 5.
               Por ejemplo /games?platforms=1,4,15

               dates: dos fechas separadas por coma que representan un rango, backend devolvera un array de juegos

/gamebyid
/categories
/publishers
/platforms
/bestsellers
