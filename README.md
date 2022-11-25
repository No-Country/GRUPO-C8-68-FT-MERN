# GRUPO-C8-68-FT-MERN

Este proyecto trata sobre un ecommerce de videojuegos

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
