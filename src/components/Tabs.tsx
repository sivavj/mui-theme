import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Container, CssBaseline, Typography } from "@mui/material";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container>
      <CssBaseline />
      <Box sx={{ width: "100%", typography: "body1", mt: 3 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Tamil" value="1" />
              <Tab label="Telugu" value="2" />
              <Tab label="Malayalam" value="3" />
              <Tab label="English" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Typography component="h1" variant="h4">
              நன்மைகள்
            </Typography>
            <Typography component="h3" variant="h6">
              டெவலப்பர்கள் மற்றும் பயனர்கள் இருவருக்கும் ஒரே மாதிரியாக
              டைப்ஸ்கிரிப்ட்டை உருவாக்கினோம். பல்வேறு வடிவமைப்புகளை அனுமதிக்கும்
              தீம்களை உருவாக்குவதை எளிதாக்கியுள்ளோம்; திரவம் அல்லது நிலையான
              அகலம், ஏராளமான ஸ்டைலிங் வாய்ப்புகளுடன். எடிட்டர் சக்தி வாய்ந்தது,
              நீங்கள் எழுதிய CSS ஸ்டைல்களை எடுக்கும் அறிவார்ந்த உரையாடல்கள்,
              கிராஃபிக்கல் டேபிள் எடிட்டர் மற்றும் தரநிலைகளுக்கு இணங்க HTML
              உருவாக்கத்தை எளிதாக்கும் கருவிகள். இருப்பினும், நிரல் CSS அல்லது
              HTML பற்றிய எந்த அறிவையும் கொண்டிருக்கவில்லை, எனவே நீங்கள் WYSIWYG
              எடிட்டர் மற்றும் இயல்புநிலை தீம்களில் ஒன்றைப் பயன்படுத்தி ஒரு
              வலைத்தளத்தை நிர்வகிக்கலாம்.
            </Typography>
          </TabPanel>
          <TabPanel value="2">
            <Typography component="h1" variant="h4">
              లాభాలు
            </Typography>
            <Typography component="h3" variant="h6">
              మేము డెవలపర్‌లు మరియు వినియోగదారుల కోసం టైప్‌స్క్రిప్ట్‌ని
              రూపొందించాము. మేము అనేక విభిన్న డిజైన్‌లను అనుమతించే థీమ్‌లను
              సృష్టించడాన్ని సులభతరం చేసాము; ద్రవం లేదా స్థిర వెడల్పు, పుష్కలంగా
              స్టైలింగ్ అవకాశాలతో. ఎడిటర్ శక్తివంతమైనది, మీరు వ్రాసిన CSS
              స్టైల్‌లను ఎంచుకునే తెలివైన డైలాగ్‌లతో పాటు గ్రాఫికల్ టేబుల్
              ఎడిటర్ మరియు స్టాండర్డ్స్ కంప్లైంట్ HTML సృష్టిని సులభతరం చేసే
              సాధనాలు. అయినప్పటికీ, ప్రోగ్రామ్ CSS లేదా HTML గురించి ఎటువంటి
              అవగాహన కలిగి ఉండదు మరియు మీరు WYSIWYG ఎడిటర్ మరియు డిఫాల్ట్
              థీమ్‌లలో ఒకదానిని ఉపయోగించడం ద్వారా వెబ్‌సైట్‌ను నిర్వహించవచ్చు.
            </Typography>
          </TabPanel>
          <TabPanel value="3">
            <Typography component="h1" variant="h4">
              ആനുകൂല്യങ്ങൾ
            </Typography>
            <Typography component="h3" variant="h6">
              ഡവലപ്പർമാർക്കും ഉപയോക്താക്കൾക്കും ഒരുപോലെ ഞങ്ങൾ ടൈപ്പ്സ്ക്രിപ്റ്റ്
              നിർമ്മിച്ചു. നിരവധി വ്യത്യസ്ത ഡിസൈനുകൾ അനുവദിക്കുന്ന തീമുകൾ
              സൃഷ്‌ടിക്കുന്നത് ഞങ്ങൾ എളുപ്പമാക്കിയിരിക്കുന്നു; ദ്രാവകം
              അല്ലെങ്കിൽ നിശ്ചിത വീതി, ധാരാളം സ്റ്റൈലിംഗ് അവസരങ്ങൾ. എഡിറ്റർ
              ശക്തമാണ്, നിങ്ങൾ എഴുതിയ CSS ശൈലികൾ എടുക്കുന്ന ഇന്റലിജന്റ്
              ഡയലോഗുകളും ഒരു ഗ്രാഫിക്കൽ ടേബിൾ എഡിറ്ററും സ്റ്റാൻഡേർഡുകൾക്ക്
              അനുസൃതമായ HTML സൃഷ്ടിക്കാൻ സഹായിക്കുന്ന ടൂളുകളും. എന്നിരുന്നാലും,
              പ്രോഗ്രാമിന് CSS അല്ലെങ്കിൽ HTML എന്നിവയെ കുറിച്ച് അറിവില്ല,
              അതിനാൽ WYSIWYG എഡിറ്ററും സ്ഥിരസ്ഥിതി തീമുകളും ഉപയോഗിച്ച്
              നിങ്ങൾക്ക് ഒരു വെബ്‌സൈറ്റ് നിയന്ത്രിക്കാനാകും.
            </Typography>
          </TabPanel>
          <TabPanel value="4">
            <Typography component="h1" variant="h4">
              Benifits
            </Typography>
            <Typography component="h3" variant="h6">
              We built Typescript for both developers and users alike. We’ve
              made it easy to create themes that allow for a great number of
              different designs; fluid or fixed width, with plenty of styling
              opportunities. The editor is powerful, with intelligent dialogs
              that pick up CSS styles that you’ve written, along with a
              graphical table editor and tools that facilitate standards
              compliant HTML creation. However, the program assumes no knowledge
              of CSS or HTML and so you can manage a website simply by using the
              WYSIWYG editor and one of the default themes.
            </Typography>
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
}
