import { Theme } from '@mui/material';
import { CSSObject } from '@mui/system';
const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         width: '100%',
//         '& > * + *': {
//             marginTop: theme.spacing(2),
//         },
//     },
//     paper: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     }
// }));


const useStyles = (theme: Theme): CSSObject => {
  // theme.zIndex.drawer = 2;
  return ({
    root: {
      display: 'flex',
      width: '100%',
      // '& > * + *': {
      //     marginTop: theme.spacing(2),
      // },
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(7.5),
      },
    },
    drawerHead: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      zIndex: theme.zIndex.drawer + 1,
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    appBarSpacer: theme.mixins.toolbar,
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: drawerWidth,
    },
    seeMore: {
      marginTop: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(1),
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      '&.MuiFormLabel-root.Mui-focused': {
        color: 'black !important',
      },
    },
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "lightgrey !important",
      '&.MuiFormLabel-root.Mui-focused': {
        color: 'black !important',
      },

    },
    textField: {
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 100,
      '&.MuiFormLabel-root.Mui-focused': {
        color: 'white !important',
      },
    },
    "& .MuiFormLabel-root:after": {
      color: "red" // or black
    },
    tabs: {
      "& .MuiButtonBase-root.MuiTab-root": {
        fontSize: "50px"
      },
      "& .Mui-selected": {
        color: "lightgrey"
      },
    },
    selected: {
      boxShadow:
        theme.palette.type === "light"
          ? "0 0 3px rgba(70,80,184,1), 0 0 9px rgba(70,80,184,1), 0 0 11px rgba(70,80,184,1), 0 0 30px rgba(70,80,184,1)"
          : "0 0 3px #fc5a8d, 0 0 9px #fc5a8d, 0 0 11px #fc5a8d, 0 0 30px #fc5a8d",
    },
    nested: {
      marginLeft: theme.spacing(2),
    },
    listItemDisabled: {
      cursor: "not-allowed",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    // tabs: {
    //     "& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected": {
    //         color: "lightgrey"
    //     },
  })
};

export default useStyles;