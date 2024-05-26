import {
    Typography,
    Box,
    Stack,
    TextField,
    Button,
} from "@mui/material";

const Login = () => {


    const style: object = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: { xs: "80%", sm: 400 },
        border: "3px solid #166B54",
        // bgcolor: "background.paper",
        // border: "1px solid #166B54",
        // boxShadow: 24,
        borderRadius: 3,
        p: 3,
    };

  return (
    <Stack justifyContent='center' alignItems='center' >
        <Box sx={style}>
                <Typography variant="h4" textAlign="center" my={2}>
                    Connexion
                </Typography>
                <Box component="form" >
                    <Stack direction="column" justifyContent="center" spacing={4}>
                        <TextField
                            label="Email"
                            name="email"
                            // onChange={handleChange}
                            type="email"
                            required
                            placeholder="user@gmail.com"
                        />
                        <TextField
                            label="Mot de passe"
                            name="password"
                            // onChange={handleChange}
                            type="password"
                            required
                        />
                        <Stack direction="row" textAlign="center">
                            <Button
                                variant="contained"
                                // type="submit"
                                // size={{ xs: 'small', md: 'large' }}
                                sx={{ textAlign: "center", width: { xs: "80%", sm: "40%" } }}
                                color="warning"
                            // onClick={closeLoginModal}
                            >
                                ENVOYER
                            </Button>
                            <Typography
                                alignItems="center"
                                marginLeft={2}
                                display="inline-block"
                            >
                                Pas de compte ?
                                <Typography
                                    // onClick={openRegisterModal}
                                    // href="#"
                                    >
                                    {"S'inscrire"}
                                </Typography>
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
    </Stack>
  )
}

export default Login