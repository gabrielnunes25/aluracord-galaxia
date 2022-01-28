import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';

export default function Custom404() {
    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // backgroundColor: 'blue',
                    backgroundImage:
                        'url(https://s2.glbimg.com/rYRBkQxZVtJ1R6M27XDIujqZnLI=/e.glbimg.com/og/ed/f/original/2019/03/12/pia12348_large.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundBlendMode: 'multiply'
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'column'
                        },
                        width: '100%',
                        maxWidth: '500px',
                        borderRadius: '5px',
                        padding: '32px',
                        margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[700]
                    }}
                >
                    <Text
                        variant="display1"
                        styleSheet={{
                            color: appConfig.theme.colors.neutrals[200],
                            fontSize: '150px',
                            backgroundColor:
                                appConfig.theme.colors.neutrals[900],
                            padding: '0 25px',
                            marginBottom: '20px',
                            borderRadius: '1000px'
                        }}
                    >
                        404
                    </Text>
                    <Text
                        variant="heading3"
                        styleSheet={{
                            color: appConfig.theme.colors.neutrals[200]
                        }}
                    >
                        Página Não Encontrada
                    </Text>
                </Box>
            </Box>
        </>
    );
}
