export interface Oportunidad {
    _id?: string;
    
    IDEmpleado: string;
  
    /* End User Company Information */
    companyName: string;
    country: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
  
    /* End User Contact Information */
    clientName: string;
    clientLastName: string;
    title: string;
    phone: string;
  
    /* Opportunity Information */
    expectedCoseDate: Date;
    CreationDate: Date;
    currency: string;
    projectDescripcion: string;
    numberLicense: number;
    products: string;
    price: number;
    Descuento: number;
    TotalProfit: number;
  
    status: 'Registrado' | 'Fase 1' | 'Fase 2' | 'Cierre' | 'Fallido';
  
    Evidence: {
      nombre: string;
      descripcion: string;
      feedback: string;
      fechaCreacion: Date;
      note: number;
      isRequire?: boolean;
      _id?: string;
    }[];
  
    createdAt?: string;
    updatedAt?: string;
  }