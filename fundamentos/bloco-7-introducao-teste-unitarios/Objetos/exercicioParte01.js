const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const NameDestin = order.order.delivery.deliveryPerson;
  const endereco = order.address;
  return `Olá ${NameDestin}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R.${endereco.street}, N°${endereco.number}, AP:${endereco.apartment}`;
}

// console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  let MudaName = order.name = 'Luiz Andrade';
  const pizzas = Object.keys(order.order.pizza);
  let drinks = order.order.drinks.type = 'Guarana Antárdida';
  let tot = order.payment = 50;
  return `Olá ${MudaName}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${tot}`;
}

console.log(orderModifier(order));