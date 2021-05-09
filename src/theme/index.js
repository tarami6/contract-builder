import { createMuiTheme } from '@material-ui/core/styles';

const colorVariant = {
    lightGrey: '#EFECEC',
    green: '#4AD846',
    darkYellow: '#DCA613',
    blue: '#2789B7',
    grey: '#CFCFCF',
    red: '#F51E20',
    darkGrey: 'rgb(99 99 99)'
}

const borderVariant = {
    borderRadiusContainer: "15px",
    borderRadiusStyleInput: "5px",
}

const theme = createMuiTheme({
    color: {
        green: colorVariant.green,
        darkYellow: colorVariant.darkYellow,
        blue: colorVariant.blue,
        grey: colorVariant.grey,
        lightGrey: colorVariant.lightGrey,
        red:  colorVariant.red,
        darkGrey: colorVariant.darkGrey
    },
    container: {
        borderRadius: borderVariant.borderRadiusContainer,
    },
    titleContainer: {
        width: '100%',
        backgroundColor: colorVariant.lightGrey,
        borderTopRightRadius: borderVariant.borderRadiusContainer,
        borderTopLeftRadius: borderVariant.borderRadiusContainer,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    styleInput: {
        width: '50px',
        borderRadius: borderVariant.borderRadiusStyleInput,
        border: `1px solid ${colorVariant.lightGrey}`,
        fontSize: '12px'
    }
});

export default theme