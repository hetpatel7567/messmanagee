

export async function handler(req, res) {
    const groceries = [
      { name: 'Rice', quantity: 20 },
      { name: 'Sugar', quantity: 10 },
    ];
  
    res.status(200).json(groceries);
  }
  