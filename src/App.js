import { Notifiyer } from './Notifiyer.js';
import { Timer } from './Timer.js';

const App = {
  async start() {
    try {
      const time = 60 * 60
      Timer.init(time)
      // await Notifiyer.init()
      // Notifiyer.notify({
      //   title: "Hora do Post",
      //   body: "Crie algum conteudo!!"
      // })

    } catch (err) {
      console.log(err.message)
    }
  }
}

export { App }