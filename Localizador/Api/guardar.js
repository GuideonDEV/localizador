export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    console.log('Ubicación recibida:', data);

    // Aquí podrías guardar en una base de datos o enviarlo por correo/Telegram/Discord/etc.
    
    return res.status(200).json({ status: 'OK' });
  } else {
    return res.status(405).end(); // Método no permitido
  }
}
