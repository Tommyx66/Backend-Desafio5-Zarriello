const users = [
    { email: 'adminCoder@coder.com', password: 'adminCod3r123', role: 'admin' },
    // Agregar más usuarios si es necesario
  ];
  
  function login(req, res) {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
  
    if (user) {
      req.session.user = user; // Almacenamos el usuario en la sesión
      res.redirect('/api/products/welcome');
    } else {
      res.status(401).send('Credenciales incorrectas');
    }
  }
  
  function logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        console.error('Error al cerrar sesión:', err);
        res.status(500).send('Error al cerrar sesión');
      } else {
        res.redirect('/api/products/login');
      }
    });
  }
  
  module.exports = {
    login,
    logout,
  };
  