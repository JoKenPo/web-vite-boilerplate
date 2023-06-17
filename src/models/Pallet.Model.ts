

export interface IPallet {

  // ------------ NOVO PADRAO ---------------
  backGroundPageColorPrimary: string,
  backGroundPageColorSecondary: string,
  backGroundPaperColorPrimary: string,
  backGroundPaperColorSecondary: string,
  textColorPrimary: string,
  backgroundColorPrimary: string,
  textColorSecondary: string,
  backgroundColorSecondary: string,
  textColorTertiary: string,
  backgroundColorTertiary: string,
  backgroungColorTertiaryBorder: string,
  textColorQuaternary: string,
  backgroundColorQuaternary: string,
  textColorQuintenary: string,
  backgroundColorQuintenary: string,
  // fonteItemColorPrimary: string,
  // fonteItemColorSecondary: string,
  // fonteValueColorPrimary: string,
  // fonteValueColorSecondary: string,
  botaoModelo1: {
    pressOn: {
      color: string,
      background: string,
    },
    pressOff: {
      color: string,
      borderColor: string,
      border: string,
    },
  },
  charts: {
    red: string,
    green: string,
    blue: string,
    purple: string,
    yellow: string,
    lightGrey: string,
  },
  parlamentar: {
    divergenteColor: string,
    neutroColor: string,
    convergenteColor: string,
    naoClassificadoColor: string,
  },
  general: {
    color1: string,
    color2: string,
    color3: string,
    color4: string,
    size10: string,
    size12: string,
    size14: string,
    size18: string,
    fontFamily: string,
    weight_100: number,
    weight_300: number,
    weight_500: number,
    weight_600: number,
  },


  // ------------ ANTIGO PADRAO ---------------
  logo: string,
  icons: any,
  color: {
    primary: {
      background: string,
      font: string
    },
    secundary: {
      background: string,
      font: string
    },
    tertiary: {
      background: string,
      font: string
    },
    quaternary: {
      background: string,
      font: string
    },
    quinternary: {
      background: string,
      font: string
    },
    colorBase: {
      titleWidgets: string,
      linkButtonFont: string,
      white: string,
      black: string,
      greyBackground: string,
      lightGreyBackground: string,
      green: string,
      greyText: string,
      labelTextFild: string
    },
    charts: {
      red: string,
      green: string,
      blue: string,
      purple: string,
      yellow: string,
      lightGrey: string,
    },
    ParlamentarQualificacao: {
      convergente: string,
      divergente: string,
      neutro: string,
      naoClassificado: string
    }
  },
  fontFamily: {
    general: string,
  },
  fontSize: {
    titleWidgets: string,
    smallButton: string,
    titleCardParlamentar: string,
    text_10: string
  },
  fontWeight: {
    subtitle: number,
    text: number,
    button: number,
    lighter: number
  },

}

export const schema = {

  // ------------ NOVO PADRAO ---------------
  backGroundPageColorPrimary: "#fafafa",
  backGroundPageColorSecondary: "white",
  backGroundPaperColorPrimary: "white",
  backGroundPaperColorSecondary: "white",
  textColorPrimary: "white",
  backgroundColorPrimary: '#3B0675',
  textColorSecondary: '#3B0675',
  backgroundColorSecondary: "white",
  textColorTertiary: "#4B1196",
  backgroundColorTertiary: "#F9F9F9",
  backgroungColorTertiaryBorder: "#cccccc",
  textColorQuaternary: "#1E0736",
  backgroundColorQuaternary: "#E8E8E8",
  textColorQuintenary: "#4B1196",
  backgroundColorQuintenary: "#dbcfea",
  // fonteItemColorPrimary: string,
  // fonteItemColorSecondary: string,
  // fonteValueColorPrimary: string,
  // fonteValueColorSecondary: string,
  botaoModelo1: {
    pressOn: {
      color: "white",
      background: 'rgba(52,53,65,1)',
    },
    pressOff: {
      color: '#3B0675',
      borderColor: "White",
      border: '#3B0675',
    },
  },
  charts: {
    red: "#F63854",
    green: "#4CD964",
    blue: "#007AFF",
    purple: "#5856D7",
    yellow: "#FFD200",
    lightGrey: "#D8D8D8",
  },
  parlamentar: {
    convergente: "linear-gradient(to bottom right, #4CD964, #54AEC1)",
    divergente: "linear-gradient(to bottom right, #EB5757, #fa9191)",
    neutro: "linear-gradient(to bottom right, #E0E0E0, #b8b8b8)",
    naoClassificado: "linear-gradient(to bottom right, #007AFF, #a8d2ff)",
  },
  general: {
    color1: 'rgba(32,33,35,1)',
    color2: 'rgba(52,53,65,1)',
    color3: 'white',
    color4: "#9B9B9B",
    size10: "10px",
    size12: "12px",
    size14: "14px",
    size18: "18px",
    fontFamily: 'Montserrat',
    weight_100: 100,
    weight_300: 300,
    weight_500: 500,
    weight_600: 600,
  },


  // ------------ ANTIGO PADRAO ---------------


  logo: 'https://',
  icons: {},
  color: {
    primary: {
      background: '#3B0675',
      font: 'white'
    },
    secundary: {
      background: '#e1d8ed',
      font: '#4B1196'
    },
    tertiary: {
      background: '#E8E8E8',
      font: '#1E0736'
    },
    quaternary: {
      background: 'rgba(32,33,35,1)',
      font: 'rgba(217,217,227,1)'
    },
    // cor do titulo de widgets dashboard
    quinternary: {
      background: '#1E0736',
      font: '#1E0736'
    },
    colorBase: {
      titleWidgets: '#3B0675',
      linkButtonFont: '#4B1196',
      white: 'white',
      black: 'black',
      greyBackground: '#ECECEC',
      lightGreyBackground: '#F9F9F9',
      green: '#4CD964',
      greyText: '#1E0736',
      labelTextFild: '#9B9B9B',
    },
    charts: {
      red: "#F63854",
      green: "#4CD964",
      blue: "#007AFF",
      purple: "#5856D7",
      yellow: "#FFD200",
      lightGrey: "#D8D8D8",
    },
    ParlamentarQualificacao: {
      convergente: "linear-gradient(to bottom right, #4CD964, #54AEC1)",
      divergente: "linear-gradient(to bottom right, #EB5757, #fa9191)",
      neutro: "linear-gradient(to bottom right, #E0E0E0, #b8b8b8)",
      naoClassificado: "linear-gradient(to bottom right, #007AFF, #a8d2ff)"
    }
  },
  fontFamily: {
    general: 'Montserrat',
  },
  fontSize: {
    titleWidgets: "14px",
    smallButton: "12px",
    titleCardParlamentar: "18px",
    text_10: "10px"
  },
  fontWeight: {
    subtitle: 600,
    text: 300,
    button: 500,
    lighter: 100
  },
}