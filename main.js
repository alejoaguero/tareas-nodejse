    const fs = require('fs');

    class Contenedor {

        constructor(file) {
            this.file = file
        }

        async save(objeto) {
            try {
                let fileRead = await fs.promises.readFile(this.file, 'utf-8');
                let fileParsed = JSON.parse(fileRead);

                objeto.id = fileParsed[fileParsed.length - 1].id + 1;

                fileParsed.push(objeto);

                await fs.promises.writeFile(this.file, JSON.stringify(fileParsed));

                return

            } catch (error) {
                console.log(error)
            }
        }

        async getById(id) {
            try {
                let fileRead = await fs.promises.readFile(this.file, 'utf-8');

                let fileParsed = JSON.parse(fileRead);

                let objetoId = fileParsed.find(producto => producto.id == id ? producto : null);

            } catch (error) {
                console.log(error)
            }
        }

        async getAll() {

        }
    }
    const contenedor = new Contenedor('productos.txt');

    contenedor.save({ title: 'Producto 1', price: 100 })
        .then(id => console.log(id));