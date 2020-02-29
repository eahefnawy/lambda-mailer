# :envelope: lambda-mailer
AWS Lambda for sending emails. Ready for deployment in 60 seconds.

This lambda gives your browser (or any client) a backend for sending emails.

### Features

* 30+ pre-configured services (Gmail, Hotmail, SendGrid...etc)
* HTML content as well as plain text alternative
* 30+ supported HTML template engines (handlebars, jade, haml...etc)
* Easy HTML styling with Juice
* Embedded images in HTML
* Email Attachments
* Unicode to use any characters

### Quick Usage

```
// install node-lambda
npm install -g node-lambda

// clone the lambda and get inside!
git clone https://github.com/eahefnawy/lambda-mailer.git
cd  lambda-mailer

// install dependencies
npm install

// create deployment files (to hold your env vars)
touch .env deploy.env event.json
```

`.env` file is used by your local machine to test and deploy the lambda, `deploy.env` is used by your lambda function after deployment. So there might be some duplicate env vars.

open `.env` and fill it with your AWS credentials: (make sure you have proper IAM permissions)

```
AWS_ENVIRONMENT=dev
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_SESSION_TOKEN=your_sesson token (optional)
AWS_ROLE_ARN=your_amazon_role
AWS_REGION=us-east-1
AWS_FUNCTION_NAME=your_lambda_name
AWS_HANDLER=index.handler
AWS_MODE=event
AWS_MEMORY_SIZE=128
AWS_TIMEOUT=60
AWS_DESCRIPTION=your_lambda_description
AWS_RUNTIME=nodejs
CONFIG_FILE=deploy.env

EMAIL_SERVICE=gmail
EMAIL_SERVICE_USER=username@gmail.com
EMAIL_SERVICE_PASS=password

```

open `deploy.env` and fill it with your gmail credentials:

```
EMAIL_SERVICE=gmail
EMAIL_SERVICE_USER=username@gmail.com
EMAIL_SERVICE_PASS=password
```

open `event.json` and fill it with the following sample event: (just change the `to` and `from` Properties)

```
{
  "from": "username@gmail.com",
  "to": "any@email.com",
  "subject": "Hello",
  "template": "welcome",
  "context": {
    "first_name": "Sam",
    "last_name": "Smith"
  }
}

```
now everything is set! Let's test locally!

```
node-lambda run
```

This will use the `welcome` template coupled with the context/data (first_name & last_name).
You should receive an email that says:

```
Welcome Sam Smith
```

You can edit the template text by editing these two files:

```
lambda-mailer/templates/welcome/html.handlebars
lambda-mailer/templates/welcome/text.handlebars
```

now that it works locally, let's deploy to AWS:

```
node-lambda deploy
```
That's it! Now you can call the lambda from any AWS SDK, like your browser JS SDK.

### Supported Services
lambda-mailer supports the following 30 service, pre-configured and ready to use. You just provide the service, username & password in env vars as shown earlier:

* **'1und1'**
* **'AOL'**
* **'DebugMail.io'**
* **'DynectEmail'**
* **'FastMail'**
* **'GandiMail'**
* **'Gmail'**
* **'Godaddy'**
* **'GodaddyAsia'**
* **'GodaddyEurope'**
* **'hot.ee'**
* **'Hotmail'**
* **'iCloud'**
* **'mail.ee'**
* **'Mail.ru'**
* **'Mailgun'**
* **'Mailjet'**
* **'Mandrill'**
* **'Naver'**
* **'Postmark'**
* **'QQ'**
* **'QQex'**
* **'SendCloud'**
* **'SendGrid'**
* **'SES'**
* **'Sparkpost'**
* **'Yahoo'**
* **'Yandex'**
* **'Zoho'**

### Template Engines
lambda-mailer comes with a `welcome` template for demonstration. You can add/remove templates from the following directory:

```
lambda-mailer/templates/
```

lambda-mailer uses handlebars as the default template engine. You can use any other template engine by adding it to the `package.json` file and update dependencies with `npm install`.

Here's the full list of supported templates:

- [atpl](https://github.com/soywiz/atpl.js)
- [doT.js](https://github.com/olado/doT) [(website)](http://olado.github.io/doT/)
- [dust (unmaintained)](https://github.com/akdubya/dustjs) [(website)](http://akdubya.github.com/dustjs/)
- [dustjs-linkedin (maintained fork of dust)](https://github.com/linkedin/dustjs) [(website)](http://linkedin.github.io/dustjs/)
- [eco](https://github.com/sstephenson/eco)
- [ect](https://github.com/baryshev/ect) [(website)](http://ectjs.com/)
- [ejs](https://github.com/visionmedia/ejs)
- [haml](https://github.com/visionmedia/haml.js) [(website)](http://haml-lang.com/)
- [haml-coffee](https://github.com/9elements/haml-coffee) [(website)](http://haml-lang.com/)
- [hamlet](https://github.com/gregwebs/hamlet.js)
- [handlebars](https://github.com/wycats/handlebars.js/) [(website)](http://handlebarsjs.com/)
- [hogan](https://github.com/twitter/hogan.js) [(website)](http://twitter.github.com/hogan.js/)
- [htmling](https://github.com/codemix/htmling)
- [jade](https://github.com/visionmedia/jade) [(website)](http://jade-lang.com/)
- [jazz](https://github.com/shinetech/jazz)
- [jqtpl](https://github.com/kof/node-jqtpl) [(website)](http://api.jquery.com/category/plugins/templates/)
- [JUST](https://github.com/baryshev/just)
- [liquor](https://github.com/chjj/liquor)
- [lodash](https://github.com/bestiejs/lodash) [(website)](http://lodash.com/)
- [mote](https://github.com/satchmorun/mote) [(website)](http://satchmorun.github.io/mote/)
- [mustache](https://github.com/janl/mustache.js)
- [nunjucks](https://github.com/mozilla/nunjucks) [(website)](https://mozilla.github.io/nunjucks)
- [QEJS](https://github.com/jepso/QEJS)
- [ractive](https://github.com/Rich-Harris/Ractive)
- [react](https://github.com/facebook/react)
- [swig](https://github.com/paularmstrong/swig) [(website)](http://paularmstrong.github.com/swig/)
- [templayed](http://archan937.github.com/templayed.js/)
- [liquid](https://github.com/leizongmin/tinyliquid) [(website)](http://liquidmarkup.org/)
- [toffee](https://github.com/malgorithms/toffee)
- [underscore](https://github.com/documentcloud/underscore) [(website)](http://documentcloud.github.com/underscore/)
- [walrus](https://github.com/jeremyruppel/walrus) [(website)](http://documentup.com/jeremyruppel/walrus/)
- [whiskers](https://github.com/gsf/whiskers.js)

after chosing your template engine, make sure the file extensions of the template files match the template you chose:

```
html.{{ext}}
text.{{ext}}
style.{{ext}}
```

### Mail Options (Event Properties):

Here's the full list of options you can pass in your event:

  - **from** - The e-mail address of the sender. All e-mail addresses can be plain `'sender@server.com'` or formatted `'Sender Name <sender@server.com>'`, see [here](#address-formatting) for details
  - **sender** - An e-mail address that will appear on the *Sender:* field
  - **to** - Comma separated list or an array of recipients e-mail addresses that will appear on the *To:* field
  - **cc** - Comma separated list or an array of recipients e-mail addresses that will appear on the *Cc:* field
  - **bcc** - Comma separated list or an array of recipients e-mail addresses that will appear on the *Bcc:* field
  - **replyTo** - An e-mail address that will appear on the *Reply-To:* field
  - **inReplyTo** - The message-id this message is replying
  - **references** - Message-id list (an array or space separated string)
  - **subject** - The subject of the e-mail
  - **template** - The template to use for this email. Make sure it matches one of the folder names inside the `templates` folder
  - **context** - The context/data the template needs. eg. `{"first_name": "..."}`
  - **watchHtml** - Apple Watch specific HTML version of the message (*experimental*)
  - **headers** - An object or array of additional header fields (e.g. *{"X-Key-Name": "key value"}* or *[{key: "X-Key-Name", value: "val1"}, {key: "X-Key-Name", value: "val2"}]*)
  - **attachments** - An array of attachment objects
  - **alternatives** - An array of alternative text contents (in addition to text and html parts)
  - **envelope** - optional SMTP envelope, if auto generated envelope is not suitable
  - **messageId** - optional Message-Id value, random value will be generated if not set
  - **date** - optional Date value, current UTC string will be used if not set
  - **encoding** - optional transfer encoding for the textual parts
