import Girafa from '../../assets/girafinha.png'
import Galinha from '../../assets/galinha.png'
import Vaca from '../../assets/vaquinha.png'
import Porco from '../../assets/porquinho.png'
import Ovelha from '../../assets/Ovelhinha.png'
import Cavalo from '../../assets/Cavalinho.png'
import Peixe from '../../assets/Carpa.png'
import Abelha from '../../assets/Abelha.png'
import Camarao from '../../assets/Camarao.png'
import Lontra from '../../assets/lontra.png'


const lista = 
{
    itens:
    {
        lista: [
            {
                nome: "Galinha",
                preco: 5,
                imagem: Galinha,
                quantidade: 100,
                time:10,
      
            },
            {
                nome: "Vaca",
                preco: 40,
                imagem: Vaca,
                quantidade: 90,
                time:25,
            },
            {
                nome: "Porco",
                preco: 100,
                imagem: Porco,
                quantidade: 80,
                time:35,
            },
            {
                nome: "Ovelha",
                preco: 300,
                imagem: Ovelha,
                quantidade: 70,
                time:95,
            },
            {
                nome: "Cavalo",
                preco: 750,
                imagem: Cavalo,
                quantidade: 60,
                time:110,
            },
            {
                nome: "Peixe",
                preco: 2000,
                imagem: Peixe,
                quantidade: 50,
                time:300,
            },
            {
                nome: "Abelha",
                preco: 5000,
                imagem: Abelha,
                quantidade: 40,
                time:500,
            },
            {
                nome: "Camarao",
                preco: 10000,
                imagem: Camarao,
                quantidade: 30,
                time:800,

            },
            {
                nome: "Girafa",
                preco: 20000,
                imagem: Girafa,
                quantidade: 20,
                time:1500,
            },
            {
                nome: "Lontra",
                preco: 100000,
                imagem: Lontra,
                quantidade: 10,
                time:25000,
            }
        ],
        listaUpgrade: [
            {
                nome: "Chicken Manager!",
                animal: "Galinha",
                preco: 10000,
                imagem: Galinha,
            },
            {
                nome: "Cow Manager!",
                animal: "Vaca",
                preco: 15000,
                imagem: Vaca,
            },
            {
                nome: "Pig Manager!",
                animal: "Porco",
                preco: 40000,
                imagem: Porco,
            },
            {
                nome: "Sheep Manager!",
                animal: "Ovelha",
                preco: 95000,
                imagem: Ovelha,
            },
            {
                nome: "Horse Manager!",
                animal: "Cavalo",
                preco: 150000,
                imagem: Cavalo,
            },
            {
                nome: "Fish Manager!",
                preco: 320000,
                imagem: Peixe,
                animal:"Fish",
            },
            {
                nome: "Bee Manager!",
                preco: 1500000,
                imagem: Abelha,
                animal:"Bee"
            },
            {
                nome: "Shrimp Manager!",
                animal: "Camarao",
                preco: 3200000,
                imagem: Camarao,
            },
            {
                nome: "Giraffe Manager!",
                preco: 10000000,
                imagem: Girafa,
                animal: "Girafa"
            },
            {
                nome: "Otter Manager!",
                preco: 1000000000,
                imagem: Lontra,
                animal:"Lontra"
            },
            {
                nome: "Chicken 2x!",
                animal: "Galinha",
                preco: 10000,
                imagem: Galinha,
            },
            {
                nome: "Cow 2x!",
                animal: "Vaca",
                preco: 15000,
                imagem: Vaca,
            
            },
            {
                nome: "Pig 2x!",
                animal: "Porco",
                preco: 40000,
                imagem: Porco,
            },
            {
                nome: "Sheep 2x!",
                animal: "Ovelha",
                preco: 95000,
                imagem: Ovelha,
            },
            {
                nome: "Horse 2x!",
                animal: "Cavalo",
                preco: 150000,
                imagem: Cavalo,
            },
            {
                nome: "Fish 2x!",
                preco: 320000,
                imagem: Peixe,
                animal:"Fish",
            },
            {
                nome: "Bee 2x!",
                preco: 1500000,
                imagem: Abelha,
                animal:"Bee"
            },
            {
                nome: "Shrimp 2x!",
                animal: "Camarao",
                preco: 3200000,
                imagem: Camarao,
            },
            {
                nome: "Giraffe 2x!",
                preco: 10000000,
                imagem: Girafa,
                animal: "Girafa"
            },
            {
                nome: "Otter 2x!",
                preco: 1000000000,
                imagem: Lontra,
                animal:"Lontra"
            }
        ],
        upgradeDolar: [
            {
                nome: "Chicken 4x!",
                animal: "Galinha",
                preco: 10,
                imagem: Galinha,
            },
            {
                nome: "Cow 4x!",
                animal: "Vaca",
                preco: 20,
                imagem: Vaca,
            },
            {
                nome: "Pig 4x!",
                animal: "Porco",
                preco: 30,
                imagem: Porco,
            },
            {
                nome: "Sheep 4x!",
                animal: "Ovelha",
                preco: 40,
                imagem: Ovelha,
            },
            {
                nome: "Horse 4x!",
                animal: "Cavalo",
                preco: 50,
                imagem: Cavalo,
            },
            {
                nome: "Fish 4x!",
                preco: 60,
                imagem: Peixe,
                animal:"Fish",
            },
            {
                nome: "Bee 4x!",
                preco: 70,
                imagem: Abelha,
                animal:"Bee"
            },
            {
                nome: "Shrimp 4x!",
                animal: "Camarao",
                preco: 80,
                imagem: Camarao,
            },
            {
                nome: "Giraffe 4x!",
                preco: 90,
                imagem: Girafa,
                animal: "Girafa"
            },
            {
                nome: "Otter 4x!",
                preco: 100,
                imagem: Lontra,
                animal:"Lontra"
            }
        ],
        upgradeFazendeiro: [
            {
                nome: "Chicken 3x!",
                animal: "Galinha",
                preco: 100,
                imagem: Galinha,
            },
            {
                nome: "Cow 3x!",
                animal: "Vaca",
                preco: 200,
                imagem: Vaca,
            },
            {
                nome: "Pig 3x!",
                animal: "Porco",
                preco: 300,
                imagem: Porco,
            },
            {
                nome: "Sheep 3x!",
                animal: "Ovelha",
                preco: 400,
                imagem: Ovelha,
            },
            {
                nome: "Horse 3x!",
                animal: "Cavalo",
                preco: 500,
                imagem: Cavalo,
            },
            {
                nome: "Fish 3x!",
                preco: 600,
                imagem: Peixe,
                animal:"Fish",
            },
            {
                nome: "Bee 3x!",
                preco: 700,
                imagem: Abelha,
                animal:"Bee"
            },
            {
                nome: "Shrimp 3x!",
                animal: "Camarao",
                preco: 800,
                imagem: Camarao,
            },
            {
                nome: "Giraffe 3x!",
                preco: 900,
                imagem: Girafa,
                animal: "Girafa"
            },
            {
                nome: "Otter 3x!",
                preco: 1000,
                imagem: Lontra,
                animal:"Lontra"
            }
        ]
    }
}

export default lista;