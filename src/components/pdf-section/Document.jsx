import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});


function MyDocument() {
  return (
    <PDFViewer style={{ width: '100%', height: '100%' }}>
        <Document>
            <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Hello world, this is some text in my PDF renderer</Text>
            </View>
            </Page>
        </Document>
    </PDFViewer>
  )
}

export default MyDocument