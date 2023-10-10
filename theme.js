import { Typography, Colors } from 'react-native-ui-lib';

function AppTheme() {
    Colors.loadColors({
        green: '#495E57',
        yellow: '#F4CE14',
        coral: '#EE9972',
        lightcoral: '#FBDABB',
        lightgray: '#EDEFEE',
        asfalt: '#333333'
    });

    Typography.loadTypographies({
        displayTitle: { fontSize: 64, fontWeight: '600', lineHeight: 96 },
        subtitle: { fontSize: 40, fontWeight: '400', lineHeight: 60 },
        leadText: { fontSize: 18, fontWeight: '600', lineHeight: 27 },
        sectionTitle: { fontSize: 20, fontWeight: '800', lineHeight: 30 },
        sectionCategories: { fontSize: 16, fontWeight: '800', lineHeight: 24 },
        cardTitle: { fontSize: 18, fontWeight: '700', lineHeight: 27 },
        paragraph: { fontSize: 16, fontWeight: '400', lineHeight: 24 },
        highlight: { fontSize: 16, fontWeight: '600', lineHeight: 24 },
    });
}

export default AppTheme;
