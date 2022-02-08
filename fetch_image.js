const { google } = require('googleapis');

const CLIENT_ID = '446383357704-nogfbvolb5rm8itgjou41js1rqicuqnh.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFRESH_TOKEN = '1//04Yako5JpNkOlCgYIARAAGAQSNwF-L9Ir9tiSg4Ilu5CjLtdWmC5HxI1p80OqoI8DisJ1WBuhFox5URIocAqRkWJymRRmkOgsJ6s';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Setting up the Authentication Object
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// Initializing the Google Drive
const drive = google.drive({
  version: 'v3',
  auth: oauth2Client,
});



// *******  Async Function that generates a public url for a given ID  ************ //

async function generatePublicUrl() {
  try {
    const fileId = '1BgJdt8D413B5ccCjWa9A1J7KvzCZnjBp';  // ID of the image on Drive
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });
    /*########################################
    ## webViewLink: View the file in browser #
    ## webContentLink: Direct download link ##
    ########################################*/
    const result = await drive.files.get({
      fileId: fileId,
      fields: 'webViewLink, webContentLink',
    }); 
  } catch (error) {
    console.log(error.message);
  }
}

generatePublicUrl();