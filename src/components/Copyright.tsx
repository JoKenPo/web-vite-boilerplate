import { Link, Typography } from '@mui/material';

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.agendamento.com.br/">
                Agendamento
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}