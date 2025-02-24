// list.ts
export interface Produto {
    id: number;
    name: string;
    mark: string;
    model: string;
    cover: string;
    category: 'componentes' | 'Tv' | 'Celular' | 'gamer';
    free: boolean;
    imgs: string[];
    state: 'novo' | 'usado';
    about: string;
    price: number;
    tags: string[];
}

export const produtos: Produto[] = [
    {
        id: 1,
        name: "Processador Intel Core i7",
        mark: "Intel",
        model: "Core i7-10700K",
        cover: "https://http2.mlstatic.com/D_NQ_NP_614305-MLA45732712388_042021-P.png",
        category: "componentes",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_614305-MLA45732712388_042021-P.png",
            "https://http2.mlstatic.com/D_NQ_NP_836692-MLA45732712387_042021-P.png"
        ],
        state: "novo",
        about: "Processador de alta performance para gamers e profissionais.",
        price: 1200,
        tags: ["tecnologia", "computadores", "intel"]
    },
    {
        id: 2,
        name: "Smart TV 4K 55 Polegadas",
        mark: "Samsung",
        model: "UN55TU8000",
        cover: "https://http2.mlstatic.com/D_NQ_NP_936842-MLA45732712389_042021-P.png",
        category: "Tv",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_936842-MLA45732712389_042021-P.png",
            "https://http2.mlstatic.com/D_NQ_NP_836692-MLA45732712387_042021-P.png"
        ],
        state: "novo",
        about: "TV 4K UHD com HDR e Smart Hub.",
        price: 2500,
        tags: ["tecnologia", "tv", "4k"]
    },
    {
        id: 3,
        name: "iPhone 13 Pro",
        mark: "Apple",
        model: "iPhone 13 Pro",
        cover: "https://http2.mlstatic.com/D_NQ_NP_614305-MLA45732712388_042021-P.png",
        category: "Celular",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_614305-MLA45732712388_042021-P.png",
            "https://http2.mlstatic.com/D_NQ_NP_836692-MLA45732712387_042021-P.png"
        ],
        state: "novo",
        about: "Celular premium com câmera tripla e tela Super Retina XDR.",
        price: 6000,
        tags: ["tecnologia", "celular", "apple"]
    },
    {
        id: 4,
        name: "PlayStation 5",
        mark: "Sony",
        model: "PS5",
        cover: "https://http2.mlstatic.com/D_NQ_NP_936842-MLA45732712389_042021-P.png",
        category: "gamer",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_936842-MLA45732712389_042021-P.png",
            "https://http2.mlstatic.com/D_NQ_NP_836692-MLA45732712387_042021-P.png"
        ],
        state: "novo",
        about: "Console de última geração com suporte a 4K e ray tracing.",
        price: 4500,
        tags: ["tecnologia", "games", "console"]
    },
    {
        id: 5,
        name: "Placa de Vídeo NVIDIA RTX 3080",
        mark: "NVIDIA",
        model: "RTX 3080",
        cover: "https://http2.mlstatic.com/D_NQ_NP_614305-MLA45732712388_042021-P.png",
        category: "componentes",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_614305-MLA45732712388_042021-P.png",
            "https://http2.mlstatic.com/D_NQ_NP_836692-MLA45732712387_042021-P.png"
        ],
        state: "novo",
        about: "Placa de vídeo poderosa para jogos e edição de vídeo.",
        price: 7000,
        tags: ["tecnologia", "games", "nvidia"]
    },
    {
        id: 6,
        name: "Monitor Gamer 27 Polegadas",
        mark: "AOC",
        model: "G2790PX",
        cover: "https://http2.mlstatic.com/D_NQ_NP_936842-MLA45732712389_042021-P.png",
        category: "gamer",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_936842-MLA45732712389_042021-P.png",
            "https://http2.mlstatic.com/D_NQ_NP_836692-MLA45732712387_042021-P.png"
        ],
        state: "novo",
        about: "Monitor com taxa de atualização de 144Hz e tempo de resposta de 1ms.",
        price: 1500,
        tags: ["tecnologia", "monitores", "games"]
    },
    {
        id: 7,
        name: "Xbox Series X",
        mark: "Microsoft",
        model: "Xbox Series X",
        cover: "https://http2.mlstatic.com/D_NQ_NP_614305-MLA45732712388_042021-P.png",
        category: "gamer",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_614305-MLA45732712388_042021-P.png",
            "https://http2.mlstatic.com/D_NQ_NP_836692-MLA45732712387_042021-P.png"
        ],
        state: "novo",
        about: "Console de última geração com suporte a 4K e HDR.",
        price: 4000,
        tags: ["tecnologia", "games", "console"]
    },
    {
        id: 8,
        name: "Smartphone Samsung Galaxy S21",
        mark: "Samsung",
        model: "Galaxy S21",
        cover: "https://http2.mlstatic.com/D_NQ_NP_936842-MLA45732712389_042021-P.png",
        category: "Celular",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_936842-MLA45732712389_042021-P.png",
            "https://http2.mlstatic.com/D_NQ_NP_836692-MLA45732712387_042021-P.png"
        ],
        state: "novo",
        about: "Celular premium com câmera tripla e tela Dynamic AMOLED.",
        price: 3500,
        tags: ["tecnologia", "celular", "samsung"]
    },
    {
        id: 9,
        name: "Notebook Gamer Acer Nitro 5",
        mark: "Acer",
        model: "Nitro 5",
        cover: "https://http2.mlstatic.com/D_NQ_NP_614305-MLA45732712388_042021-P.png",
        category: "gamer",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_614305-MLA45732712388_042021-P.png",
            "https://http2.mlstatic.com/D_NQ_NP_836692-MLA45732712387_042021-P.png"
        ],
        state: "novo",
        about: "Notebook gamer com placa de vídeo dedicada e processador Intel i7.",
        price: 5000,
        tags: ["tecnologia", "notebook", "games"]
    },
    {
        id: 10,
        name: "Smart TV 32 Polegadas",
        mark: "LG",
        model: "32LM630B",
        cover: "https://http2.mlstatic.com/D_NQ_NP_936842-MLA45732712389_042021-P.png",
        category: "Tv",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_936842-MLA45732712389_042021-P.png",
            "https://http2.mlstatic.com/D_NQ_NP_836692-MLA45732712387_042021-P.png"
        ],
        state: "novo",
        about: "TV HD com Smart TV e entrada HDMI.",
        price: 1200,
        tags: ["tecnologia", "tv", "hd"]
    }
];