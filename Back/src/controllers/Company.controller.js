const Oportunidad = require('../models/Oportunidades');
const User = require('../models/User');
const Company = require ('../models/Company');

const companyCrtl = {};

companyCrtl.AddUser = async (req, res) => {
    const newUser = new Company(req.body)
    console.log(req.body);
    await newUser.save()
    res.send({ message: 'New User Created' });
}

companyCrtl.optenerUsers = async (req, res) => {
    try {
        const NameCP = req.params.company;
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
        const CPemail = req.params.email;
        const pas = req.params.password;

        const company = await Company.findOne({ Identify: CPemail, password: pas });

        if (company) {
            res.json(company);  // Utiliza res.json() para enviar la respuesta como JSON
        } else {
            res.status(404).json({ message: 'No se encontró la compañía con las credenciales proporcionadas.' });
        }
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
                // Recorrer todas las oportunidades del usuario
                for (const oportunidad of oportunidadesUsuario) {
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
        }

        res.json(notas);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};



companyCrtl.promedioNotasEmpleado = async (req, res) => {
    try {
        const NameCP = req.params.company;
        const users = await User.find({ companyName: NameCP });

        const promedioNotasPorEmpleado = {};

        // Recorrer todos los usuarios
        for (const user of users) {
            const iduser = user._id;

            // Encuentra todas las oportunidades para el ID de cada usuario
            const oportunidadesUsuario = await Oportunidad.find({ IDEmpleado: iduser });

            // Filtrar las oportunidades que tienen evidencias con notas
            const oportunidadesConNotas = oportunidadesUsuario.filter(oportunidad => oportunidad.Evidence.some(evidencia => 'note' in evidencia));

            // Calcular el promedio de notas para todas las oportunidades con notas
            const notas = oportunidadesConNotas.flatMap(oportunidad => oportunidad.Evidence.map(evidencia => evidencia.note || 0));
            const promedio = notas.length > 0 ? notas.reduce((a, b) => a + b) / notas.length : null;

            // Consultar el nombre del empleado desde la colección de empleados
            const empleado = await User.findById(iduser);

            // Agregar la información al objeto de promedio de notas por empleado
            if (empleado) {
                const nombreEmpleado = `${empleado.name} ${empleado.lastname}`;

                promedioNotasPorEmpleado[iduser] = {
                    nombreEmpleado,
                    promedio // Promedio general
                };
            }
        }

        res.json(promedioNotasPorEmpleado);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};


companyCrtl.Profits = async (req, res) => {
    try {
      // Obtener todas las oportunidades
      const NameCP = req.params.company;
      const users = await User.find({ companyName: NameCP });
      const Employees = {};
  
      // Utiliza Promise.all para esperar todas las consultas asíncronas
      const oports = await Promise.all(
        users.map(async (user) => {
          const iduser = user._id;
          // Encuentra oportunidades para el ID de cada usuario
          return await Oportunidad.find({ IDEmpleado: iduser });
        })
      );
  
      // Recorremos todas las oportunidades y sumamos directamente por empleado
      oports.forEach((oportunidadesList, index) => {
        const user = users[index];
        const id = user._id;
        const nombreEmpleado = `${user.name} ${user.lastname}`;
        let Sum = 0;
  
        oportunidadesList.forEach((oportunidad) => {
          Sum += oportunidad.TotalProfit;
        });
  
        Employees[id] = {
          nombreEmpleado,
          Sum, // Suma del profit
        };
      });
  
      // Devolver el objeto de promedio de notas por empleado
      res.json(Employees);
    } catch (error) {
      // Manejar errores, por ejemplo, imprimirlos en la consola
      console.error('Error al obtener las ganancias:', error);
      // Enviar una respuesta de error al cliente
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };

  companyCrtl.ProfitsDate = async (req, res) => {
    try {
        const NameCP = req.params.company;
        const startDate = new Date(req.params.startDate);
        const endDate = new Date(req.params.endDate);

        if (isNaN(startDate) || isNaN(endDate)) {
            return res.status(400).json({ message: 'Las fechas proporcionadas no son válidas.' });
          }
      // Obtener todos los usuarios de la empresa
      const users = await User.find({ companyName: NameCP });
      const Employees = {};
  
      // Obtener todas las oportunidades para todos los usuarios en el rango de fechas
      const oports = await Oportunidad.find({
        IDEmpleado: { $in: users.map(user => user._id.toString()) }, // Convertir a String para la comparación
        expectedCoseDate: { $gte: startDate, $lte: endDate }
      });
  
      for (const user of users) {
        const id = user._id.toString(); // Convertir a String para la comparación
        const nombreEmpleado = `${user.name} ${user.lastname}`;
        let Sum = 0;
  
        // Filtrar las oportunidades solo para el usuario actual
        const userOports = oports.filter(oportunidad => oportunidad.IDEmpleado === id);
  
        // Sumar los TotalProfit de todas las oportunidades filtradas
        Sum = userOports.reduce((total, oportunidad) => total + oportunidad.TotalProfit, 0);
  
        Employees[id] = {
          nombreEmpleado,
          Sum // Suma del profit
        };
      }
  
      res.json(Employees);
    } catch (error) {
      console.error('Error al obtener las ganancias:', error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };

  companyCrtl.UserNotas = async (req, res) => {
    try {
        const companyId = req.params.company;
        const userId = req.params.id;

        // Encuentra oportunidades para el ID de usuario específico
        const oports = await Oportunidad.find({ IDEmpleado: userId });

        // Inicializar un arreglo para almacenar las notas
        const notas = [];

        // Recorrer todas las oportunidades del usuario
        for (const oportunidad of oports) {
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

        res.json(notas);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

companyCrtl.ProfitsTotal = async (req, res) => {
    try {
        // Obtener todas las oportunidades
        const NameCP = req.params.company;
        const users = await User.find({ companyName: NameCP });

        let totalProfit = 0;

        // Utiliza Promise.all para esperar todas las consultas asíncronas
        const oports = await Promise.all(
            users.map(async (user) => {
                const iduser = user._id;
                // Encuentra oportunidades para el ID de cada usuario
                const oportunidadesList = await Oportunidad.find({ IDEmpleado: iduser });

                // Sumar el profit de cada oportunidad del empleado
                oportunidadesList.forEach((oportunidad) => {
                    totalProfit += oportunidad.TotalProfit || 0;
                });

                return oportunidadesList;
            })
        );

        // Devolver el profit total de la empresa
        res.json({ totalProfit });
    } catch (error) {
        // Manejar errores, por ejemplo, imprimirlos en la consola
        console.error('Error al obtener las ganancias:', error);
        // Enviar una respuesta de error al cliente
        res.status(500).json({ message: 'Error en el servidor' });
    }
};


module.exports = companyCrtl;