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

                return objeto.id

            } catch (error) {
                console.log(error)
            }
        }

        async getById(id) {
            try {
                let fileRead = await fs.promises.readFile(this.file, 'utf-8');

                let fileParsed = JSON.parse(fileRead);

                let objetoId = fileParsed.find(producto => producto.id == id ? producto : null);

                return objetoId;

            } catch (error) {
                console.log(error)
            }
        }

        async getAll() {
            try {
                let fileRead = await fs.promises.readFile(this.file, 'utf-8');
                let fileParsed = JSON.parse(fileRead);

                    return fileParsed;

            } catch (error) {
                console.log(error)
            }
        }

        async deleteById(id) {
            {
                try {

                    let fileRead = await fs.promises.readFile(this.file, 'utf-8');
                    let fileParsed = JSON.parse(fileRead);

                    fileParsed = fileParsed.filter(producto => producto.id != id ? producto : null);

                    await fs.promises.writeFile(this.file, JSON.stringify(fileParsed));

                    return fileParsed;

                } catch (error) {
                    console.log(error)
                }


            }
        }

        async deleteAll() {
            try {
                let fileRead = await fs.promises.readFile(this.file, 'utf-8');
                let fileParsed = JSON.parse(fileRead);

                fileParsed = [];

                await fs.promises.writeFile(this.file, JSON.stringify(fileParsed));

                return fileParsed;

            } catch (error) {
                console.log(error)
            }
        }
    }

module.exports = Contenedor;