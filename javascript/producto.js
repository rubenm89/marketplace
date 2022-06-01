    
    const app = Vue.createApp({
        data() {
            return {                
                id: 1,
                title: "Notebook HP 14-dq2024la",
                description: "Computadora HP orientado para gama media. Procesador Intel® Core™ i3 de 11.ª generación.  Windows 10 Home 64.  Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB . Pantalla de 14 pulgadas.",
                image_url: "https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png",
                factory_url : "https://www.hp.com/ar-es/shop/notebook-hp-14-dq2024la-3v8j6la.html",
                images_url: ["not2.jpg", "not3.jpg"],
                price: "100000",
                cart : 0,                         
                image2: 'not1.jpg',
                image3: 'not2.jpg',

                variedadNotebooks: [
                    {cantidadRam: '8 gb', precio: 100000},
                    {cantidadRam: '16 gb', precio: 125000},
                ],
                
                notebooksCompradas:[]
            }
        },
        methods:{
            addToCart(){
                this.cart +=1
                this.notebooksCompradas.push({nombre: this.title, precio:this.price});
            },  
            cambiarImagen(cambio){
                this.image_url = cambio
            },
            cambiarPrecio(precio){
                this.price = precio;
            }        
        }
    })