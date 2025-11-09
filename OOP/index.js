const persona = {
  nombre: "John",
  edad: 30,
  direccion: {
    calle: "Av Insurgentes 187",
    ciudad: "CDMX"
  },
  saludar () {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
};
console.log(persona);

persona.saludar();

persona.telefono = "555-555-5555";

console.log(persona.telefono)

persona.despedir = () => {
  console.log("Adios")
}

persona.despedir();

console.log(persona);

delete persona.telefono;
delete persona.despedir;

console.log(persona)