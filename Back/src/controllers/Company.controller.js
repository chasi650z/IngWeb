const Oportunidad = require('../models/Oportunidades');
const User = require('../models/User');
const Company = require ('../models/Company');

const companyCrtl = {};

companyCrtl.optenerUsers = async (req, res) => {
    try {
        const NameCP = req.params.company;
        console.log("Hola", req.params.company);
        const users = await User.find({ companyName: NameCP }); 
        res.send(users);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

companyCrtl.optenerUserID = async (req, res) => {
    
    try {
        const NameCP = req.params.companyN;
        const id = req.params.Uid
        const users = await User.find({ companyName: NameCP }); 
        users.forEach(async (user) => {
            if (user.companyName && (await User.findById(id)))
            res.send(user);
        });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: 'Error en el servidor' });
    }

};

companyCrtl.optenerUseremail = async (req, res) => {
    
    try {
        const NameCP = req.params.company;
        const CPemail = req.params.email;
        const users = await User.find({ companyName: NameCP }); 
        users.forEach(async (user) => {
            if (await User.find({ email: CPemail }))
            res.send(user);
        });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: 'Error en el servidor' });
    }

};

companyCrtl.getOportUserID= async (req, res) => {

    try {
        const user = optenerUserID;
        const oportunidades = await Oportunidad.find({IDEmpleado: user});
        res.json(oportunidades);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: 'Error en el servidor' });
    }

};

companyCrtl.getOportComp = async (req, res) => {
        try {
            const NameCP = req.params.company;
            const users = await User.find({ companyName: NameCP });
            // Utiliza Promise.all para esperar todas las consultas asíncronas
            const oports = await Promise.all(users.map(async (user) => {
                const iduser = user._id;
                // Encuentra oportunidades para el ID de cada usuario
                return await Oportunidad.find({ IDEmpleado: iduser });
            }));
            res.json(oports); // Utiliza flat() para aplanar el array multidimensional
        } catch (error) {
            console.error('Error:', error.message);
            res.status(500).json({ message: 'Error en el servidor' });
        }
};

companyCrtl.DeleteUsers = async (req, res) => {

    const user = await User.findByIdAndDelete(req.params.id)
    res.send({message: 'User deleted'})

}

companyCrtl.obtenerNotasDeOportunidades = async (req, res) => {
    try {
        // Obtener todas las oportunidades
        const NameCP = req.params.company;
        const users = await User.find({ companyName: NameCP });

        // Utiliza Promise.all para esperar todas las consultas asíncronas
        const oports = await Promise.all(users.map(async (user) => {
            const iduser = user._id;
            // Encuentra oportunidades para el ID de cada usuario
            return await Oportunidad.find({ IDEmpleado: iduser });
        }));

        // Inicializar un arreglo para almacenar las notas
        const notas = [];

        // Recorrer todas las oportunidades
        for (const oportunidadesUsuario of oports) {
            // Verificar si oportunidadesUsuario es un array y tiene elementos
            if (Array.isArray(oportunidadesUsuario) && oportunidadesUsuario.length > 0) {
                const oportunidad = oportunidadesUsuario[0];
                // Obtener el ID de la oportunidad y del empleado
                const oportunidadId = oportunidad._id;
                const empleadoId = oportunidad.IDEmpleado;

                // Consultar el nombre del empleado desde la colección de empleados
                const empleado = await User.findById(empleadoId);

                // Recorrer las evidencias y obtener las notas
                for (const evidencia of oportunidad.Evidence) {
                    // Verificar si la evidencia tiene la propiedad 'note'
                    if ('note' in evidencia) {
                        // Agregar la información al arreglo de notas
                        notas.push({
                            oportunidadId,
                            empleadoId,
                            nombreEmpleado: `${empleado.name} ${empleado.lastname}`,
                            nota: evidencia.note
                        });
                    }
                }
            }
        }

        // Devolver el arreglo de notas
        res.json(notas);
    } catch (error) {
        // Manejar errores, por ejemplo, imprimirlos en la consola
        console.error('Error al obtener notas:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};


  companyCrtl.promedioNotasEmpleado = async (req, res) => {
    try {
        // Obtener todas las oportunidades
        const NameCP = req.params.company;
        const users = await User.find({ companyName: NameCP });
        
        // Utiliza Promise.all para esperar todas las consultas asíncronas
        const oports = await Promise.all(users.map(async (user) => {
            const iduser = user._id;
            // Encuentra oportunidades para el ID de cada usuario
            return await Oportunidad.find({ IDEmpleado: iduser });
        }));

        // Inicializar un objeto para almacenar el promedio de notas por empleado
        const promedioNotasPorEmpleado = {};

        // Recorrer todas las oportunidades
        for (const oportunidadList of oports) {
            // Verificar si oportunidadList es un array y tiene elementos
            if (Array.isArray(oportunidadList) && oportunidadList.length > 0) {
                // Obtener el ID de la oportunidad y del empleado
                const empleadoId = oportunidadList[0].IDEmpleado;

                // Calcular el promedio de notas para cada oportunidad
                const notas = oportunidadList[0].Evidence.map(evidencia => evidencia.note || 0);
                const promedio = notas.length > 0 ? notas.reduce((a, b) => a + b) / notas.length : null;

                // Consultar el nombre del empleado desde la colección de empleados
                const empleado = await User.findById(empleadoId);

                // Agregar la información al objeto de promedio de notas por empleado
                if (empleado) {
                    const nombreEmpleado = `${empleado.name} ${empleado.lastname}`;

                    // Agregar la información al objeto de promedio de notas por empleado
                    promedioNotasPorEmpleado[empleadoId] = {
                        nombreEmpleado,
                        promedio // Promedio general
                    };
                }
            }
        }
        
        // Devolver el objeto de promedio de notas por empleado
        res.json(promedioNotasPorEmpleado);
    } catch (error) {
        // Manejar errores, por ejemplo, imprimirlos en la consola
        console.error('Error al obtener promedio de notas por empleado:', error);

        // Enviar una respuesta de error al cliente
        res.status(500).json({ message: 'Error en el servidor' });
    }
};








module.exports = companyCrtl;