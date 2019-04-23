# justo.mx

Este es la respuesta a la prueba usando Node.js

## Instalacion

Primero clonamos el proyecto y entramos a la carpeta creada
```
git clone https://github.com/jorshhh/justo.mx.git
```

Instalamos las dependencias usando npm
```
npm install 
```

Para correrlo existe un script que inicia npm y lo deja corriendo en el fondo. Necesita que la librería "forever" este instalada de forma global: https://www.npmjs.com/package/forever
```
npm run start 
```
Y un script para terminar el proceso
```
npm run stop 
```

## Uso


El servicio recibe un request POST con un payload del siguiente tipo:

```
{
	"products": "VOUCHER, TSHIRT, VOUCHER, VOUCHER, TSHIRT, TSHIRT, MUG"	
}
```
Y con un header de tipo  Content-Type: application/json

Regresa un JSON similar al siguiente:

```
{
    "products": [
        {
            "product": "VOUCHER",
            "quantity": 3,
            "total": 10
        },
        {
            "product": "TSHIRT",
            "quantity": 3,
            "total": 57
        },
        {
            "product": "MUG",
            "quantity": 1,
            "total": 7.5
        }
    ],
    "total": 74.5
}
```