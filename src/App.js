import { Notifiyer } from './Notifiyer.js';

const App = {
  async start() {
    try {
      await Notifiyer.init()
      Notifiyer.notify({
        title: "Hora do Post",
        body: "Crie algum conteudo!!"
      })

    } catch (err) {
      console.log(err.message)
    }
  }
}

export { App }