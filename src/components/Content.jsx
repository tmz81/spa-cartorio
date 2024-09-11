// constants.js
import equipamento1 from "../../src/assets/equip1.webp";
import equipamento2 from "../../src/assets/equip2.webp";
import equipamento3 from "../../src/assets/equip3.webp";
import Valdomiro from "../../src/assets/Valdomiro.webp";
import Ygor from "../../src/assets/Ygor.webp";
import Coelho from "../../src/assets/Coelho.webp";
import Marcelo from "../../src/assets/Marcelo.webp";

export const swiperBreakpoints = {
  375: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
};

export const swiperBreakpointsComite = {
  375: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
};

export const cardsData = [
  {
    src: equipamento1,
    alt: "Imagem 1",
    name: "ATD/DSC/TG",
    description:
      "O equipamento Júpiter STA 449 da Netzsch é um analisador térmico avançado que combina diferentes técnicas de análise térmica em um único dispositivo.",
    brand: "Netzsch",
    model: "Júpiter STA 449",
    acquisitionYear: "2012",
    platformCode: "UFRPE-032750",
    status: "Ativo",
    creationDate: "14/09/2021",
    techniques: [
      "Termogravimetria (TG ou TGA - Thermogravimetric Analysis)",
      "Calorimetria Exploratória Diferencial (DSC - Differential Scanning Calorimetry)",
      "Análise Térmica Diferencial (DTA - Differential Thermal Analysis)",
      "Análise Combinada TG-DSC ou TG-DTA",
      "Análise de Atmosfera Controlada",
      "Medidas de Reações Sólido-Gás",
      "Determinação de Composição",
    ],
  },
  {
    src: equipamento2,
    alt: "Imagem 2",
    name: "Difratômetro de Raios X",
    description:
      "O equipamento XRD6000 da Shimadzu é utilizado para a análise de fases minerais em diferentes materiais como solos, sedimentos, rochas, medicamentos e produtos sintéticos, por meio da técnica de Difração de Raios X (DRX).",
    brand: "Shimadzu",
    model: "XRD6000",
    acquisitionYear: "2007",
    platformCode: "UFRPE-032741",
    status: "Ativo",
    creationDate: "14/09/2021",
    techniques: [
      "Difração de Raios X por Pó (XRPD - X-ray Powder Diffraction)",
      "Análise de Tamanho de Cristalito",
      "Análise Qualitativa e Quantitativa de Fases",
      "Mapeamento de Textura (Textura Cristalina)",
      "Medidas de Parâmetros de Rede",
      "Análise de Estrutura",
      "Estudo de Transformações de Fase",
    ],
  },
  {
    src: equipamento3,
    alt: "Imagem 3",
    name: "FTIR",
    description:
      "O equipamento PerkinElmer Spectrum TWO é um espectrofotômetro de Infravermelho por Transformada de Fourier (FTIR), utilizado para a análise qualitativa e quantitativa de materiais orgânicos e inorgânicos.",
    brand: "PerkinElmer",
    model: "Spectrum TWO",
    acquisitionYear: "2014",
    platformCode: "UFRPE-032752",
    status: "Ativo",
    creationDate: "14/09/2021",
    techniques: [
      "Espectroscopia no Infravermelho por Transformada de Fourier (FTIR)",
      "Análise por Pastilha em KBr",
      "Análise por Reflexão Total Atenuada (ATR - Attenuated Total Reflectance)",
      "Análise de Amostras Líquidas",
      "Análise Quantitativa",
      "Análise de Filmes Finos",
      "Análise de Amostras Gasosas",
      "Análise de Polímeros",
    ],
  },
];

export const cardsComite = [
  {
    src: Valdomiro,
    alt: "Valdomiro Severino de Souza Júnior",
    name: "Valdomiro Severino de Souza Júnior",
    description: "Prof. Coordenador do Laboratório",
    links: "http://lattes.cnpq.br/3461006118388502",
    linkDescription: "Curriculo Lattes",
  },
  {
    src: Ygor,
    alt: "Ygor Jacques",
    name: "Ygor Jacques",
    description: "Prof. do Depto. de Agronomia",
    links: "http://lattes.cnpq.br/0904824873761236",
    linkDescription: "Curriculo Lattes",
  },
];

export const cardsComiteExterno = [
  {
    src: Coelho,
    alt: "José Coelho de Araújo Filho",
    name: "José Coelho de Araújo Filho",
    description: "Dr. Embrapa Solos/UEP Recife",
    links:
      "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4789108J5",
    linkDescription: "Curriculo Lattes",
  },
  {
    src: Marcelo,
    alt: "Prof. Marcelo Metri Corrêa Universidade Federal do Agreste de Pernambuco",
    name: "Marcelo Metri Corrêa",
    description: "Prof. Universidade Federal do Agreste de Pernambuco",
    links:
      "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4791658P9",
    linkDescription: "Curriculo Lattes",
  },
];
