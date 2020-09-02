import { createMuiTheme } from '@material-ui/core/styles';
import Yekan_Bakh from "../../fonts/Yekan-Bakh.TTF"

const yekan = {
    fontFamily: 'Yekan',
    fontStyle: 'normal',
    src: `url(${Yekan_Bakh})`
};

const myAppTheme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [yekan],
            },
        },
    },
    typography: {
        fontFamily: 'Yekan, Arial',
    },
    palette: {
        primary: {
            main: "#E91E63",
        },
        secondary: {
            main: "#455A64",
        },
    },
});

export default myAppTheme;