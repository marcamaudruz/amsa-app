const users = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'User',
      email: 'user@nextmail.com',
      password: '123456',
    },
  ];
  
const tickets = [
    {
      titre: 'Ticket du seed 1',
      categorie: 'repas client',
      desc: 'nouveau ticket repas client',
      affaire: '259100',
      prix: '132',
      status: 'attente',
      img: 'ticket.png',
      user: 'EBC',
    },
    {
        titre: 'Ticket du seed 2',
        categorie: 'repas client',
        desc: 'nouveau ticket repas client',
        affaire: '149100',
        prix: '324',
        status: 'attente',
        img: 'ticket.png',
        user: 'JOP',
    },
];

  module.exports = {
    users,
    tickets,
  };