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
        id: Math.floor(Math.random() * 999),
        name: `Processador gamer Intel Core i7-4770 CM8064601464303 de 4 núcleos e 3.9GHz de frequência com gráfica integrada`,
        mark: "Intel",
        model: "Core i7-10700K",
        cover: "https://http2.mlstatic.com/D_NQ_NP_2X_778971-MLA41522341194_042020-F.webp",
        category: "componentes",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_828414-MLU73563721545_122023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_933885-MLU73563543685_122023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_936388-MLU73563543691_122023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_727428-MLU73563681965_122023-F.webp"
        ],
        state: "novo",
        about: `
         é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
         quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
         Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
         inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
         contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
        
        `,
        price: 1200,
        tags: ["tecnologia", "computadores", "intel"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: "Smart TV 4K 55 Polegadas",
        mark: "Samsung",
        model: "UN55TU8000",
        cover: "https://http2.mlstatic.com/D_NQ_NP_2X_807542-MLU76849667741_062024-F.webp",
        category: "Tv",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_639165-MLU76787392556_062024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_724425-MLU76787392554_062024-F.webp"
        ],
        state: "novo",
        about: `
         é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
         quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
         Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
         inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
         contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
        
        `,
        price: 2500,
        tags: ["tecnologia", "tv", "4k"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: "Xiaomi Pocophone Poco X6 Pro 5G Dual SIM 512 GB Amarelo 12 GB RAM",
        mark: "Apple",
        model: "iPhone 13 Pro",
        cover: "https://http2.mlstatic.com/D_Q_NP_2X_945867-MLU77149604734_062024-V.webp",
        category: "Celular",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_945867-MLU77149604734_062024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_601555-MLA80378989953_112024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_835695-MLA80378873517_112024-F.webp"
        ],
        state: "novo",
        about: `
        é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
        quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
        Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
        inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
        contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
       
       `,
        price: 6000,
        tags: ["tecnologia", "celular", "apple"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: `Console PlayStation 5 Midia Fisica Slim Branco 1TB Returnal e Ratchet e Clank Controle Sem Fio Dualsense Branco`,
        mark: "Sony",
        model: "PS5",
        cover: "/imgs/play.png",
        category: "gamer",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_626239-MLU75342388763_032024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_873030-MLU78076147119_072024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_615474-MLU76732590779_052024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_615474-MLU76732590779_052024-F.webp"
        ],
        state: "novo",
        about: `
         é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
         quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
         Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
         inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
         contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
        
        `,
        price: 4500,
        tags: ["tecnologia", "games", "console"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: "Fone De Ouvido Qcy Ht08 Melobuds Pro Anc Conexão Multiponto Cor Preto",
        mark: "sony",
        model: "RTX 3080",
        cover: "https://http2.mlstatic.com/D_NQ_NP_2X_746522-MLU79170563365_092024-F.webp",
        category: "componentes",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_726219-MLA79828974981_102024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_982095-MLU78958248500_092024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_849421-MLA79580300586_102024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_746522-MLU79170563365_092024-F.webp"
        ],
        state: "novo",
        about: `
         é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
         quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
         Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
         inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
         contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
        
        `,
        price: 7000,
        tags: ["tecnologia", "games", "nvidia"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: "Samsung Smart Tv 43 Crystal Uhd 4k DU800043 2024 AirSlim Processador Crystal 4k",
        mark: "Samsung",
        model: "UN55TU8000",
        cover: "https://http2.mlstatic.com/D_NQ_NP_2X_696640-MLU78389318663_082024-F.webp",
        category: "Tv",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_728591-MLU76025756789_042024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_696640-MLU78389318663_082024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_639165-MLU76787392556_062024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_724425-MLU76787392554_062024-F.webp"
        ],
        state: "novo",
        about: `
         é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
         quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
         Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
         inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
         contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
        
        `,
        price: 2500,
        tags: ["tecnologia", "tv", "4k"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: `Processador gamer Intel Core i7-4770 CM8064601464303 de 4 núcleos e 3.9GHz de frequência com gráfica integrada`,
        mark: "Intel",
        model: "Core i7-10700K",
        cover: "https://http2.mlstatic.com/D_NQ_NP_2X_778971-MLA41522341194_042020-F.webp",
        category: "componentes",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_828414-MLU73563721545_122023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_933885-MLU73563543685_122023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_936388-MLU73563543691_122023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_727428-MLU73563681965_122023-F.webp"
        ],
        state: "novo",
        about: `
         é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
         quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
         Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
         inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
         contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
        
        `,
        price: 1200,
        tags: ["tecnologia", "computadores", "intel"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: "Smart TV 4K 55 Polegadas",
        mark: "Samsung",
        model: "UN55TU8000",
        cover: "https://http2.mlstatic.com/D_NQ_NP_2X_807542-MLU76849667741_062024-F.webp",
        category: "Tv",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_639165-MLU76787392556_062024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_724425-MLU76787392554_062024-F.webp"
        ],
        state: "novo",
        about: `
         é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
         quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
         Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
         inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
         contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
        
        `,
        price: 2500,
        tags: ["tecnologia", "tv", "4k"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: "Xiaomi Pocophone Poco X6 Pro 5G Dual SIM 512 GB Amarelo 12 GB RAM",
        mark: "Apple",
        model: "iPhone 13 Pro",
        cover: "https://http2.mlstatic.com/D_Q_NP_2X_945867-MLU77149604734_062024-V.webp",
        category: "Celular",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_945867-MLU77149604734_062024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_601555-MLA80378989953_112024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_835695-MLA80378873517_112024-F.webp"
        ],
        state: "novo",
        about: `
        é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
        quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
        Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
        inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
        contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
       
       `,
        price: 6000,
        tags: ["tecnologia", "celular", "apple"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: `Console PlayStation 5 Midia Fisica Slim Branco 1TB Returnal e Ratchet e Clank Controle Sem Fio Dualsense Branco`,
        mark: "Sony",
        model: "PS5",
        cover: "/imgs/play.png",
        category: "gamer",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_626239-MLU75342388763_032024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_873030-MLU78076147119_072024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_615474-MLU76732590779_052024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_615474-MLU76732590779_052024-F.webp"
        ],
        state: "novo",
        about: `
         é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
         quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
         Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
         inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
         contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
        
        `,
        price: 4500,
        tags: ["tecnologia", "games", "console"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: "Fone De Ouvido Qcy Ht08 Melobuds Pro Anc Conexão Multiponto Cor Preto",
        mark: "sony",
        model: "RTX 3080",
        cover: "https://http2.mlstatic.com/D_NQ_NP_2X_746522-MLU79170563365_092024-F.webp",
        category: "componentes",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_726219-MLA79828974981_102024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_982095-MLU78958248500_092024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_849421-MLA79580300586_102024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_746522-MLU79170563365_092024-F.webp"
        ],
        state: "novo",
        about: `
         é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
         quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
         Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
         inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
         contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
        
        `,
        price: 7000,
        tags: ["tecnologia", "games", "nvidia"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: "Samsung Smart Tv 43 Crystal Uhd 4k DU800043 2024 AirSlim Processador Crystal 4k",
        mark: "Samsung",
        model: "UN55TU8000",
        cover: "https://http2.mlstatic.com/D_NQ_NP_2X_696640-MLU78389318663_082024-F.webp",
        category: "Tv",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_728591-MLU76025756789_042024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_696640-MLU78389318663_082024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_639165-MLU76787392556_062024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_724425-MLU76787392554_062024-F.webp"
        ],
        state: "novo",
        about: `
         é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
         quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
         Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
         inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
         contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
        
        `,
        price: 2500,
        tags: ["tecnologia", "tv", "4k"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: `Processador gamer Intel Core i7-4770 CM8064601464303 de 4 núcleos e 3.9GHz de frequência com gráfica integrada`,
        mark: "Intel",
        model: "Core i7-10700K",
        cover: "https://http2.mlstatic.com/D_NQ_NP_2X_778971-MLA41522341194_042020-F.webp",
        category: "componentes",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_828414-MLU73563721545_122023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_933885-MLU73563543685_122023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_936388-MLU73563543691_122023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_727428-MLU73563681965_122023-F.webp"
        ],
        state: "novo",
        about: `
         é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
         quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
         Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
         inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
         contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
        
        `,
        price: 1200,
        tags: ["tecnologia", "computadores", "intel"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: "Smart TV 4K 55 Polegadas",
        mark: "Samsung",
        model: "UN55TU8000",
        cover: "https://http2.mlstatic.com/D_NQ_NP_2X_807542-MLU76849667741_062024-F.webp",
        category: "Tv",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_639165-MLU76787392556_062024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_724425-MLU76787392554_062024-F.webp"
        ],
        state: "novo",
        about: `
         é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
         quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
         Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
         inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
         contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
        
        `,
        price: 2500,
        tags: ["tecnologia", "tv", "4k"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: "Xiaomi Pocophone Poco X6 Pro 5G Dual SIM 512 GB Amarelo 12 GB RAM",
        mark: "Apple",
        model: "iPhone 13 Pro",
        cover: "https://http2.mlstatic.com/D_Q_NP_2X_945867-MLU77149604734_062024-V.webp",
        category: "Celular",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_945867-MLU77149604734_062024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_601555-MLA80378989953_112024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_835695-MLA80378873517_112024-F.webp"
        ],
        state: "novo",
        about: `
        é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
        quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
        Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
        inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
        contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
       
       `,
        price: 6000,
        tags: ["tecnologia", "celular", "apple"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: `Console PlayStation 5 Midia Fisica Slim Branco 1TB Returnal e Ratchet e Clank Controle Sem Fio Dualsense Branco`,
        mark: "Sony",
        model: "PS5",
        cover: "/imgs/play.png",
        category: "gamer",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_626239-MLU75342388763_032024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_873030-MLU78076147119_072024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_615474-MLU76732590779_052024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_615474-MLU76732590779_052024-F.webp"
        ],
        state: "novo",
        about: `
         é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
         quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
         Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
         inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
         contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
        
        `,
        price: 4500,
        tags: ["tecnologia", "games", "console"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: "Fone De Ouvido Qcy Ht08 Melobuds Pro Anc Conexão Multiponto Cor Preto",
        mark: "sony",
        model: "RTX 3080",
        cover: "https://http2.mlstatic.com/D_NQ_NP_2X_746522-MLU79170563365_092024-F.webp",
        category: "componentes",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_726219-MLA79828974981_102024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_982095-MLU78958248500_092024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_849421-MLA79580300586_102024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_746522-MLU79170563365_092024-F.webp"
        ],
        state: "novo",
        about: `
         é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
         quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
         Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
         inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
         contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
        
        `,
        price: 7000,
        tags: ["tecnologia", "games", "nvidia"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: "Samsung Smart Tv 43 Crystal Uhd 4k DU800043 2024 AirSlim Processador Crystal 4k",
        mark: "Samsung",
        model: "UN55TU8000",
        cover: "https://http2.mlstatic.com/D_NQ_NP_2X_696640-MLU78389318663_082024-F.webp",
        category: "Tv",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_728591-MLU76025756789_042024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_696640-MLU78389318663_082024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_639165-MLU76787392556_062024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_724425-MLU76787392554_062024-F.webp"
        ],
        state: "novo",
        about: `
         é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
         quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
         Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
         inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
         contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
        
        `,
        price: 2500,
        tags: ["tecnologia", "tv", "4k"]
    },    {
        id: Math.floor(Math.random() * 999),
        name: `Processador gamer Intel Core i7-4770 CM8064601464303 de 4 núcleos e 3.9GHz de frequência com gráfica integrada`,
        mark: "Intel",
        model: "Core i7-10700K",
        cover: "https://http2.mlstatic.com/D_NQ_NP_2X_778971-MLA41522341194_042020-F.webp",
        category: "componentes",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_828414-MLU73563721545_122023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_933885-MLU73563543685_122023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_936388-MLU73563543691_122023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_727428-MLU73563681965_122023-F.webp"
        ],
        state: "novo",
        about: `
         é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
         quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
         Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
         inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
         contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
        
        `,
        price: 1200,
        tags: ["tecnologia", "computadores", "intel"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: "Smart TV 4K 55 Polegadas",
        mark: "Samsung",
        model: "UN55TU8000",
        cover: "https://http2.mlstatic.com/D_NQ_NP_2X_807542-MLU76849667741_062024-F.webp",
        category: "Tv",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_639165-MLU76787392556_062024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_724425-MLU76787392554_062024-F.webp"
        ],
        state: "novo",
        about: `
         é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
         quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
         Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
         inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
         contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
        
        `,
        price: 2500,
        tags: ["tecnologia", "tv", "4k"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: "Xiaomi Pocophone Poco X6 Pro 5G Dual SIM 512 GB Amarelo 12 GB RAM",
        mark: "Apple",
        model: "iPhone 13 Pro",
        cover: "https://http2.mlstatic.com/D_Q_NP_2X_945867-MLU77149604734_062024-V.webp",
        category: "Celular",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_945867-MLU77149604734_062024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_601555-MLA80378989953_112024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_835695-MLA80378873517_112024-F.webp"
        ],
        state: "novo",
        about: `
        é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
        quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
        Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
        inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
        contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
       
       `,
        price: 6000,
        tags: ["tecnologia", "celular", "apple"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: `Console PlayStation 5 Midia Fisica Slim Branco 1TB Returnal e Ratchet e Clank Controle Sem Fio Dualsense Branco`,
        mark: "Sony",
        model: "PS5",
        cover: "/imgs/play.png",
        category: "gamer",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_626239-MLU75342388763_032024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_873030-MLU78076147119_072024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_615474-MLU76732590779_052024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_615474-MLU76732590779_052024-F.webp"
        ],
        state: "novo",
        about: `
         é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
         quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
         Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
         inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
         contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
        
        `,
        price: 4500,
        tags: ["tecnologia", "games", "console"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: "Fone De Ouvido Qcy Ht08 Melobuds Pro Anc Conexão Multiponto Cor Preto",
        mark: "sony",
        model: "RTX 3080",
        cover: "https://http2.mlstatic.com/D_NQ_NP_2X_746522-MLU79170563365_092024-F.webp",
        category: "componentes",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_726219-MLA79828974981_102024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_982095-MLU78958248500_092024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_849421-MLA79580300586_102024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_746522-MLU79170563365_092024-F.webp"
        ],
        state: "novo",
        about: `
         é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
         quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
         Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
         inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
         contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
        
        `,
        price: 7000,
        tags: ["tecnologia", "games", "nvidia"]
    },
    {
        id: Math.floor(Math.random() * 999),
        name: "Samsung Smart Tv 43 Crystal Uhd 4k DU800043 2024 AirSlim Processador Crystal 4k",
        mark: "Samsung",
        model: "UN55TU8000",
        cover: "https://http2.mlstatic.com/D_NQ_NP_2X_696640-MLU78389318663_082024-F.webp",
        category: "Tv",
        free: false,
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_728591-MLU76025756789_042024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_696640-MLU78389318663_082024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_639165-MLU76787392556_062024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_724425-MLU76787392554_062024-F.webp"
        ],
        state: "novo",
        about: `
         é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
         quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem 
         Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente 
         inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
         contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwa
        
        `,
        price: 2500,
        tags: ["tecnologia", "tv", "4k"]
    },
   
];