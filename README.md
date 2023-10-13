
<!DOCTYPE html>
<html>
<head>
    <title>IngWeb</title>
</head>
<body>
    <h1>Login</h1>
    <p>
Para el login que se creo en el frontend utilizamos los guard, Los guards son un conjunto de interfaces en Angular que se utilizan para controlar la navegación y proteger las rutas en una aplicación Angular. Están diseñados para permitir o denegar el acceso a ciertas rutas en función de ciertas condiciones.
      
Existen 4 tipos de estos guard: 

CanActivate: Este guard se utiliza para determinar si una ruta puede ser activada. Se verifica antes de que se cargue una ruta y se utiliza comúnmente para autorizar a un usuario antes de acceder a una vista o componente específico.

CanActivateChild: Similar a CanActivate, pero se aplica a las rutas secundarias anidadas dentro de una ruta principal.

CanDeactivate: Se utiliza para determinar si una ruta puede ser desactivada. Puede ser útil para realizar comprobaciones antes de salir de una página o para mostrar confirmaciones al usuario antes de dejar una página sin guardar cambios.

CanLoad: Este guard se utiliza para decidir si se puede cargar un módulo de forma perezosa. Es útil para evitar que se carguen módulos completos hasta que se cumplan ciertas condiciones.

Dentro de esta primera entraga unicamente se utilizo el CanActivate y se implemento a traves de  las interfaces correspondientes y es necesario definir la lógica en las funciones que proporcionan. Luego, puedes agregar estos guards a las rutas de tu aplicación en el archivo de enrutamiento (app-routing.module.ts) para controlar el acceso a diferentes partes de tu aplicación.

</p>
</body>
</html>
