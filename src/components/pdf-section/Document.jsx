import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    padding: 40,
    paddingTop: 50,
    fontSize: 10,
    flexGrow: 1,
  },
  header: {
    alignItems: "center",
    gap: 8,
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    paddingBottom: 2,
  },
  sectionItem: {
    marginTop: 2,
    marginBottom: 10,
    gap: 3,
  },
});

function formatDate(date) {
  if (!date) return "";
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [year, month] = date.split("-");
  const formattedMonth = monthNames[parseInt(month) - 1];

  return `${formattedMonth} ${year}`;
}

function formatGraduationDate(date) {
  if (!date) return "";
  const [month, year] = formatDate(date).split(" ");
  const graduationDate = new Date(year, parseInt(month) - 1);
  const today = new Date();

  if (graduationDate < today) {
    return `Graduated, ${month} ${year}`;
  } else {
    return `Expected Graduation, ${month} ${year}`;
  }
}

function MyDocument({
  personalInfo,
  educationItems,
  experienceItems,
  projectItems,
  skillItems,
}) {
  return (
    <PDFViewer style={{ width: "100%", height: "100%" }}>
      <Document>
        <Page size="A4" style={styles.page}>
          {/* personal information header section*/}
          <View style={styles.header}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {personalInfo.fullName.toUpperCase()}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text>
                {Object.entries(personalInfo)
                  .filter(
                    ([key, value]) => value.length > 0 && key !== "fullName",
                  )
                  .map(([, value]) => value)
                  .join(" | ")}
              </Text>
            </View>
          </View>

          {/* education information section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            {educationItems.map((item, index) => (
              <View key={index} style={styles.sectionItem}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "semibold" }}>{item.course}</Text>
                  <Text style={{ marginLeft: "auto" }}>
                    {formatGraduationDate(item.graduationDate)}
                  </Text>
                </View>
                <Text style={{ fontWeight: "semibold" }}>
                  {item.institutionName}
                </Text>
                {item.description && (
                  <View style={{ flexDirection: "row", marginLeft: 10 }}>
                    <Text>• </Text>
                    <Text style={{ flex: 1, marginLeft: 10 }}>
                      {item.description}
                    </Text>
                  </View>
                )}
              </View>
            ))}
          </View>

          {/* experiences information section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
            {experienceItems.map((item, index) => (
              <View key={index} style={styles.sectionItem}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "semibold" }}>
                    {item.companyName}
                  </Text>
                  <Text style={{ marginLeft: "auto" }}>
                    {formatDate(item.startDate)} -{" "}
                    {item.endDate ? formatDate(item.endDate) : "Present"}
                  </Text>
                </View>
                <Text style={{ fontWeight: "semibold" }}>{item.jobTitle}</Text>
                {item.description &&
                  item.description.split("\n-").map((point, index) => (
                    <View
                      key={index}
                      style={{ flexDirection: "row", marginLeft: 10 }}
                    >
                      <Text>• </Text>
                      <Text style={{ flex: 1, marginLeft: 10 }}>
                        {point.replace(/^-?\s*/, "")}
                      </Text>
                    </View>
                  ))}
              </View>
            ))}
          </View>

          {/* projects information section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>RELEVANT PROJECTS</Text>
            {projectItems.map((item, index) => (
              <View key={index} style={styles.sectionItem}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "semibold" }}>
                    {item.projectName}
                  </Text>
                  <Text style={{ marginLeft: "auto" }}>
                    {formatDate(item.startDate)} -{" "}
                    {item.endDate ? formatDate(item.endDate) : "Present"}
                  </Text>
                </View>
                <Text style={{ fontWeight: "semibold" }}>
                  {item.association}
                </Text>
                {item.description &&
                  item.description.split("\n-").map((point, index) => (
                    <View
                      key={index}
                      style={{ flexDirection: "row", marginLeft: 10 }}
                    >
                      <Text>• </Text>
                      <Text style={{ flex: 1, marginLeft: 10 }}>
                        {point.replace(/^-?\s*/, "")}
                      </Text>
                    </View>
                  ))}
              </View>
            ))}
          </View>

          {/* skills information section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>SKILLS</Text>
            {skillItems.map((item, index) => (
              <View key={index} style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>{item.skillGroup}: </Text>
                <Text>{item.groupItems}</Text>
              </View>
            ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default MyDocument;
