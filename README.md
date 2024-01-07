<h2>Descripción del Proyecto</h2>
    <p>Se propone implementar un sistema que permita gestionar las oportunidades que se registren dentro de la empresa, con el objetivo de darle seguimiento a estas oportunidades registradas por los canales, proporcionando recomendaciones, mejoras prácticas e incentivos.</p>

  <h3>Explicación Core</h3>
    <p>El Core del sistema está enfocado en la efectividad de cierre de oportunidades por parte de los empleados de cada canal. Se busca dar seguimiento a estas oportunidades registradas para tener una visión clara del desempeño de los canales y los empleados.</p>

  <h3>Registro de Oportunidades</h3>
    <ul>
        <li>Únicamente se puede llevar a cabo siendo un representante del canal y que el canal esté registrado dentro de la empresa.</li>
        <li>Se llena un formulario con información de la empresa, contacto y tipo de oportunidad.</li>
        <li>Se deben subir evidencias periódicas sobre el avance de la oportunidad.</li>
    </ul>

  <h3>Validación de Oportunidades</h3>
    <ul>
        <li>Filtrar oportunidades registradas por fecha y estado para identificar oportunidades en una única fase por X tiempo.</li>
        <li>Agrupar oportunidades por canal; si un canal registrado no tiene oportunidades, mostrar "Sin oportunidades".</li>
    </ul>

  <h3>Para Cada Oportunidad</h3>
    <ul>
        <li>Determinar si la oportunidad debe cerrarse debido a falta de actividad en un periodo de 90 días.</li>
        <li>Subir evidencias de avance de las oportunidades, por ejemplo, una demostración con duración de X semanas y el feedback obtenido.</li>
        <li>Dependiendo de la oportunidad, la evidencia y el resultado, se otorgará una puntuación que podrá ser canjeada por incentivos.</li>
    </ul>

  <h3>Sistema de Puntajes</h3>
    <table>
        <thead>
            <tr>
                <th>Por Cantidad de Licencias</th>
                <th>Puntos</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Oportunidad de 10 a 99 Licencias</td>
                <td>10pts</td>
            </tr>
            <tr>
                <td>De 100 a 299 Licencias</td>
                <td>15pts</td>
            </tr>
            <tr>
                <td>De 300 a 499 Licencias</td>
                <td>20pts</td>
            </tr>
            <tr>
                <td>Más de 500 a 999 Licencias</td>
                <td>25pts</td>
            </tr>
            <tr>
                <td>Más de 1k</td>
                <td>40pts</td>
            </tr>
        </tbody>
    </table>

  <table>
        <thead>
            <tr>
                <th>Por Evidencia</th>
                <th>Puntos</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Insuficiente</td>
                <td>0ptos</td>
            </tr>
            <tr>
                <td>No satisfactorio</td>
                <td>10ptos</td>
            </tr>
            <tr>
                <td>Satisfactorio</td>
                <td>30ptos</td>
            </tr>
            <tr>
                <td>Muy Satisfactorio</td>
                <td>60ptos</td>
            </tr>
            <tr>
                <td>Excelentes evidencias</td>
                <td>100ptos</td>
            </tr>
        </tbody>
    </table>

  <h2>Alcance del Proyecto</h2>
    <p>El alcance del proyecto está enfocado en cubrir las funcionalidades básicas pero necesarias tanto para el tema administrativo como para los usuarios de los canales.</p>

  <h3>Para los Usuarios que son Parte de los Canales</h3>
    <ul>
        <li>Subir, actualizar oportunidades.</li>
        <li>Realizar peticiones de descuento y cambio de fase en base a las evidencias presentadas.</li>
        <li>Poder canjear sus puntos por incentivos.</li>
    </ul>

  <h3>Para los Supervisores</h3>
    <ul>
        <li>Revisar oportunidades en base a Usuarios, fechas o Estados.</li>
        <li>Consultar el estado de la oportunidad.</li>
        <li>Revisar las evidencias subidas sobre las oportunidades.</li>
    </ul>

  <h3>Lado Administrativo</h3>
    <ul>
        <li>Gestionar a los usuarios registrados (Consultar, crear, modificar, eliminar).</li>
        <li>Gestionar los canales (Consultar, crear, modificar, eliminar).</li>
        <li>Gestionar el tema de productos que se encuentran dentro de la página.</li>
        <li>Dar de baja oportunidades inactivas.</li>
    </ul>
<h1> Explicación de la defensa </h1>
<h2>Inicio:</h2>
    <ul>
        <li>Inicio del proceso.</li>
    </ul>

   <h2>Iniciar Sesión:</h2>
    <ul>
        <li>El usuario inicia sesión con su cuenta de empresa.</li>
    </ul>

   <h2>Rellenar Datos:</h2>
    <ul>
        <li>El usuario proporciona los datos necesarios, como los dos parámetros de fecha.</li>
    </ul>

   <h2>Enviar Parámetros:</h2>
    <ul>
        <li>Se envían los parámetros de fecha al backend.</li>
    </ul>

  <h2>Validar Parámetros:</h2>
    <ul>
        <li>El backend valida los parámetros recibidos.</li>
        <li>[Si los parámetros no son válidos, el proceso se detiene y se muestra un mensaje de error.]</li>
    </ul>

   <h2>Consulta Usuarios de la Empresa:</h2>
    <ul>
        <li>Se realiza una consulta a la base de datos para obtener la lista de usuarios asociados a la empresa.</li>
    </ul>

  <h2>Consulta Oportunidades por Usuario:</h2>
    <ul>
        <li>Para cada usuario obtenido en el paso anterior:</li>
        <li>Se realiza una consulta para obtener las oportunidades asociadas a ese usuario.</li>
    </ul>

  <h2>Calcular Profit:</h2>
    <ul>
        <li>Para cada oportunidad obtenida en el paso anterior:</li>
        <li>Se realiza una consulta para obtener el profit asociado a esa oportunidad.</li>
    </ul>

  <h2>Mostrar Resultados:</h2>
    <ul>
        <li>Se presentan los resultados al usuario, que pueden incluir la lista de usuarios de la empresa, las oportunidades de cada empleado y el profit asociado a cada oportunidad.</li>
    </ul>

  <h2>Fin:</h2>
    <ul>
        <li>Fin del proceso.</li>
    </ul>
