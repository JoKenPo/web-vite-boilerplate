import {Dashboard, People, EventNote, Assessment, FiberNew, Ballot} from '@mui/icons-material';

export const mainMenu = [
    { key: 1, title: 'Dashboard', subTitles: ["subTitle1, subTitle2"], icon: () => (<Dashboard />), url: "/" },
    { key: 2, title: 'Agenda', subTitles: ["subTitle1, subTitle2"], icon: () => (<EventNote />), url: "/agenda" },
    { key: 3, title: 'Relatórios', subTitles: ["subTitle1, subTitle2"], icon: () => (<Assessment />), url: "/relatorios" },
]
