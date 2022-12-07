# primero vamos a definir la imagen padre, la cual va a ser una imagen node, porque react tiene como base a node y necesita node para construir la aplicación.
FROM node:18-alpine

# Luego indicamos el directorio de trabajo
WORKDIR /app

# con esto le estámos indicando que copie el archivo package.json en el directorio de trabajo y el . indica que se copie en la carpeta raiz
COPY package.json .

# Para ejecutar todas las dependencias de proyecto que están en el archivo package.json en una app node ejecutamos npm install
RUN npm install

# COPY . : significa que se copie todos los archivos del directorio actual donde está el archivo Dockerfile 
# El siguiente . significa la ruta de destino de los archivos copiados, es decir la ruta raiz de nuestro directorio de trabajo /app
COPY . .

# luego le indicamos que vamos a exponer un puerto en específico para esta app, las aplicaciones de react construidas con VITE utilizan por defecto el puerto 5173, es por eso que vamos a exponer ese puerto.
EXPOSE 5173

# al final le vamos a dar la instrucción a la terminal de que ejecute la aplicación y como estamos usando una app VITE el comando para ejecutar la app es 'npm run dev'
CMD ["npm", "run", "dev"]