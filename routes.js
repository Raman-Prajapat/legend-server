const mailchimp = require('@mailchimp/mailchimp_marketing');


const submitMail = async (request, response) => {
  let _response = {};
  try {


    mailchimp.setConfig({
      apiKey: "6bafc64c899f8c0981044721e272d3aa-us10",
      server: "us10"
    });
    const { email } = request.body;
    console.log('email', email);
    const result = await mailchimp.lists.addListMember("54e9e280b5", {
      email_address: email,
      status: "subscribed",
    });
    if (result.status == 'subscribed') {
      response.send({ status: 1, message: 'Subscribed Successfully!' });
    }
    else {
      response.send({ status: 0, message: 'Something went wrong, please check with administrator!' });
    }
  } catch (e) {
    if (e.status == 400) {
      let body = JSON.parse(e.response.text);
      response.send({ status: 0, message: body.title });
    }
  }
}

module.exports = { submitMail }
