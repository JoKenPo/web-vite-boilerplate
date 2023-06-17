import React from 'react';
import * as yup from 'yup';
// import { Form } from '@unform/web';
import { useForm } from "react-hook-form";
// import { TextField } from 'unform-material-ui';
import { FormHandles } from '@unform/core'
import { Button, Grid, Box, CircularProgress, CssBaseline, Paper, InputAdornment, IconButton, TextField, FormControlLabel, Checkbox } from '@mui/material';
import Copyright from '../../components/Copyright';
import { useAuthorization } from '../../contexts/AuthorizationContext';
import { usePallet } from '../../contexts/PalletContext';
import { makeStyles } from 'tss-react/mui';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { isMobile } from 'react-device-detect';
import CircularLoading from '../../components/CircularLoading';

const spaceWidthRegionForm = isMobile ? 6 : 10


// const styleLogin = makeStyles((theme: any) => ({
//     root: {
//         height: '100vh',
//     },
//     imageList: {
//         width: "auto",
//         height: "auto",
//         // backgroundSize: 'cover',
//         // backgroundPosition: 'center',
//         // backgroundRepeat: 'no-repeat',

//     },
//     image: {
//         // backgroundImage: `url(${backgroundImage})`,
//         backgroundRepeat: 'no-repeat',
//         backgroundColor: theme.palette.grey[900],
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//     },
//     paper: {
//         margin: theme.spacing(spaceWidthRegionForm),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }));



function SignIn() {

    const { login, loading, isAuthenticated } = useAuthorization();

    const classes = {} // styleLogin();
    const formRef = React.useRef<FormHandles>(null)
    const { register, handleSubmit } = useForm();
    const [displaySpinner, setDisplaySpinner] = React.useState<boolean>(false);
    const [emailHelperText, setEmailHelperText] = React.useState<string>("");
    const [passwordHelperText, setPasswordHelperText] = React.useState<string>("");


    type handleSubmitData = { email: String, password: String, remember: boolean }

    function handleSubmitForm({ email, password, remember }: handleSubmitData, { reset }: any) {
        const schema = yup.object().shape({
            email: yup.string().email('Email inválido').required('Email é obrigatório'),
            password: yup.string().min(6, 'Senha: Mínimo de 6 caracteres'),
        });
        schema.validate({ email, password }, { abortEarly: false })
            .then(async x => {
                setDisplaySpinner(true);

                await login(email, password)
            })
            .catch(err => {
                if (err.message === "Email inválido") {
                    setEmailHelperText('Email inválido')
                }
                if (err.message === "Email é obrigatório") {
                    setEmailHelperText('Email é obrigatório')
                }
                if (err.message === "Senha: Mínimo de 6 caracteres") {
                    setPasswordHelperText('Senha: Mínimo de 6 caracteres')
                }
                if (err.message === "2 errors occurred") {
                    setEmailHelperText('Verifique se o email está correto')
                    setPasswordHelperText('Verifique se a senha está correta')
                }
            })
    }

    const { pallet } = usePallet();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    return (

        isAuthenticated() || loading ?
            <>
                <CircularLoading
                    size={80}
                    top={"50%"}
                    left={"50%"}
                    zIndex={2}
                />
            </>
            : <>
                <Grid container component="main" className="h-screen" >
                    <CssBaseline />
                    {/* <Grid item xs={false} sm={4} md={7} className={classes?.image} /> */}
                    <Grid item xs={false} sm={4} md={7} style={{
                        backgroundColor: `${pallet.color.quaternary.background}`,
                        color: `${pallet.color.quaternary.font}`,
                    }}>
                        {/*<ImageList rowHeight={160} className={classes?.imageList} cols={3}>
                        {itemDataImag.map((item) => (
                            <ImageListItem key={item.img} cols={item.cols || 1}>
                                <img src={item.img} alt={item.title} />
                            </ImageListItem>
                        ))}
                    </ImageList>*/}
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <div className="flex flex-col items-center">
                            {isMobile ? <img src={"logo"} alt="Logo" width="250px" style={{ marginBottom: "40px" }} /> : null}
                            <form ref={formRef} className={'h-full'} noValidate onSubmit={handleSubmit(handleSubmitForm)}>
                                <TextField
                                    // focused={true}
                                    disabled={displaySpinner}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    {...register("email")}
                                    label="Email"
                                    autoComplete="email"
                                    autoFocus
                                    helperText={emailHelperText}
                                />
                                <TextField
                                    disabled={displaySpinner}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    {...register("password")}
                                    label="Senha"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    helperText={passwordHelperText}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                {displaySpinner ?
                                    <Grid container justifyContent="center"> <CircularProgress /> </Grid> :
                                    <div>
                                        <FormControlLabel
                                            control={<Checkbox name="remember" value="remember" color="primary" />}
                                            label="Remember me"
                                        />
                                        <Button
                                            size="large"
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            className={classes?.submit}
                                            style={{
                                                backgroundColor: `${pallet.botaoModelo1.pressOn.background}`,
                                                color: `${pallet.botaoModelo1.pressOn.color}`,
                                                fontSize: `${pallet.general.size14}`,
                                                fontWeight: pallet.general.weight_100,
                                                textTransform: "capitalize",
                                                height: "55px"
                                            }}
                                        >
                                            Entrar
                                        </Button>
                                        {/* <Grid container>
                                            <Grid item xs>
                                                <Link href="#" variant="body2">
                                                    Esqueci minha senha?
                                                </Link>
                                            </Grid>
                                            <Grid item>
                                                <Link href="/cadastro" variant="body2">
                                                    {"Fazer meu cadastro"}
                                                </Link>
                                            </Grid>
                                        </Grid> */}
                                    </div>
                                }
                                <Box mt={8}>
                                    <Copyright />
                                </Box>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </>
    );
}

export default SignIn;