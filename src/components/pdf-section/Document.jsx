import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    padding: 30,
    paddingTop: 40,
    fontSize: 11,
    flexGrow: 1,
  },
  header: {
    alignItems: "center",
    gap: "8px"
  }
});


function MyDocument({personalInfo}) {
  return (
    <PDFViewer style={{ width: '100%', height: '100%' }}>
        <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.header}>
                  <Text style={{fontSize: 20, fontWeight: "bold"}}>{personalInfo.fullName}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text>
                      {Object.entries(personalInfo)
                      .filter(([key, value]) => value.length > 0 && key !== "fullName")
                      .map(([key, value]) => value)
                      .join(" | ")
                    }
                    </Text>
                  </View>
              </View>
            </Page>
        </Document>
    </PDFViewer>
  )
}

export default MyDocument